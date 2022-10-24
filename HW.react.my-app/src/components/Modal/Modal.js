import React, {useRef, useState} from 'react';
import Portal from "../Portal/Portal";
import "./Modal.scss"
import useInput from "../hooks/useInput";

const Modal = (props) => {

    const {text,closeHandler, action} = props

    // const [name, setName] = useState("")

    const name = useInput("")
    const pass = useInput("")

    return (
        <div className="modal-w">
            <Portal>
                {/*<div className="modal-wrapper" ></div>*/}
                <div className="modal-wrapper" onClick={closeHandler}></div>
                <div className="modal">
                    {text}


                    <form action="">
                        <label >Login1:
                            <input {...name} type="text" id={"login"} name={"login1"}/>
                        </label>
                        {/*<input  value={auth.name}  onChange={(e)=>dispatch(login(e.target.value))} type="text" id={"login"} name={"login"}/>*/}


                        {name.value}
                        <br/>
                        <label htmlFor="userPass">Password: </label>
                        {/*<input  {...userPass} type="text" id={"userPass"} name={"userPass"}/>*/}
                        <input {...pass}  type="text" id={"userPass"} name={"userPass"}/>


                    </form>

                    <div className="modal-btn">
                        <button className="btn" onClick={closeHandler}>Close</button>
                        {action}
                    </div>
                </div>
            </Portal>
        </div>
    );
};

export default Modal;