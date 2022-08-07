import {useEffect, useState, useHistory} from "react";
import "./style.css";

function Loginfunction() {
    const getUser=async()=>{
        const user_json = await (
            await fetch(
                `http://localhost:3000/user`
            )
        ).json();
        Setdbusername(user_json.user.username)
        Setdbpassword(user_json.user.username)
    }
    const history=useHistory()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, Setusername] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, Setpassword] = useState("");
    const [dbusername, Setdbusername]=useState("")
    const [dbpassword, Setdbpassword]=useState("")
    const onChange_username = (e)=> {
        Setusername(e.target.value)
    };
    const onChange_password = (e) => {
        Setpassword(e.target.value)
    };
    const onSubmit=(e)=>{
        e.preventDefault();
        //if(dbusername===username && dbpassword=== password);

    };
    return (
        <div className="d-flex flex-column justify-content-center w-100 h-100" class="login_box">
            <div className="d-flex flex-column justify-content-center align-items-center" class="login_container">
            <form onSubmit={onSubmit}>
            <div>
                <label for="username" >username</label>
                <input value={username}
                       type="text"
                       placeholder="enter your username"
                       onChange={onChange_username}/>
            </div>

            <div>
                <label for="password">Password</label>
                <input value={password}
                       type="password"
                       placeholder="please typing your password"
                       onChange={onChange_password}/>
            </div>

            <div class="login_button">
                <button>Login</button>
            </div>

            </form>
        </div>
        </div>
    )
}

export default Loginfunction
