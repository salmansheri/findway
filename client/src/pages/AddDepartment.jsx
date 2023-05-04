import React, {useState} from 'react'; 


const AddDepartment = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const [courses, setCourses] = useState([
       
    ]);
    
    const [AddCourses, setAddCourses] = useState({
        title: "", 
        desc: "", 
        url: ""
    })

   
    
    
    const inputStyle = "w-full focus:border-teal-300 border-gray-300 border focus:outline-none p-3 rounded-md my-3"; 

    const handleAddCourses = () => {
        courses.push(AddCourses)
        setCourses(courses)
        console.log(courses)
        alert(`Added Courses ${AddCourses}`)
    }

    const handleClick = async (e) => {
        e.preventDefault(); 
        const response = await fetch("http://localhost:5000/api/v1/department", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 

            }, 
            body:  JSON.stringify({
                title: title, 
                desc: desc, 
                courses: [AddCourses], 

                
            })
        })

        const data = response.json(); 
        console.log(data)
        
    }

    
  return (
    <div className="bg-[url('https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80')] h-screen bg-cover">
        <div className="absolute right-[10rem] bottom-[10rem] bg-white p-5 rounded-lg border border-blue-300 shadow-lg shadow-teal-100">
        <h1 className="font-bold text-xl mb-3">Add Departments</h1>
        <div>
            <form>
            <div>
            <label>
                    Department: 
                    <input type="text" className={inputStyle} placeholder="Enter Department..."  onChange={(e) => setTitle(e.target.value) } />
                </label>

            </div>
            <div className="flex flex-col">
                <label>
                    Description
                   

                </label>
                <textarea className={inputStyle} placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} />
               
            </div>
            <div>
                courses: 
                <input className={inputStyle} name="text" type="text" placeholder="Course Title..." onChange={(e) => setAddCourses({...AddCourses, title: e.target.value})} />
                <textarea className={inputStyle} name="desc" type="text" placeholder="Course Description" onChange={(e) => setAddCourses({...AddCourses, desc: e.target.value})}  />
                <input className={inputStyle} name="url" type="text" placeholder="Course url..." onChange={(e) => setAddCourses({...AddCourses, url: e.target.value})} />
                <button className="py-3 w-full  bg-teal-300 rounded-lg shadow-md hover:bg-teal-400 my-5" type="button" onClick={handleAddCourses}>Add</button>
              
                    <div className="border border-teal-300 rounded-md p-3">
                    {courses.map((course) => (
                        <li key={course.url}>text: {course.text}</li>
                    ))}
                </div>

              
              

                <button className="bg-teal-300 w-full py-3 rounded-lg my-4" onClick={handleClick}>Add Department</button>
            </div>

           
                
            </form>
                
        </div>

        </div>
    </div>
  )
}

export default AddDepartment; 