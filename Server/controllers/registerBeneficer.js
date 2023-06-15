// const beneficer = require("../models/Beneficer");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// function token({ fullName, emailAddress, passWord }) {
//   const user = { fullName, emailAddress, passWord };
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   return accessToken;
// }
// const register = async (req, res) => {
//   try {
//     const { fullName, emailAddress, phone, passWord, role } = req.body;
//     const hashPass = await bcrypt.hash(passWord, 10);
//     const userToken = token({
//       fullName: fullName,
//       emailAddress: emailAddress,
//       passWord: hashPass,
//       role: role,
//     });
//     const newAccount = new beneficer({
//       fullName: fullName,
//       emailAddress: emailAddress,
//       phone: phone,
//       passWord: hashPass,
//       userToken: userToken,
//       role: role,
//     });
//     const checkUser = await beneficer.findOne({ emailAddress: emailAddress });
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

// module.exports = { register, verifyToken };
