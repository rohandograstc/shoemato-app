import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Account from "../models/AccountModal.js"; // Import your User model
import { Op } from "sequelize";

async function generateToken(user) {
  const token = jwt.sign(
    { id: user.id, email: user.email, mobile: user.mobile },
    process.env.S_KEY,
    { expiresIn: "12h" }
  );
  return token;
}

async function registerUser(email, mobile, password, body) {
  console.log({ body });
  try {
    // Check if the email or mobile number is already registered
    const existingUser = await Account.findOne({
      where: {
        [Op.or]: [{ email: email }, { phoneNumber: mobile }],
      },
    });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ hashedPassword });
    // Create the user
    const user = await Account.create({
      ...body,
      email,
      phoneNumber: mobile,
      password: hashedPassword,
    });
    console.log({ user });
    // Generate a JWT token
    const token = await generateToken(user);

    return token;
  } catch (error) {
    console.error(error);
    throw new Error(error.message || "Registration failed");
  }
}

async function loginUser(emailOrMobile, password) {
  try {
    // Find the user by email or mobile number

    const user = await Account.findOne({
      where: {
        [Op.or]: [{ email: emailOrMobile }, { phoneNumber: emailOrMobile }],
      },
    });
    console.log({ user });
    if (!user) {
      throw new Error("Authentication failed");
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log({ passwordMatch });
    if (!passwordMatch) {
      throw new Error("Authentication failed");
    }

    // Generate a JWT token
    const token = await generateToken(user);

    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Authentication failed");
  }
}

export { registerUser, loginUser };
