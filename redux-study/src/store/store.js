// redux 로직
// redux 여러개의 상태 데이터 관리하기
// npm install @reduxjs/toolkit 리덕스 툴킷 시작

import { createSlice, configureStore } from "@reduxjs/toolkit";

// toolkit 상태관리
let initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  // createSlice 객체를 인자로 생성한다
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //action이 필요한 이유는 amount라는 payload 값이 발생했기 때문에
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 일반 redux action 상태관리
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return { ...state };
};

// 키값으로 구성되어 있는 action을 내보낸다
// export const { increment, decrement, increase, toggleCounter } =
//   counterSlice.action;

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authSliceActions = authSlice.actions;

// configureStore 여러개의 리듀서 상태 관리를 위해 툴킷에서 재공하는 configureStore를 통해 store를 관리한다
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
