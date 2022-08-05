import {Link} from 'react-router-dom';
import "./style.css";
function Home() {
    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
            <h1 className="fw-light text-white m-0"><Link to="/"style={{ textDecoration: 'none',color:"black"}}>My Blog</Link></h1>
            </div>
                <div class="Menu-container">
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/Project"style={{ textDecoration: 'none' ,color:"black" }}>My Project</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/Profile"style={{ textDecoration: 'none',color:"black" }}>My Profile</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/post"style={{ textDecoration: 'none' ,color:"black"}}>My post</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/login"style={{ textDecoration: 'none',color:"black" }}>Login</Link></h3>
            </div>
                </div>
        </div>
        </div>

    );
}

export default Home;
