import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";

// Initial state
const storeState = {
  auth: {
    token: null,
    isAuthenticated: false,
    userInfo: {},
  },
};

// Configure the Redux store using Redux Toolkit
const makeStore = (initialState = storeState) => {
  return configureStore({
    reducer: reducers, // Your root reducer
    preloadedState: initialState, // Initial state
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true, // Enable redux-thunk middleware (this is default)
      }),
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
  });
};

// Next.js wrapper for SSR
export const wrapper = createWrapper(makeStore);

export const getRootState = () => store.getState();
export const getAppDispatch = () => store.dispatch;
