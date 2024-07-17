const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModal = require("../modal/UserModal");

const UserRouter = express.Router();


// REGISTER
UserRouter.post("/register", async (req, res) => {
  const {  fname, lname, email, number, password, confirmPassword } = req.body;

  try {
    // Check if the passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Passwords do not match" });
    }

//     // Check if the username already exists
//     const existingUser = await UserModal.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ msg: "Username already exists, please choose a different one" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new UserModal({
//             fname,
//             lname,
//             email,
//             number,
//             password:  hashedPassword,
//     });

//     // Save the new user
//     await newUser.save();
//     res.status(201).json({ msg: "New user has been registered" });
//   } catch (error) {
//     res.status(500).json({ msg: "Something went wrong", error: error.message });
//   }
// });

const user = await UserModal.findOne({ email });
if (!user) {
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({ msg: "Something went wrong", error: err.message });
    } else {
      const newUser = new UserModal({
        fname,
        lname,
        email,
        number,
        password: hash,
        gender,
      });
      await newUser.save();
      res.status(201).json({ msg: "New user has been registered" });
    }
  });
} else {
  res.status(400).json({ msg: "User already exists, please login" });
}
} catch (error) {
res.status(500).json({ msg: "Something went wrong", error: error.message });
}
});


// LOGIN
UserRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // // Find user by username
    // const user = await UserModal.findOne({ username });

    // if (!user) {
    //   return res.status(404).json({ msg: "User not found" });
    // }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ msg: "Incorrect password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET);

//     res.json({ msg: "Login successful", token });
//   } catch (err) {
//     res.status(500).json({ msg: "Something went wrong", error: err.message });
//   }
// });

const user = await UserModal.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET);
          await UserModal.findByIdAndUpdate(user._id, { is_active: true });
          res.json({ msg: "Login successful", token });
        } else {
          res.status(401).json({ msg: "Wrong credentials" });
        }
      });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
});


// LOGOUT
UserRouter.post("/logout", (req, res) => {
  try {
    // Invalidate the token on the client side (the client should delete the token)
    // Alternatively, you could maintain a blacklist of tokens on the server side
    res.json({ msg: "Logout successful" });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
});
module.exports = UserRouter;
