import { DataTypes } from "sequelize";
import sequelize from "../../../../config/db.js";
import Account from "./AccountModal.js";

const AddressBook = sequelize.define("AddressBook", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  addressTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressLine1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressLine2: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isPrimary: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  AccountId: {
    type: DataTypes.UUID,
    references: {
      model: "Accounts",
      key: "id",
    },
    allowNull: false,
  },
});

// Assuming you have an Account model, you can associate AddressBook with it
// AddressBook.belongsTo(Account);
// Define associations using the 'associate' function
AddressBook.associate = (models) => {
  // Define the association between AddressBook and Account models
  AddressBook.belongsTo(models.Account, { foreignKey: "AccountId" });
};

export default AddressBook;
