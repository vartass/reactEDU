export const LOGIN="LOGIN"
export const LOGOUT="LOGOUT"

export const LoginAction = (name)=>{
    return {
        type: LOGIN,
        payload: name
    }
}
export const LogoutAction = ()=>{
    return {
        type: LOGOUT,
        payload:[]
    }
}


// //
// export const MODALAUTHOPEN="MODALAUTHOPEN"
// export const MODALAUTHCLOSE="MODALAUTHCLOSE"
// //
// export const ModalAuthOpenCreate = ()=>{
//     return {type: MODALAUTHOPEN}
// }
// export const ModalAuthCloseCreate = ()=>{
//     return {type: MODALAUTHCLOSE}
// }


