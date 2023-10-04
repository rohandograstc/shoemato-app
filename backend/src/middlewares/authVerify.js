import jwt from "jsonwebtoken";

// Middleware to verify the JWT token
export const authVerify = (req, res, next) => {
  console.log("Auth Verify Triggred");
  const token = req.header("Authorization");
  console.log({ token });
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed. No token provided." });
  }

  jwt.verify(token, process.env.S_KEY, (error, decodedToken) => {
    if (error) {
      return res.status(403).json({ message: "Invalid token." });
    }
    console.log({ decodedToken });
    // Attach the decoded user information to the request object
    req.user = decodedToken;

    next();
  });
};
