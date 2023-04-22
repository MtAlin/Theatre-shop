import { createSlice, createSelector } from "@reduxjs/toolkit";
import testData from "../Components/AllDataFile/TestAll";

const initialState = {
  favArray: [],
  cartProduct: [],
  sellerData: testData,
  count: 1,
  countCart: 0,
  sum: 0,
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleFav: (state, action) => {
      state.sellerData.forEach((element) => {
        element.items.forEach((item) => {
          if (item.id == action.payload.id) {
            item.fav = !item.fav;
            const favItem = { ...item }; // create a copy of the updated item
            const favIndex = state.favArray.findIndex(
              (fav) => fav.id === favItem.id
            ); // check if the item already exists in the favArray
            if (favIndex === -1) {
              state.favArray.push(favItem); // if not, add it to the favArray
            } else {
              state.favArray.splice(favIndex, 1, favItem); // if yes, update the existing item in the favArray
            }
            if (item.fav !== true) {
              for (let i = 0; i < state.favArray.length; i++) {
                if (state.favArray[i].id == action.payload.id) {
                  state.favArray.splice(i, 1);
                  break;
                }
              }
            }
          }
        });
      });
    },
    // Add item to cart
    handleCart: (state, action) => {
      const data = state.favArray.find((item, index) => {
        if (index === action.payload) {
          item.fav = !item.fav;
          item.number = state.count;
          item.sum = item.price * state.count;
          return item;
        }
      });

      state.cartProduct.push(data);
    },
    // Delete item from favorite
    handleDelete: (state, action) => {
      const { indexs, id } = action.payload;
      const datas = state.favArray.filter((item, index) => index !== indexs);
      state.sellerData.forEach((element) => {
        element.items.forEach((item) => {
          if (item.id == id) {
            item.fav = !item.fav;
          }
        });
      });
      state.favArray = [...datas];
    },
    // Delete item from cart
    handleCartDel: (state, action) => {
      const datas = state.cartProduct.filter(
        (item, index) => index !== action.payload
      );
      state.cartProduct = [...datas];
    },
    // Add item to cart from detail pages
    handleDetail: (state, action) => {
      state.cartProduct.push({
        ...action.payload,
        number: state.count,
        sum: state.sum,
      });
      const a = state.cartProduct.find((item) => item.id == action.payload.id);
      if (state.sum !== 0) {
        a.sum = state.sum;
      } else {
        a.sum = a.price;
      }
      state.countCart = state.count;
      state.count = 1;
      state.sum = 0;
    },
    increment: (state, action) => {
      const { num, price, id } = action.payload;
      state.count += num;
      state.sum = price * state.count;
      console.log(state.count);
    },
    decrement: (state, action) => {
      const { num, price, id } = action.payload;
      state.sum -= price;
      if (state.count <= 1) {
        state.count = 1;
      } else {
        state.count -= num;
      }
    },
    decrementCart: (state, action) => {
      const { num, price, id } = action.payload;
      const changePrice = state.cartProduct.map((item, index) => {
        if (item.id === id) {
          if (item.number <= 1 && item.sum <= item.price) {
            item.number = 1;
            item.sum = item.price;
          } else {
            item.number -= num;
            item.sum -= item.price;
          }
        }
        return item;
      });
      state.cartProduct = [...changePrice];
    },
    incrementCart: (state, action) => {
      const { num, price, id } = action.payload;

      const changePrice = state.cartProduct.map((item, index) => {
        if (item.id === id) {
          item.sum += item.price;
          item.number += num;
        }
        return item;
      });
      state.cartProduct = [...changePrice];
    },
  },
});

export const getTotal = createSelector(
  (state) => state.product.cartProduct,
  (cart) => {
    return cart.reduce((a, b) => a + b);
  }
);

// Action creators are generated for each case reducer function
export const {
  handleFav,
  handleCart,
  handleDelete,
  handleDetail,
  increment,
  decrement,
  incrementCart,
  decrementCart,
  handleCartDel,
} = counterSlice.actions;

export default counterSlice.reducer;
