// 장바구니를 클릭하면 장바구니 ui 영역을 toggle 한다

import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false }, // 장바구니가 표시 여부 확인
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice;
