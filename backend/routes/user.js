// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const  { authMiddleware } = require("../middleware");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})



const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});



router.put("/update-password", authMiddleware, async (req, res) => {
    // Validate incoming data
    const { success, data } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data." });
    }

    const userId = req.userId; // Get userId from middleware

    try {
        // Update the user's password
        const updateResult = await User.updateOne(
            { _id: userId },
            { $set: { password: data.password } } // Use $set to update the password
        );

        // Log the update result
        console.log('Update result:', updateResult);

        // Check if any documents were modified
        if (updateResult.modifiedCount === 0) {
            return res.status(400).json({ message: "No changes made." });
        }

        // Send a success response
        res.json({ message: "Password updated successfully." });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: "Internal server error." });
    }
});


// PUT route for updating password
router.delete("/delete-user", async (req, res) => {
    // Define the Zod schema to validate the request body
    const deleteUserBody = zod.object({
        username: zod.string().email() // Expecting email as the identifier
    });

    console.log("Request body:", req.body); // Debugging log

    const { success, data, error } = deleteUserBody.safeParse(req.body);

    if (!success) {
        console.error("Validation error:", error); // Log validation errors
        return res.status(400).json({ message: "Invalid input", details: error.issues });
    }

    try {
        const { username } = data;

        // Find the user by email/username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete the user
        await User.deleteOne({ username });

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error); // Handle server errors
        res.status(500).json({ message: "Server error" });
    }
});



router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


  




module.exports = router;