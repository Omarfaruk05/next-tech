const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pcBuilder: [],
  total: 0,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      const isProductMatch = state.pcBuilder.find(
        (product) => product._id === action.payload._id
      );
      const isCategoryMatch = state.pcBuilder.find(
        (product) => product.category === action.payload.category
      );

      if (isCategoryMatch || isProductMatch) {
        return;
      } else {
        state.pcBuilder = [...state.pcBuilder, action.payload];
      }
      console.log(state.pcBuilder);
    },
  },
});

export const { addToBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
