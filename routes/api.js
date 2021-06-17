const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET request
router.get('/students',(req,res)=> {
    Student.find({}).then((students)=> {
        res.send(students)
    })
});

// POST request
router.post('/students', (req,res)=> {
    Student.create(req.body).then((student)=> {
        res.send(student);
    });
});

// PUT request
router.put('/student/:id', (req,res)=> {
    Student.findOneAndUpdate({_id:req.params.id}, req.body).then((student)=>{
        Student.findOne(student);
    });
});

// Delete Request
router.delete('/student/:id', (req,res)=> {
    Student.findOneAndDelete({_id: req.params.id}).then((student)=> {
        res.send(student);
    });
});


module.exports = router;