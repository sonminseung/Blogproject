import {useState} from "react";

function Loginfunction() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username, Setusername] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, Setpassword] = useState("");

    const onChange_username = (e)=> {
        Setusername(e.target.value)
    };
    const onChange_password = (e) => {
        Setpassword(e.target.value)
    };
    const onSubmit=(e)=>{
        e.preventDefault()
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div>
                <label for="username">username</label>
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

            <div>
                <button>Login</button>
            </div>
            </form>
        </div>
    )
}

export default Loginfunction
