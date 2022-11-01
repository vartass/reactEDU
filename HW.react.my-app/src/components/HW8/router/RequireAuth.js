import { useLocation, Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import React from "react";

const RequireAuth = ({children}) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    if (auth.name !== "admin") {
        // return <Navigate to='/login' state={{from: location}} />
        // return <Navigate to='/'/>
        return


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
