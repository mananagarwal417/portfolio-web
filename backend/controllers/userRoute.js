const User = require("../models/user");

const handlePostRequest = async (req, res) => {
    const { name, email, message } = req.body;
    try {
         const user= await User.findOneAndUpdate({ email}, { name, message }, { new: true });
        if (user) {
            return res.status(200).json({ message: "We are already friends...and your message is updated!" });
        }
        const newUser = await User.create({ name, email, message });
        await newUser.save();
        res.status(201).json({ message: "Data saved successfully...we will reach you shortly!" });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
};

module.exports = {handlePostRequest};