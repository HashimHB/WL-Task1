const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    return res.json("I am working")
})

const pool = mysql.createPool({
    host: "localhost",
    user:"root",
    database: "hashim",
    password: "12345678",
    connectionLimit: 10
})

app.post('/addStudent',(req,res)=>{
    console.log(req.body)
    const firstname= req.body.FirstName;
    const lastname= req.body.LastName;
    const id = req.body.ID;
    const dob = req.body.DOB;
    const age = req.body.age;
    const department = req.body.Dept;
    const year = req.body.Year;
    const phones =req.body.Phone;
    const qualification = req.body.Qualification;
    const EmailID = req.body.EmailID; 
    const gender = req.body.Gender;
    const Address = req.body.Address;
    pool.query(`insert into student(First_Name,Last_Name,id,dob,age,dept,year,phoneno,Qualification,emailID,gender,address) values(?,?,?,?,?,?,?,?,?,?,?,?)`,[firstname,lastname,id,dob,age,department,year,phones,qualification,EmailID,gender,Address],(err,result)=>{
        if(err){
            console.log(err);
        }console.log(result)
    })
    res.json("Job done");
})

pool.query(`select * from student`,(err,result)=>{
    if(err){
        console.log(err);
    }console.log(result);
})

app.listen(5000,()=>console.log("listening at port 5000"))



