import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user", 
    initialState: {
        email: ""
    },
    
    reducers: {
        LoggedUser: (state, action) => {
            state.email = action.payload.email; 
        }, 
        reset: (state) => {
            state.email = ""; 

        }
    }
})

export const {LoggedUser, reset} = userSlice.actions; 

export default userSlice.reducer; 