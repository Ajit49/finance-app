import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) =>  {
      // Store only the serializable properties
      state.user = action.payload
        ? {
            uid: action.payload.uid,
            
            email: action.payload.email,
            displayName: action.payload.displayName,
          }
        : null;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
