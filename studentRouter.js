const express = require("express");
const router = express.Router();
const studentController = require("../../controller/studentController");
router.use(express.urlencoded({ extended: false }));
router.get("/signIn", (req, res) => {
  res.render("studentCreate");
});

router.post("/student/create", (req, res) => {
  studentController.studentCreate(req, res);
});
router.get("/students", (req, res) => {
  studentController.getStudents(req, res);
 res.end('<h1>helloop</h1>');
});
router.get("/student/:rollNo",(req,res)=>{
  studentController.getbyid(req,res)
})
module.exports = router;