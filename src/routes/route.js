const express = require("express");
const router = express.Router();
const { createStudent, getStudents, getIndividualStudent, updateStudent, deleteStudent } = require("../controller/markController");
const { createTeacher, login } = require("../controller/teacherController");
const { authentication, authorization } = require("../middlewares/auth")




router.get("/testMe", (req, res) => {
    res.status(200).send({ status: true, msg: "Welcome" })
})



router.post("/register", createTeacher);
router.post("/login", login);
router.get("/students", authentication, getStudents);
router.get("/students/:userId", authentication, authorization, getIndividualStudent)
router.put("/students/:userId", authentication, authorization, updateStudent)
router.delete("/students/:userId", authentication, authorization, deleteStudent)
router.post("/students/createStudent", authentication, createStudent)


module.exports = router


