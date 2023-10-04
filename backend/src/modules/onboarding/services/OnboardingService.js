import sequelize from "../../../../config/db.js";
import Account from "../../account/models/AccountModal.js"; // Adjust the import path as needed
import { Sequelize } from "sequelize";
import Onboarding from "../../onboarding/models/Onboarding.js"; // Adjust the import path as needed

async function onboardUser(onboarderId, onboardeeId) {
  try {
    // Fetch the onboarder and onboardee based on their IDs
    const onboarder = await Account.findByPk(onboarderId);
    const onboardee = await Account.findByPk(onboardeeId);

    if (!onboarder || !onboardee) {
      throw new Error("User not found");
    }

    // Determine the roles of the onboarder and onboardee
    const onboarderRole = onboarder.role;
    const onboardeeRole = onboardee.role;
    const onboarderIdOfOnboardee = onboardee.onboarderId;

    // Check if the onboardee has the role of "onboarder" and disallow onboarding
    if (onboarderIdOfOnboardee) {
      throw new Error("Account is already onborded by other User.");
    }

    // Define the allowed hierarchy
    const hierarchy = {
      superadmin: ["admin"],
      admin: ["manufacturer"],
      manufacturer: ["wholesaler", "retailer"],
      wholesaler: ["retailer"],
      retailer: ["retailer"],
    };

    // Check if the onboarding is allowed based on the hierarchy
    if (
      !hierarchy[onboarderRole] ||
      !hierarchy[onboarderRole].includes(onboardeeRole)
    ) {
      throw new Error("Invalid onboarding");
    }

    // Set the appropriate foreign key based on the roles
    if (onboardeeRole === "superadmin") {
      await onboardee.setOnboarder(onboarder);
    } else {
      await onboarder.addOnboarder(onboardee);
    }

    console.log({ onboarderRole, onboardeeRole });
  } catch (error) {
    throw error;
  }
}

// async function getUserHierarchy(userId, targetRole) {
//   console.log({ userId, targetRole });
//   try {
//     // Fetch the user based on their ID
//     const user = await Account.findByPk(userId);

//     if (!user) {
//       throw new Error("User not found");
//     }

//     // Function to recursively fetch onboarded users of a specific role
//     async function fetchOnboardedUsers(user, roleFilter, role) {
//       let accounts = [];
//       console.log({ roleFilter, role });

//       // Determine the association based on the target role
//       let association;
//       if (targetRole === "admin") {
//         association = "AdminAccounts";
//       } else if (targetRole === "manufacturer") {
//         association = "ManufacturerAccounts";
//       } else if (targetRole === "wholesaler") {
//         association = "WholesalerAccounts";
//       } else if (targetRole === "retailer") {
//         association = "RetailerAccounts";
//       } else {
//         if (user.role === "admin") {
//           association = "AdminAccounts";
//         } else if (user.role === "manufacturer") {
//           association = "ManufacturerAccounts";
//         } else if (user.role === "wholesaler") {
//           association = "WholesalerAccounts";
//         } else if (user.role === "retailer") {
//           association = "RetailerAccounts";
//         }
//       }

//       // Fetch all onboarded accounts for the current user based on the association
//       accounts = await user[`get${association}`]();
//       console.log("User:", user.id);
//       console.log("Target Role:", targetRole);
//       console.log("Association:", association);
//       console.log("Accounts:", accounts);

//       // Initialize the hierarchy as an empty array
//       const hierarchy = [];

//       // // If there are no more onboarded accounts, return the hierarchy
//       // if (accounts.length === 0) {
//       //   return hierarchy;
//       // }

//       // Recursively fetch hierarchy for each onboarded user
//       for (const account of accounts) {
//         const onboardedUser = {
//           userId: account.id,
//           role: account.role,
//           onboardedUsers: [],
//         };

//         onboardedUser.onboardedUsers = await fetchOnboardedUsers(
//           account,
//           targetRole,
//           []
//         );

//         hierarchy.push(onboardedUser);
//       }

//       return hierarchy;
//     }
//     // Debugging output

//     // Start fetching the hierarchy based on the specified target role
//     const hierarchy = await fetchOnboardedUsers(user, targetRole, []);

//     return hierarchy;
//   } catch (error) {
//     throw error;
//   }
// }

// async function getUserHierarchy(userId, targetRole) {
//   console.log({ targetRole });

//   try {
//     let data = Account.findOne({
//       where: { id: userId },
//       include: [
//         {
//           model: Account,
//           as: "onboarder",
//           // where: { role: targetRole },
//           attributes: ["id", "firstName", "lastName", "role"], // Define the attributes you want to retrieve
//           include: [
//             {
//               model: Account,
//               as: "onboarder",
//               // where: { role: targetRole },
//               attributes: ["id", "firstName", "lastName", "role"],
//               include: [
//                 {
//                   model: Account,
//                   as: "onboarder",
//                   // where: { role: targetRole },
//                   attributes: ["id", "firstName", "lastName", "role"],
//                   // You can continue nesting for deeper hierarchy if needed
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     });
//     // return data;
//     // Post-process the userHierarchy data to filter only "retailer" roles
//     const filteredHierarchy = filterHierarchyForRole(data, "retailer");

//     return filteredHierarchy;
//   } catch (err) {
//     throw err;
//   }
// }

/// Helper function to filter hierarchy data for a specific role
function filterHierarchyForRole(user, targetRole) {
  if (!user) {
    return null; // Handle the case where the user is null
  }

  if (user.role === targetRole) {
    return user;
  }

  if (user.onboarder) {
    const filteredOnboarders = user.onboarder.map((onboarder) =>
      filterHierarchyForRole(onboarder, targetRole)
    );

    // Filter out null values and return the user with onboarders
    user.onboarder = filteredOnboarders.filter(
      (onboarder) => onboarder !== null
    );

    if (user.onboarder.length > 0) {
      return user;
    }
  }

  return null;
}

async function getUserHierarchy(userId, role) {
  try {
    // const query = `
    // WITH RECURSIVE hierarchy AS (
    //   SELECT
    //   *
    //   FROM
    //     "Accounts"
    //   WHERE
    //     id = :userId
    //   UNION ALL
    //   SELECT
    //   child.*
    //   FROM
    //     "Accounts" child
    //   INNER JOIN
    //     hierarchy parent ON child."onboarderId" = parent.id
    // )
    // SELECT
    // *
    // FROM
    //   hierarchy
    // WHERE
    //   role = :role
    //   AND "onboarderId" IS NOT NULL;
    // `;

    const query = `WITH RECURSIVE hierarchy AS (
      SELECT
        a.*,
        a.id AS originalUserId,
        (SELECT role FROM "Accounts" WHERE id = a.id) AS originalUserRole
      FROM
        "Accounts" a
      WHERE
        a.id = :userId
      UNION ALL
      SELECT
        child.*,
        parent.originalUserId,
        parent.originalUserRole
      FROM
        "Accounts" child
      INNER JOIN hierarchy parent ON child."onboarderId" = parent.id 
        AND (parent.originalUserRole <> 'retailer' AND parent.role <> 'retailer')
        AND child.role = 'retailer')
    SELECT
      *
    FROM
      hierarchy
    WHERE
      role = :role
      AND "onboarderId" IS NOT NULL;`;

    const retailers = await sequelize.query(query, {
      replacements: { userId, role, Account },
      type: Sequelize.QueryTypes.SELECT,
    });
    console.log({ retailers });
    return retailers;
  } catch (err) {
    throw err;
  }
}

export { onboardUser, getUserHierarchy };
