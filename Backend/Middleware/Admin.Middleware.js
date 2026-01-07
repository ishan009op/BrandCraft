export const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized user"
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL;

  if (req.user.email !== adminEmail) {
    return res.status(403).json({
      message: `Access denied for ${req.user.email}. Admin only.`,
      user: req.user.email
    });
  }

  next();
};
