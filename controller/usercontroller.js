const expenceSchema = require("../models/usermodel");
//login
const logincontroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await expenceSchema.findOne({ email, password });
    if (!user) {
      return res.status(400).json("User not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//register
const registercontroller = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
        success: false,
        error,
    });  
    }
};
module.exports = { logincontroller };
module.exports = { registercontroller };
