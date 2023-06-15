// const beneficer = require("../models/Beneficer");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// function token({ fullName, emailAddress, passWord }) {
//   const user = { fullName, emailAddress, passWord };
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   return accessToken;
// }

// const getAllUsers = async (req, res) => {
//   try {
//     const allData = await beneficer.find();
//     res.status(200).json(allData);
//     // console.log(allData);
//   } catch (err) {
//     console.log("Error retrieving data:", err);
//     res.status(500).json({ err: "An error occurred while getting data" });
//   }
// };

// const verifyToken = async (req, res, next) => {
//   // console.log(req);
//   const authHeader = req.headers.authorization;
//   const token = authHeader && authHeader.split(" ")[1];
//   if (authHeader == "Bearer null") return res.json({ error: "Null token" });
//   const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//   res.json(user);
//   next();
// };

// const login = async (req, res) => {
//   try {
//     const password = req.body.passWord;
//     const email = req.body.emailAddress;
//     // console.log(req);
//     // email check
//     const user = await beneficer.findOne({ emailAddress: email });
//     if (user === null) {
//       return res.json({ error: "Email is incorrect" });
//     }
//     // password check
//     const validpassword = await bcrypt.compare(password, user.passWord);
//     if (!validpassword) {
//       return res.json({ error: "incorrect password" });
//     }
//     //JWT
//     res.json(user.userToken);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const postData = async (req, res) => {
//   try {
//     const { fullName, emailAddress, phone, passWord } = req.body;
//     const hashPass = await bcrypt.hash(passWord, 10);
//     console.log(req.body);
//     const userToken = token({
//       fullName: fullName,
//       emailAddress: emailAddress,
//       passWord: hashPass,
//     });
//     const newAccount = new users({
//       fullName: fullName,
//       emailAddress: emailAddress,
//       phone: phone,
//       passWord: hashPass,
//       userToken: userToken,
//     });
//     const checkUser = await users.findOne({ emailAddress: emailAddress });
//     if (checkUser !== null) {
//       //Check for duplicates
//       return res.status(400).json({ error: "Email already exists" });
//     }
//     const add = await newAccount.save();
//     res.status(200).json(add);
//   } catch (error) {
//     console.error("Error Add data:", error);
//     res.status(500).json({ error: "An error occurred while Add data" });
//   }
// };

// module.exports = {
//   postData,
//   getAllUsers,
//   verifyToken,
//   login,
// };
