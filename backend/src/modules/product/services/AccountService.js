import User from "../models/Account";

const userService = {
  async createUser(userData) {
    try {
      // Create a new user record in the database using the provided userData
      const newUser = await User.create(userData);

      return newUser;
    } catch (error) {
      throw new Error("Failed to create a new user");
    }
  },

  async getUserById(userId) {
    try {
      // Retrieve a user record from the database by the provided userId
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      throw new Error(`Failed to get user with ID ${userId}`);
    }
  },

  async updateUser(userId, userData) {
    try {
      // Update the user record in the database with the provided userData
      const [rowsAffected, [updatedUser]] = await User.update(userData, {
        where: { id: userId },
        returning: true,
      });

      if (rowsAffected === 0) {
        throw new Error("User not found");
      }

      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to update user with ID ${userId}`);
    }
  },

  async deleteUser(userId) {
    try {
      // Delete a user record from the database by the provided userId
      const rowsAffected = await User.destroy({
        where: { id: userId },
      });

      if (rowsAffected === 0) {
        throw new Error("User not found");
      }

      return true;
    } catch (error) {
      throw new Error(`Failed to delete user with ID ${userId}`);
    }
  },
};

export default userService;
