import mongoose from 'mongoose'; 

const departmentSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        unique: true, 

    }, 
    desc: {
        type: String, 
        required: true, 
    }, 
    courses: {
        type:[{title: {type: String, required: true}, desc: {type: String}, url: {type: String}, img: {type: String}}], 
        required: true,
    }
}, {
    timestamps: true,
})

const departmentModel = mongoose.model("department", departmentSchema); 

export default departmentModel; 
