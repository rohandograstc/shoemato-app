"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Onboardings", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Next, define associations
    await queryInterface.addColumn("Onboardings", "onboarderId", {
      type: Sequelize.UUID,
      references: {
        model: "Accounts", // Change to the actual model name for onboarder
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Onboardings", "onboardeeId", {
      type: Sequelize.UUID,
      references: {
        model: "Accounts", // Change to the actual model name for onboardee
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop associations first
    // await queryInterface.removeColumn("Onboardings", "onboarderId");
    // await queryInterface.removeColumn('Onboardings', 'onboardeeId');
    // Then, drop the Onboardings table
    // await queryInterface.dropTable('Onboardings');
  },
};
