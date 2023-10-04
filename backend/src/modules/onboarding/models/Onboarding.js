import { DataTypes } from 'sequelize';
import sequelize from "../../../../config/db.js";

const Onboarding = sequelize.define('Onboarding', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  onboarderId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  onboardeeId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations, if needed
Onboarding.associate = (models) => {
  // Example: Onboarding belongs to Users
  Onboarding.belongsTo(models.Account, {
    foreignKey: 'onboarderId',
    as: 'onboarder',
  });

  Onboarding.belongsTo(models.Account, {
    foreignKey: 'onboardeeId',
    as: 'onboardee',
  });
};

export default Onboarding;