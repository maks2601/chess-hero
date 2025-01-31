import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from "./pages/Game.tsx";
import Menu from "./pages/Menu.tsx";
import CreateRoom from "./pages/CreateRoom.tsx";
import JoinRoom from "./pages/JoinRoom.tsx";
import Layout from "./Layout.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Menu/>}/>
                    <Route path="/room/create" element={<CreateRoom/>}/>
                    <Route path="/room/join" element={<JoinRoom/>}/>
                    <Route path="/room/play" element={<Game/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export default App;
