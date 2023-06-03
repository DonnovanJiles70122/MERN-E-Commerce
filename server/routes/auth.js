const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // check to see if user exist in in DB
    const user = await User.findOne({ username: req.body.username });
    // if user doesn't exist send error
    !user && res.status(401).json("Wrong credentials");

    // decrypt password from DB
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    // convert password to string
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // compare PW from DB with PW user inputted if they don't match send error
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials");

    /**
     * JSON Web Token (JWT) are a method for representing claims
     * securely between two parties.
     *
     * JWTs are usually used to manage user sessions on a website.
     *
     * The signature helps ensure that the data in the header
     * and payload segments haven't been tampered with, and the JWT can be trusted.
     *
     * JWS payload (set of claims): contains verifiable security statements,
     * such as the identity of the user and the permissions they are allowed.
     */
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // to hide password in json res
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
