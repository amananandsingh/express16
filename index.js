const express=require('express');
//const facult=require('./routes/facult');
const connect=require('./connection');
const student=require('./routes/student');
const app = express();
app.use(student);
connect();
//app.use(facult);//use the file 

app.listen(5000,(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('server is running at 5000');
    }
})
