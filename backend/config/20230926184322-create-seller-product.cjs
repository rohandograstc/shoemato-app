"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("SellerProducts", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      AccountId: {
        type: Sequelize.UUID,
        references: {
          model: "Accounts",
          key: "id",
        },
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.UUID,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // variants: {
      //   type: Sequelize.ARRAY(Sequelize.JSONB), // Use JSONB to store variant information
      //   defaultValue: [], // Default value is an empty array
      // },
    });
    await queryInterface.addColumn('Variants', 'SellerProducts', {
      type: Sequelize.ARRAY(Sequelize.JSONB),
      allowNull: false,
      references: {
        model: 'Variants', // Adjust to your actual table name
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    await queryInterface.addConstraint("SellerProducts", {
      fields: ["ProductId"],
      type: "foreign key",
      references: {
        table: "Products",
        field: "id",
      },
      onDelete: "cascade", // Define the desired behavior on delete
    });

    await queryInterface.addConstraint("SellerProducts", {
      fields: ["AccountId"],
      type: "foreign key",
      references: {
        table: "Accounts",
        field: "id",
      },
      onDelete: "cascade", // Define the desired behavior on delete
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("SellerProducts");
  },
};
