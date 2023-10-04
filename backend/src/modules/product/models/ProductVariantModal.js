import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../config/db.js";
import { SellerProduct } from "./SellerProductModal.js";
import { Product } from "./ProductModal.js";

const Variant = sequelize.define("Variant", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  size: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  ProductId: {
    type: DataTypes.UUID,
    references: {
      model: "Products",
      key: "id",
    },
    allowNull: false,
  },
  AccountId: {
    type: DataTypes.UUID,
    references: {
      model: 'Accounts',
      key: 'id',
    },
    allowNull: false,
  },
});


// Associate each variant with a specific SellerProduct
// Variant.belongsTo(Product);
Variant.associate = (models) => {
  Variant.belongsTo(models.Account, { as: 'AccountId' });
};
// Variant.hasMany(SellerProduct);
// Variant.belongsTo(SellerProduct, { as: 'sellerProduct' });


// ... other associations and model definitions ...

export { Variant };
