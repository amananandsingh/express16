//for buss logic
const Student=require('../models/student');
const createStudent=async(req,res)=>{
    try{
    console.log(req.body,'req.body..');
    let student=new Student(req.body);
    student=await student.save();
    res.end('<h1>This is create method</h1>');
}catch(err){
    console.log(err.message,'msg....')
}
}
//get
const getStudents=async(req,res)=>{
    try{
        let students=await Student.find({});//select all data
        console.log(students)
        res.json(students);
        
       // res.end('<h1>This is get method</h1>');
}catch(err){
    console.log(err.message,'msg....')
}
}
const getStudent=async(req,res)=>{
    try{
        let rollNO=req.params.rollNo;//
        console.log(rollNO,'roll...');
        let student=await Student.findOne({rollNo:rollNO});//select only one data
        console.log(student)
        res.json(student);
        
       // res.end('<h1>This is get method</h1>');
}catch(err){
    console.log(err.message,'msg....')
}
}
module.exports={
    createStudent,
    getStudents,
    getStudent
}