import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LOGIN, login, logout, ModalAuthCloseCreate, ModalAuthOpenCreate} from "./actions";
import Modal from "../Modal/Modal";
import {useNavigate} from "react-router-dom";
// import Modal from "../Modal/Modal";

const Auth = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector((store) => store.auth)

    // const closeHandler = () => {
    //     dispatch(ModalAuthCloseCreate())
    // }
    //
    //
    useEffect(()=>{
        dispatch(ModalAuthOpenCreate())
    },[])
    //

    const navigate = useNavigate();

    return (
        <div>
            {auth.modal && <Modal action={
                <button onClick={() => {
                    dispatch(login())
                    dispatch(ModalAuthCloseCreate())
                    navigate(-1);

                }
                }> Login</button>
            } closeHandler={() =>  dispatch(ModalAuthCloseCreate())}/>}

            {/*{ dispatch(ModalAuthOpenCreate())}*/}
            {/*{!auth.name?<button onClick={()=>dispatch(login())}> Login</button> : <button onClick={()=>dispatch(logout())}> Logout</button>}*/}
            {/*<button onClick={()=>dispatch(login())}> Login</button>*/}
        </div>
    );
};

export default Auth;