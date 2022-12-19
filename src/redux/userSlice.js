import { createSlice, createSelector } from '@reduxjs/toolkit'
import { userDetails } from '../userDetails';

// createSelector()

const userSlice = createSlice({
    name: "users",
    initialState: { users: userDetails },
    reducers: {
        addUser: (state, {payload}) => {
            state.users = [...state.users, payload];
        },
        deleteUser: (state, {payload}) => {
            state.users = state.users.filter(({id}) => id !== payload.id);
        },

        updateUserById: (state, {payload}) => {
            const index = selectUserById(state.users, payload.id)
            state.users[index] = {...state.users[index], username: payload.username};
        }
    }
})

const selectUserById = (users, id) => {
    return users.findIndex((user)=>user.id === id)
}

export const { addUser, deleteUser, updateUserById } = userSlice.actions;
export default userSlice.reducer;