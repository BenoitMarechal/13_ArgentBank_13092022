import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: null,
  lastName: null,
  token: null,
  remember: false,
  connected: false,
  editOn: false,
};

export const userSlice = createSlice({
  name: 'user',
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
      state.token = action.payload;
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
} = userSlice.actions;
export default userSlice.reducer;
