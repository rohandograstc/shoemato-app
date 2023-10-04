"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.STRING,
      },
      subCategory: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      materialType: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      lowestPercent: {
        type: Sequelize.INTEGER,
      },
      highestPercent: {
        type: Sequelize.INTEGER,
      },
      wholesalerPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      retailerPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      salePrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      lowestPrice: {
        type: Sequelize.DECIMAL(10, 2),
      },
      MRP: {
        type: Sequelize.DECIMAL(10, 2),
      },
      tags: {
        type: Sequelize.STRING,
      },
      inStock: {
        type: Sequelize.BOOLEAN,
      },
      sku: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.JSON,
      },
      primaryImage: {
        type: Sequelize.STRING,
      },
      thumbnail: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      // AccountId: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "Accounts", // Adjust to the actual name of your Seller model
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
    });
    // Adding a foreign key constraint to Products table
    await queryInterface.addConstraint("Products", {
      fields: ["AccountId"],
      type: "foreign key",
      allowNull: false,
      references: {
        table: "Accounts",
        field: "id",
      },
      onDelete: "cascade", // Define the desired behavior on delete
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
