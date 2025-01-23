const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isUserAlreasyExist = await userModel.findOne({ email });

  if (isUserAlreasyExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

// module.exports.logoutUser = async (req, res, next) => {
//   res.clearCookie("token");
//   const token =
//     req.cookies.token ||
//     (req.headers.authorization && req.headers.authorization.split(" ")[1]);

//   await blackListTokenModel.create({ token });

//   res.status(200).json({ message: "Logged Out" });
// };


module.exports.logoutUser = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token });
  if (isBlackListed) {
    // Clear the cookie and respond even if the token is already blacklisted
    res.clearCookie("token");
    return res.status(200).json({ message: "Already logged out" });
  }
  
  // Insert the token into the blacklist
  await blackListTokenModel.create({ token });

  res.clearCookie("token");
  res.status(200).json({ message: "Logged Out" });
};
