import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import classSlice from "./classSlice/classSlice";
import  techSlice  from "./techslice/techSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    teacher:techSlice,
    class:classSlice ,
  },
});
