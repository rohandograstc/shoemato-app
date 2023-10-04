import express from "express";
import {
  onboardUserAdd,
  userHierarchyGet,
} from "../controllers/OnboardingController.js";

const onboardingRouter = express.Router();

// Define your account-related routes
onboardingRouter.post("/onboarduser", onboardUserAdd);
onboardingRouter.get("/getuserhierarchy/:userId", userHierarchyGet);

export default onboardingRouter;
