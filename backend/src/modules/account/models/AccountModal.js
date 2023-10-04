import { DataTypes } from "sequelize";
import sequelize from "../../../../config/db.js";
import Onboarding from "../../onboarding/models/Onboarding.js";
import { Product } from "../../product/models/ProductModal.js";
import { SellerProduct } from "../../product/models/SellerProductModal.js";
import AddressBook from "./AddressBook.js";

const Account = sequelize.define("Account", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "retailer",
    validate: {
      isIn: [["superadmin", "admin", "manufacturer", "wholesaler", "retailer"]],
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^\+?[0-9]{1,20}$/,
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  resetPasswordToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resetPasswordExpires: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  totalOrders: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalSpent: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
  lastPurchaseDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wishlist: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
  shippingAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  billingAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentMethods: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
  cart: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  },
  lastActive: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  verificationToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  referralCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  referredBy: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  loyaltyPoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  preferredLanguage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  companyAddress: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  vatNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  taxId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  socialMediaLinks: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  additionalFields: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  orderHistory: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  },
  wishlists: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  },
  reviews: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  },
  savedItems: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
  preferredCurrency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notifications: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  },
  preferences: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: {},
  }
});

// // Define associations
// Account.hasMany(Onboarding, {
//   foreignKey: 'onboarderId',
//   as: 'onboardings',
// });

// Define the associations between users of different roles
Account.hasMany(Account, { as: "onboarder", foreignKey: "onboarderId" });
// Account.belongsTo(Account, { as: 'onboardee', foreignKey: 'onboardeeId' });
Account.hasMany(Product);
Account.hasMany(SellerProduct);
Account.hasMany(AddressBook);
// Define associations using the 'associate' function
// Account.associate = (models) => {
//   // An Account can have multiple AddressBook entries
//   Account.hasMany(models.AddressBook, { foreignKey: "AccountId" });
// };
// // Define additional associations for each role, e.g., admin, manufacturer, wholesaler, retailer
// Account.hasMany(Account, { as: 'adminAccounts', foreignKey: 'adminId' });
// Account.hasMany(Account, { as: 'manufacturerAccounts', foreignKey: 'manufacturerId' });
// Account.hasMany(Account, { as: 'wholesalerAccounts', foreignKey: 'wholesalerId' });
// Account.hasMany(Account, { as: 'retailerAccounts', foreignKey: 'retailerId' });

export default Account;
