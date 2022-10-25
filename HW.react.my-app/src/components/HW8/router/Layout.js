import {NavLink, Outlet} from 'react-router-dom';

import "./Layout.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <section className="container">

            <Header/>

            <main className="main">
                <Outlet />
            </main>

            {/*<Footer/>*/}
        </section>
    )
}

export default Layout