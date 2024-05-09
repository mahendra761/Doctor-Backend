const route = require("express").Router();
const {
  userRegister,
  userLogin,
  individualUser,
} = require("../controllers/userControllers");


// user register
route.post("/register", userRegister);
route.get("/",(req,res)=>{
  res.json({message:"Backend is Deployed Successfully ",success:true,status_code:200})
})
// user login
route.post("/login", userLogin);

// // get user by id
// route.get("/:id/user", individualUser);

module.exports = route;
