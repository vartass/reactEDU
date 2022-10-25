import { useLocation, Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {login, ModalAuthCloseCreate, ModalAuthOpenCreate} from "../Auth/actions";
import Modal from "../Modal/Modal";
import React from "react";

const RequireAuth = ({children}) => {
    // const location = useLocation();
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

  // console.log(location)

    if (!auth.name) {
        // return <Navigate to='/login' state={{from: location}} />
        return <Navigate to='/auth'/>
        // return dispatch(ModalAuthOpenCreate())


    }
    //     return ()=> {<Modal action={
    //         <button onClick={() => {
    //             dispatch(login())
    //             dispatch(ModalAuthCloseCreate())
    //         }
    //         }> Login</button>
    //     } closeHandler={() => dispatch(ModalAuthCloseCreate())}/>}
    // }

  return children;
}

export default  RequireAuth;
