import express from "express";
import departmentModel from "../models/departmentModel.js";
import { data } from "../data/data.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const departments = await departmentModel.find({});
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const department = await departmentModel.findById({ _id: id });
    res.status(200).json(department);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { title, desc, courses } = req.body;
    const department = await departmentModel.create({
      title,
      desc,
      courses,
    });

    res.status(201).json(department);
    console.log("Successfully Created departement");
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(`Error: ${err}`);
  }
});

router.route("/createMany").post(async (req, res) => {
  try {
    const departments = await departmentModel.insertMany(data); 

    res.status(200).json(departments)

  } catch(error) {
    console.log(error)
    res.status(500).json({message: error.message}); 
  }
  
})

router.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const department = await departmentModel.findByIdAndDelete({ _id: id });
    res.status(204).json(`Department with id: ${id} deleted successfully`);
    console.log(`Department with id: ${id} deleted successfully`);
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(`Department.js Error: ${err}`);
  }
});

export default router;
