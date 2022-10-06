import logo from './logo.svg';
// import './App.css';
import Comments from "./components/HW5/Comments/Comments";
// import React from "@types/react";
import {connect} from "react-redux";
import {Component} from "react";

class App extends Component {
    render() {

        return (
            <div>
                <Comments/>
            </div>
        );
    }
}


export default App;
