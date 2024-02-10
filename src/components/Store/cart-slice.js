import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuant: 0,
    changed:false
  },
  reducers: {
    //cart new snapshot
    replaceCart:(state,action)=>{
      state.items = action.payload.items,
      state.totalQuant = action.payload.totalQuant
    },
    addItem: (state, action) => {
      //state.totalQuantity++;
      const newitem = action.payload;
      console.log(newitem);
      const exisitingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuant++;
      state.changed = true
      if (!exisitingItem) {
        state.items.push({
          id: newitem.id,
          title: newitem.title,
          quantity: 1,
          price: newitem.price,
          totalPrice: newitem.price,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newitem.price;
      }
      //exisitingItem.quantity=exisitingItem.quantity+1;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.totalQuant--;
      state.changed = true
      const exisitingItem = state.items.find((item) => item.id === id);
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id != id); //assign new value to state items
      } else {
        exisitingItem.totalPrice = exisitingItem.totalPrice-exisitingItem.price
        exisitingItem.quantity--;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
