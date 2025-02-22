export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (token) => ({
    type: "LOGIN_SUCCESS",
    payload: token
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
});