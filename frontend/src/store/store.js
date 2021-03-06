import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productDetailReducer,
  productListReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewReducer,
  productTopReducer,
} from "../reducers/productReducers";
import { cartReducer } from "../reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  usersListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "../reducers/userReducers";
import {
  createOrderReducer,
  orderDetailsReducer,
  orderPayReducer,
  userOrdersReducer,
  orderlistReducer,
  orderDeliverReducer,
} from "../reducers/orderReducers";

export const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReview: productReviewReducer,
  productTop: productTopReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userOrders: userOrdersReducer,
  usersList: usersListReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderlist: orderlistReducer,
  orderDeliver: orderDeliverReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const inititalState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  inititalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
