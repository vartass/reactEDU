import {Link, NavLink} from "react-router-dom";
import "./Header.css"
import {connect, useDispatch, useSelector} from "react-redux";

const Header = () => {


    return (
        <>
        <div className="nav">
            <Link to="/">Home</Link>

            <NavLink to="/comments">Comments</NavLink>
            <NavLink to="/todos">To do</NavLink>


        </div>

        </>


    );
}
export default Header