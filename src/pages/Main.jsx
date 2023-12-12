import { NavLink, Outlet } from "react-router-dom";

function Main() {
    return (
        <div>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/user-tickets"}>User Tickets</NavLink>
            </nav>
            <h1>I'm Main page</h1>
            <Outlet />
        </div>
    );
}

export default Main;
