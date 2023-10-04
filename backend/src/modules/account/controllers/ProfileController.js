import { editProfile, getProfile } from "../services/ProfileServices.js";

export const getProfileLogic = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user authentication middleware
    console.log({userId});
    const userProfile = await getProfile(userId);
    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editProfileLogic = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user authentication middleware
    const updatedProfile = req.body; // Request body should contain updated profile data
    const userProfile = await editProfile(userId, updatedProfile);
    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
