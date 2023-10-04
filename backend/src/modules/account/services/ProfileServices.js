import Account from "../models/AccountModal.js";
import AddressBook from "../models/AddressBook.js";
import { v4 as uuidv4 } from "uuid";

export const getProfile = async (userId) => {
  try {
    console.log({ userId });
    const user = await Account.findByPk(userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: AddressBook }],
    });
    console.log({ user });
    if (!user) {
      throw new Error("Account not found");
    }
    return user; // Assuming you have a 'profile' field in your Account model
  } catch (error) {
    throw error;
  }
};

export const editProfile = async (userId, updatedProfile) => {
  console.log({ userId, updatedProfile });
  try {
    let user = await Account.findByPk(userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: AddressBook }],
    });

    if (!user) {
      throw new Error("Account not found");
    }

    // Update the user's profile fields dynamically based on updatedProfile
    // console.log("User before updates:", user.toJSON()); // Log the user object before updates
    Object.assign(user, updatedProfile);

    // Initialize user.addressBook as an empty array if it's not present
    // if (!user.addressBook) {
    //   user.addressBook = [];
    // }

    // console.log("User after profile updates:", user.toJSON()); // Log the user object after profile updates

    console.log("Before mapping:");
    console.log(updatedProfile.addressBook);

    const updatedAddressBook = updatedProfile.addressBook.map((entry) => ({
      ...entry,
      id: uuidv4(), // Generate a unique UUID for each object
    }));

    console.log("After mapping:");
    console.log(updatedAddressBook);

    // Use `updatedAddressBook` in your `user.addAddressBooks` method
    if (updatedAddressBook) {
      const updatedAddressBookInstances = updatedAddressBook.map((entry) => ({
        ...entry,
        AccountId: user.id, // Set the foreign key to associate with the user
      }));
    
      const createdAddressBooks = await AddressBook.bulkCreate(updatedAddressBookInstances);
    
      // Get the IDs of the created AddressBook instances
      const updatedAddressBookIds = createdAddressBooks.map((book) => book.id);
    
      // Associate the AddressBooks with the user
      await user.setAddressBooks(updatedAddressBookIds);
    }
    // console.log("User after address book updates:", user.toJSON()); // Log the user object after address book updates
    // Save the updated user object
    await user.save();
    console.log("User after save:", user.toJSON()); // Log the user object after saving

    // Fetch the updated user data, including AddressBook
    const updatedUser = await Account.findByPk(userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: AddressBook }],
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
