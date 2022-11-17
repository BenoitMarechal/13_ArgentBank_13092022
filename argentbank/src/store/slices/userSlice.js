import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: null,
  lastName: null,
  password: '',
  token: null,
  remember: false,
  connected: false,
  editOn: false,
  userError: false,
  passwordError: false,
  userId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    // setUserEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    // setUserId: (state, action) => {
    //   state.userId = action.payload;
    // },

    // setUserRemember: (state, action) => {
    //   state.remember = action.payload;
    // },
    // setRemember: (state) => {
    //   let target = document.getElementById('remember-me');
    //   if (target && target.checked === true) {
    //     state.remember = true;
    //   } else {
    //     state.remember = false;
    //   }
    // },

    // setConnectedTrue: (state) => {
    //   state.connected = true;
    // },
    // setConnectedFalse: (state) => {
    //   state.connected = false;
    // },
    // toggleConnected: (state) => {
    //   state.connected = !state.connected;
    // },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    // setFirstName: (state, action) => {
    //   state.firstName = action.payload;
    // },
    // setPassword: (state, action) => {
    //   state.password = action.payload;
    // },
    // setLastName: (state, action) => {
    //   state.lastName = action.payload;
    // },
    resetUser: () => {
      return initialState;
    },
    toggleEdit: (state) => {
      state.editOn = !state.editOn;
    },
    // setUserErrorTrue: (state) => {
    //   state.userError = true;
    // },
    // setPasswordErrorTrue: (state) => {
    //   state.passwordError = true;
    //},
  },
});

export const {
  setUser,
  // setUserEmail,
  // setUserId,
  // setUserRemember,
  toggleEdit,
  // setUserAll,
  // setRemember,
  // setConnectedTrue,
  // setFirstName,
  // setLastName,
  // setConnectedFalse,
  // setToken,
  // toggleConnected,
  // setPassword,
  resetUser,
  // setUserErrorTrue,
  // setPasswordErrorTrue,
} = userSlice.actions;
export default userSlice.reducer;
