import React from 'react'


const AddDepartment = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80')] h-screen bg-cover">
        <div className="absolute right-[10rem] bottom-[30rem] bg-white">
        <h1 className="font-bold text-xl">Add Departments</h1>
        <div>
            <form>
            <div>
            <label>
                    Department: 
                    <input placeholder="Enter Department..." />
                </label>

            </div>
            <div className="flex flex-col">
                <label>
                    Description
                   

                </label>
                <textarea placeholder="Enter Description" />
               
            </div>
            <div>
                courses: 
                <input />
            </div>
                
            </form>
                
        </div>

        </div>
    </div>
  )
}

export default AddDepartment; 