import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  firstName: null,
  lastName: null,
  password: '',
  token: null,
  remember: false,
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
    resetUser: () => {
      return initialState;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
