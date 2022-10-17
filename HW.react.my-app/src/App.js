import './App.css';
import Comments from "./components/HW5/Comments/Comments";
import {Component} from "react";
import Todo from "./components/HW6/ToDo/Todo";

class App extends Component {
    render() {
        return (
            <div className={"main"}>
                <Comments/>
                <Todo/>
            </div>
        );
    }
}
export default App;
