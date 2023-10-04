import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../config/db.js";
import Account from "../../account/models/AccountModal.js";
import { Product } from "./ProductModal.js";
import { Variant } from "./ProductVariantModal.js";

// const SellerProduct = sequelize.define("SellerProduct", {
//   id: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   price: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   AccountId: {
//     type:  DataTypes.UUID,
//     references: {
//       model: 'Accounts', // Adjust to the actual name of your Seller model
//       key: 'id',
//     },
//     allowNull: false,
//   },
// });

// // Associate SellerProduct with a specific seller
// SellerProduct.belongsTo(Account);

// // Associate SellerProduct with a specific product
// SellerProduct.belongsTo(Product);

// // ... other associations and model definitions ...

// export { SellerProduct };

const SellerProduct = sequelize.define("SellerProduct", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  AccountId: {
    type: DataTypes.UUID,
    references: {
      model: "Accounts", // Adjust to the actual name of your Seller model
      key: "id",
    },
    allowNull: false,
  },
  ProductId: {
    type: DataTypes.UUID,
    references: {
      model: "Products",
      key: "id",
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Provide a default value here
  },
  // Define an array of variantId values
  // Define an array of variantId values
  variants: {
    type: DataTypes.ARRAY(DataTypes.JSONB), // Use JSONB to store variant information
    defaultValue: [], // Default value is an empty array
  },
});

// Associate SellerProduct with a specific seller
// SellerProduct.belongsTo(Account);
// // Define associations in an associate method
// SellerProduct.associate = (models) => {
//   SellerProduct.hasMany(models.Variant, { as: 'variants' });
// };
// SellerProduct.hasMany(Variant, { as: 'variants' });
// SellerProduct.hasMany(Variant);

// SellerProduct.hasMany(Variant);
// SellerProduct.hasOne(Product);
// Associate SellerProduct with a specific product
// SellerProduzct.belongsTo(Product);

// Define associations with other models

SellerProduct.associate = (models) => {
  SellerProduct.belongsTo(models.Account, { as: 'AccountId' });
};
SellerProduct.associate = (models) => {
  SellerProduct.belongsTo(models.Product, { as: 'ProductId' });
};
// SellerProduct.associate = (models) => {
//   SellerProduct.hasMany(models.Variant, { as: 'AccountId' });
// };

// SellerProduct.belongsTo(Account); // A seller product belongs to an account (seller)
// SellerProduct.belongsTo(Product); // A seller product belongs to a product
// SellerProduct.hasMany(Variant); // A seller product can have multiple variants


// ... other associations and model definitions ...

export { SellerProduct };
