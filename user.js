const express=require('express');
const router=express.Router();
const usercont=require('../controllers/usercontroller');
const auth=require('../middleware/auth');
const cookieParser = require('cookie-parser');
router.use(express.urlencoded({extended:false}));
router.use(cookieParser());

// router.get('/',(req,res)=>{
//     res.render('login');
// })
// router.get('/user2/login',auth,(req,res)=>{    //middleware
//     res.render('home');
// })
// router.get('/user1/login',auth,(req,res)=>{    //middleware
//     res.render('adminhome');
// })
router.get('/signup',(req,res)=>{
   res.render('signup');
})
router.get('/login',(req,res)=>{
    res.render('login');
})
// router.post('/user/signup',(req,res)=>{
//     usercont.signup(req,res);
//})
router.post('/user/signup',(req,res)=>{
    usercont.user(req,res);
})
router.post('/user/login',(req,res)=>{
   // usercont.signup(req,res);
   usercont.login(req,res);
})

router.get("/users", (req, res) => {
    usercont.getUsers(req, res);
  });
  
router.get("/user/edit/show/:_id", (req, res) => {
    usercont.getUserForEdit(req, res);
  });
  
router.get("/user/delete/:_id", auth.isAdmin, (req, res) => {
    usercont.deleteUser(req, res);
  });
router.post("/user/update/:_id", auth.isAdmin, (req, res) => {
   usercont.updateUser(req, res);
  });
module.exports=router;
