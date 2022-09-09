import React from 'react';
import img from "./img/barcelona.png";

const HW1 = () => {
    return (
        <div className="hw1">
            <p>hello world</p>
            <img src={img} className="img-logo" alt="logo" />
            <p>default text!</p>
        </div>
    );
};

export default HW1;