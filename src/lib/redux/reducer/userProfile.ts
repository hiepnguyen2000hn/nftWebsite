import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getPosts: state => {
            state.loading = true
        },
        getPostsSuccess: (state, { payload }) => {
            state.posts = payload
            state.loading = false
            state.hasErrors = false
        },
        getPostsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
})

export const { getPosts, getPostsSuccess, getPostsFailure } = userSlice.actions
export const userSelector = (state: any) => {
    return state.posts;
}
export default userSlice.reducer

export function fetchPosts() {
    return async (dispatch:any) => {
        dispatch(getPosts())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()

            dispatch(getPostsSuccess(data))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}
