export const LOGIN="LOGIN"
export const LOGOUT="LOGOUT"

export const login = ()=>{
    return {type: LOGIN}
}
export const logout = ()=>{
    return {type: LOGOUT}
}


//
export const MODALAUTHOPEN="MODALAUTHOPEN"
export const MODALAUTHCLOSE="MODALAUTHCLOSE"
//
export const ModalAuthOpenCreate = ()=>{
    return {type: MODALAUTHOPEN}
}
export const ModalAuthCloseCreate = ()=>{
    return {type: MODALAUTHCLOSE}
}


