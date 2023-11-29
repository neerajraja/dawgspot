const express = require('express');
const bcrypt = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth'); // to be written
const User = require('../../models/User');

/**
 * @route POST api/users/signup
 * @desc Register new user
*/
userRouter.post('/signup', async (req, res) => {
    try {
        const { email, password, passwordCheck, username } = req.body;
        if (!email || !password || !passwordCheck || !username) {
            return res.status(400).json({ msg: 'Not all fields have been entered.' });
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: 'The password needs to be at least 6 characters long.' });
        }
        if (password !== passwordCheck) {
            return res.status(400).json({ msg: 'Enter the same password twice for verification.' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'An account with this email already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new User({
            email,
            password: hashedPassword,
            username,
        });
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @route POST api/users/login
 * @desc Login existing user
*/
userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // validate
        if (!email || !password) {
            return res.status(400).json({ msg: 'Not all fields have been entered.' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'No account with this email has been registered.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials.' });
        }
        const token = jwt.sign({ id: user._id }, "passwordKey");
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * Check if token is valid
*/
userRouter.post('/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.json(false);
        }
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) {
            return res.json(false);
        }
        const user = await User.findById(verified.id);
        if (!user) {
            return res.json(false);
        }
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @route GET api/users/
 * @desc Get user data
*/
userRouter.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
    });
});

