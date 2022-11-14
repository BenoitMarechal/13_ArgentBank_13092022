import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: null,
  lastName: null,
  token: null,
  remember: false,
  connected: false,
  editOn: false,
  userError: false,
  passwordError: false,
};

export const userTempSlice = createSlice({
  name: 'userTemp',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },

    setUserRemember: (state, action) => {
      state.remember = action.payload;
    },
    setRemember: (state) => {
      let target = document.getElementById('remember-me');
      if (target && target.checked === true) {
        state.remember = true;
      } else {
        state.remember = false;
      }
    },

    setConnectedTrue: (state) => {
      state.connected = true;
    },
    setConnectedFalse: (state) => {
      state.connected = false;
    },
    toggleConnected: (state) => {
      state.connected = !state.connected;
    },
    setToken: (state, action) => {
      if (state.remember) {
        state.token = action.payload;
      } else {
        state.token = action.payload;
      }
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    resetUser: () => {
      return initialState;
    },
    toggleEdit: (state) => {
      state.editOn = !state.editOn;
    },
    setUserErrorTrue: (state) => {
      state.userError = true;
    },
    setPasswordErrorTrue: (state) => {
      state.passwordError = true;
    },
  },
});

export const {
  setUserEmail,
  setUserRemember,
  toggleEdit,
  setUserAll,
  setRemember,
  setConnectedTrue,
  setFirstName,
  setLastName,
  setConnectedFalse,
  setToken,
  toggleConnected,
  resetUser,
  setUserErrorTrue,
  setPasswordErrorTrue,
} = userTempSlice.actions;
export default userTempSlice.reducer;
