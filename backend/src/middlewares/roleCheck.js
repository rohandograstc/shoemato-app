// Middleware to check user roles
export const checkRole = (role) => {
    return (req, res, next) => {
      const userRoles = req.user.roles; // Assuming you have a 'roles' property in your user object
      if (!userRoles || !userRoles.includes(role)) {
        return res.status(403).json({ message: 'Access denied.' });
      }
      next();
    };
  };