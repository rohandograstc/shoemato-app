"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accounts", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "retailer",
        validate: {
          isIn: [
            ["superadmin", "admin", "manufacturer", "wholesaler", "retailer"],
          ],
        },
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          is: /^\+?[0-9]{1,20}$/,
        },
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      lastLogin: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      resetPasswordExpires: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      totalOrders: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      totalSpent: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
      },
      lastPurchaseDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      profilePicture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      wishlist: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        defaultValue: [],
      },
      shippingAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      billingAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentMethods: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        defaultValue: [],
      },
      cart: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      lastActive: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      verificationToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      referralCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      referredBy: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      loyaltyPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      preferredLanguage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      companyAddress: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      vatNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      taxId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      socialMediaLinks: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      additionalFields: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      orderHistory: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      wishlists: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      reviews: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      savedItems: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        defaultValue: [],
      },
      preferredCurrency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      notifications: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      preferences: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      onboarderId: {
        type: Sequelize.UUID,
        references: {
          model: "Accounts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable("Accounts");

    // Remove associations
    // await queryInterface.removeColumn("Onboardings", "onboarderId");

    // Drop the Account table
    // await queryInterface.dropTable("Accounts");
    // Remove the foreign key columns
    // await queryInterface.removeColumn("Accounts", "onboarderId");
    // await queryInterface.removeColumn("Accounts", "onboardeeId");
  },
};
