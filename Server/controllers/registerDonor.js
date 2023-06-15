const bcrypt = require("bcrypt");
const donor = require("../models/Donor");
const jwt = require("jsonwebtoken");

function tokenGenerator({ _id, role, fullName, email, password }) {
  const payload = { _id, role, fullName, email, password };
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

const handleNewUser = async (req, res) => {
  const { role, fullName, email, phone, password } = req.body;
  // Check for duplicate usernames and emails in the db
  const duplicateEmail = await donor.findOne({ email: email }).exec();

  if (duplicateEmail) {
    return res.status(409).send({ Emessage: " Email already exists" }); //Conflict
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newDonor = new donor({
    role: role,
    fullName: fullName,
    email: email,
    phone: phone,
    password: hashedPassword,
  });

  // Save the user to the database
  newDonor
    .save()
    .then(() => {
      const token = tokenGenerator(newDonor);
      res.status(200).json({ token });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error registering user");
    });
};
module.exports = { handleNewUser };
