//for routes
const express=require('express');
const studentController=require('../controllers/student')
const router=express.Router();
router.use(express.json())


router.post('/student/create',(req,res)=>{
    studentController.createStudent(req,res)
})
router.get('/students',(req,res)=>{
    studentController.getStudents(req,res)
})
router.get('/student/:rollNo',(req,res)=>{
    studentController.getStudent(req,res)
})
module.exports=router;