import {Route, Routes} from "react-router-dom";
import './AppRoutes.css';
import Post from "../../../pages/Post";
import Layout from "./Layout";
import Comments from "../../HW5/Comments/Comments";
import Todo from "../../HW6/ToDo/Todo";




const AppRoutes = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="posts" element={<Post/>}/>
                <Route  path="comments" element={<Comments/>}/>
                <Route  path="todos" element={<Todo/>}/>

            </Route>

        </Routes>

    </>
    )
}
export default AppRoutes;