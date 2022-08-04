import {Link} from 'react-router-dom';
import "./style.css";
function Home() {
    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100">
            <div className="d-flex flex-column justify-content-center align-items-center">
        <div>
            <h1 className="fw-light text-white m-0"><Link to="/">My Blog</Link></h1>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/Project">My Project</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/Profile">My Profile</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/post">My post</Link></h3>
            </div>
            <div>
                <h3 className="fw-light text-white m-0"><Link to="/login">Login</Link></h3>
            </div>
        </div>
        </div>

    );
}

export default Home;
