import {
  onboardUser,
  getUserHierarchy,
} from "../services/OnboardingService.js";

async function onboardUserAdd(req, res) {
  const { onboarderId, onboardeeId } = req.body;

  try {
    await onboardUser(onboarderId, onboardeeId);
    res.status(201).json({ message: "User onboarded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Onboarding failed" });
  }
}

async function userHierarchyGet(req, res) {
  const { userId } = req.params;
  const { role } = req.query;

  console.log({ userId });

  try {
    const hierarchy = await getUserHierarchy(userId, role);
    console.log({hierarchy});
    res.json({ hierarchy });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "Failed to retrieve hierarchy" });
  }
}

export { onboardUserAdd, userHierarchyGet };
