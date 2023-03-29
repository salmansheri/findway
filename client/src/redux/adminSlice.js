import { createSlice }  from '@reduxjs/toolkit';


const adminSlice = createSlice({
    name: "admin", 
    initialState: {
        email: "", 
        isAdmin: false, 

    }, 
    reducers: {
        loggedAdmin: (state, action) => {
            state.email = action.payload.email; 
            state.isAdmin = true; 
        }, 
        reset:(state) => {
            state.email = ""; 
            state.isAdmin = false;
        }
    }

}); 

export const { loggedAdmin, reset } = adminSlice.actions; 

export default adminSlice.reducer; 


