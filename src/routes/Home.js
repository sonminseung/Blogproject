import {Route, Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>
                <h1><Link to="/">My Blog</Link></h1>
            </div>
            <div>
                <h3><Link to="/Project">My Project</Link></h3>
            </div>
            <div>
                <h3><Link to="/Profile">My Profile</Link></h3>
            </div>
            <div>
                <h3><Link to="/post">My post</Link></h3>
            </div>
            <div>
                <h3><Link to="/login">Login</Link></h3>
            </div>
        </div>

    );
}

export default Home;
