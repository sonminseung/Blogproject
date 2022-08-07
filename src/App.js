import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Post from "./routes/Post";
import Project from "./routes/Project";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Loginfunction from "./routes/login";
import Register from "./routes/register";
function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Routes>
    <Route path ="/"element={<Home/>}></Route>

            <Route path ="/Project"element={<Project/>}>\
            </Route>

            <Route path="/Post" element={<Post/>}>
            </Route>

    <Route path="/Profile" element={<Profile/>}></Route>

                    <Route path="/login" element={<Loginfunction/>}></Route>
                    <Route path="/register" element={<Register/>}> </Route>

</Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
