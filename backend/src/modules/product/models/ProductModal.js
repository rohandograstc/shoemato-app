import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../config/db.js";
import Account from "../../account/models/AccountModal.js";
import { Variant } from "./ProductVariantModal.js";
import { SellerProduct } from "./SellerProductModal.js";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  materialType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lowestPercent: {
    // Renamed from quantityLowest
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  highestPercent: {
    // Renamed from quantityHighest
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  wholesalerPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  retailerPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  salePrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  lowestPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  MRP: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      // Parse tags as an array
      const rawValue = this.getDataValue("tags");
      return rawValue ? rawValue.split(",") : [];
    },
    set(value) {
      // Store tags as a comma-separated string
      this.setDataValue("tags", value.join(","));
    },
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  images: {
    type: DataTypes.JSON, // Store image data as JSON
    allowNull: true,
    defaultValue: [], // Default to an empty array
  },
  primaryImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AccountId: {
    type:  DataTypes.UUID,
    references: {
      model: 'Accounts', // Adjust to the actual name of your Seller model
      key: 'id',
    },
    allowNull: false,
  },
});

// Define associations with other models if needed
// Define associations with other models using the associate method
Product.associate = (models) => {
  Product.belongsTo(models.Account, { as: 'AccountId' }); // A product belongs to an account (seller)
  Product.hasMany(models.SellerProduct, { as: 'ProductId' }); // A product can have multiple seller products
};
// Product.belongsTo(Account); // A product belongs to an account (seller)
// Product.hasMany(SellerProduct); // A product can have multiple seller products
// Product.hasMany(Variant);
// Associate each product with multiple variants
// Product.hasMany(Variant);
export { Product };
