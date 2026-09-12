const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ===============================
// MongoDB Connection
// ===============================

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
    });


// ===============================
// Student Schema
// ===============================

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },

    course: {
        type: String,
        required: true,
        trim: true
    },

    isActive: {
        type: Boolean,
        default: true
    }
});


// ===============================
// Student Model
// ===============================

const Student = mongoose.model("Student", studentSchema);


// =======================================
// HOME ROUTE - Display EJS Page
// =======================================

app.get("/", async (req, res) => {

    try {

        const students = await Student.find();

        res.render("apphome", {
            students: students
        });

    } catch (error) {

        res.status(500).send("Error loading students");

    }

});


// =======================================
// CREATE - POST
// =======================================

app.post("/students", async (req, res) => {

    try {

        const newStudent = new Student({
            name: req.body.name,
            rollNumber: req.body.rollNumber,
            course: req.body.course
        });

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);

    } catch (error) {

        res.status(400).json({
            message: "Error saving student",
            error: error.message
        });

    }

});


// =======================================
// READ - GET ALL STUDENTS
// =======================================

app.get("/students", async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });

    }

});


// =======================================
// READ - GET STUDENT BY ID
// =======================================

app.get("/students/:id", async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        res.status(400).json({
            message: "Invalid student ID",
            error: error.message
        });

    }

});


// =======================================
// UPDATE - PUT
// =======================================

app.put("/students/:id", async (req, res) => {

    try {

        const updatedStudent =
            await Student.findByIdAndUpdate(

                req.params.id,

                {
                    name: req.body.name,
                    rollNumber: req.body.rollNumber,
                    course: req.body.course,
                    isActive: req.body.isActive
                },

                {
                    new: true,
                    runValidators: true
                }
            );

        if (!updatedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json(updatedStudent);

    } catch (error) {

        res.status(400).json({
            message: "Error updating student",
            error: error.message
        });

    }

});


// =======================================
// DELETE
// =======================================

app.delete("/students/:id", async (req, res) => {

    try {

        const deletedStudent =
            await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student record deleted successfully"
        });

    } catch (error) {

        res.status(400).json({
            message: "Error deleting student",
            error: error.message
        });

    }

});


// =======================================
// START SERVER
// =======================================

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});
