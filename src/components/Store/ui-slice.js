import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartVisible: false , notification:{ message:"",status:null ,title:"" } },
  reducers: {
    toogle: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    showNotication:(state , action)=>{
      state.notification = {
        message: action.payload.message,
        status:action.payload.status,
        title:action.payload.title
      }
    }
  },
});

export const uiAction = uiSlice.actions
export default uiSlice
