import { URL_API } from "~/config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const  initialState = {
    msg : '',
    email: '',
    password: '',
    token : '',
    isAuthenticated: false,
    isLoading: false,
    error: '',
}
const signInUser = createAsyncThunk('signInUser',async(body)=> {
    const res = await fetch(URL_API+'v3/48a042a2-b67b-4ea0-8da5-55f5bb50448a',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    return await res.json();
});
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut : (state,action) => {
            console.log(action.payload);
            const {email , password , token} = action.payload;
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('token');
            state.email = email;
            state.password = password;
            state.token = token;
        },
    },
    extraReducers : (builder) => {
        // ================= LOGIN =================
        builder.addCase(signInUser.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(signInUser.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.msg = action.payload.message;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            // SET LOCAL STORAGE
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('password', action.payload.password);
            localStorage.setItem('token', action.payload.token);
        });
        builder.addCase(signInUser.rejected,(state,action) => {
            state.isLoading = true;
            state.error = action.payload.error;
        });
    }
});
  
export default authSlice.reducer;
export {signInUser};
export const {logOut} = authSlice.actions; 