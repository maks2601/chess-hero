import HomeButton from "./components/HomeButton.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <HomeButton/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;