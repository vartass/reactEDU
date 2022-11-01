import {Route, Routes} from "react-router-dom";
import './AppRoutes.css';
import { Container } from "@mui/material";
import Post from "../../HW2/Posts/Post";
import Layout from "./Layout";
import Comments from "../../HW5/Comments/Comments";
import Todo from "../../HW6/ToDo/Todo";
import Home from "../../HomePage/Home";
import RequireAuth from "./RequireAuth";




const AppRoutes = () => {
    return (
    <>
        <Container>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>

                <Route path="posts" element={
                    // <RequireAuth>
                        <Post/>
                    // </RequireAuth>
                }/>
                <Route path="comments" element={<Comments/>}/>
                <Route path="todos" element={<Todo/>}/>
            </Route>

        </Routes>
        </Container>
    </>
    )
}
export default AppRoutes;