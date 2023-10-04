import { registerUser, loginUser } from "../services/AccountService.js";

async function register(req, res) {
  console.log("Triggred Register");
  const { email, mobile, password } = req.body;

  try {
    const token = await registerUser(email, mobile, password, req.body);
    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message,"---12");
    
    res.status(400).json({ message: error.message || "Registration failed" });
  }
}

async function login(req, res) {
  console.log("Login Triggred");
  const { emailOrMobile, password } = req.body;

  try {
    const token = await loginUser(emailOrMobile, password);
    res.json({ token });
  } catch (error) {
    console.error(error.message,"---");
    res.status(401).json({ message: error.message || "Authentication failed" });
  }
}

export { register, login };
