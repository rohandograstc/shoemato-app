"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Variants", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      size: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      ProductId: {
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
      },
      AccountId: {
        type: Sequelize.UUID,
        references: {
          model: 'Accounts',
          key: 'id',
        },
        allowNull: false,
      },
      // SellerProductId: {
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "SellerProducts",
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    
    // await queryInterface.addColumn("SellerProducts", "variantIds", {
    //   type: Sequelize.ARRAY(Sequelize.UUID),
    //   defaultValue: [], // Default value is an empty array
    // });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable("Variants");
    await queryInterface.removeColumn("SellerProducts", "variantIds");
  },
};
