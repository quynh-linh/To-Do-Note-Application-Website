const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const  initialState = {
    msg : '',
    user: '',
    token : '',
    isAuthenticated: false,
    isLoading: false,
    error: '',
}
const signInUser = createAsyncThunk('signInUser',async(body)=> {
    const res = await fetch('http://127.0.0.1:5000/login/check-login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    return await res.json();
});
const emailUser = createAsyncThunk('emailUser',async(body)=> {
    const res = await fetch('http://127.0.0.1:5000/login/email',{
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
        //  ................
    },
    extraReducers : (builder) => {
        // ================= CHECK EMAIL =================
        builder.addCase(emailUser.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(emailUser.fulfilled,(state,action) => {
            state.msg = action.payload.message;
        });
        builder.addCase(emailUser.rejected,(state,action) => {
            state.isLoading = true;
            state.error = action.payload.error;
        });
        // ================= LOGIN =================
        builder.addCase(signInUser.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(signInUser.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.msg = action.payload.message;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        });
        builder.addCase(signInUser.rejected,(state,action) => {
            state.isLoading = true;
            state.error = action.payload.error;
        });
    }
});
  
export default authSlice.reducer;
export {signInUser , emailUser};
export const {addToken,addUser,logout} = authSlice.actions; 