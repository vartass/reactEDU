import {Route, Routes} from "react-router-dom";
import './AppRoutes.css';
import Home from "../../../pages/Home";
import Layout from "./Layout";
import Comments from "../../HW5/Comments/Comments";
import Todo from "../../HW6/ToDo/Todo";




const AppRoutes = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route  path="comments" element={<Comments/>}/>
                <Route  path="todos" element={<Todo/>}/>

            </Route>

        </Routes>

    </>
    )
}
export default AppRoutes;