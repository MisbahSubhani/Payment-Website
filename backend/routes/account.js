// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }

    res.json({
        balance: account.balance
    });
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;

    // Fetch the sender's account
    const account = await Account.findOne({ userId: req.userId });

    if (!account || account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    // Fetch the recipient's account
    const toAccount = await Account.findOne({ userId: to });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    try {
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } });
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } });
        
        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error occurred during transfer"
        });
    }
});

module.exports = router;
