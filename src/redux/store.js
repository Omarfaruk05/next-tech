import pcBuilderReducer from "./pcBuilder/pcBuilderSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});

export default store;
