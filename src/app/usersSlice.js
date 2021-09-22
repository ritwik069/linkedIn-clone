import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice(
  {
    name:'user',
    initialState:{
      user:null,
    },
    reducers:{
      login:(state,action)=>{
        state.user=action.payload;

      }, 
      logout:(state,action)=>{
        state.user=null;

      }
    }
  
  }
);
export const {login,logout}=usersSlice.actions;
export const selectUser=(state)=>state.user.user;
export default usersSlice.reducer;