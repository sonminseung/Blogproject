import {useState} from "react";
import "./style.css"
import {Link} from "react-router-dom";
import home from "./Home";
function Register() {
    const [Id, SetId]=useState("");
    const [Password, SetPassword]=useState("");
    const [ConfirmPassword, SetConfirmPassword]=useState("");
    const [email, Setemail]=useState("");

    const onId=(e)=>
    {
        SetId(e.target.value);
    }

    const onPassword=(e)=>
    {
        SetPassword(e.target.value);
    }
    const onConfirmPassword=(e)=>
    {
        SetConfirmPassword(e.target.value);
    }
    const onemail=(e)=>
    {
        Setemail(e.target.value);
    }
    const onSubmit=(e)=>
    {
        e.preventDefault();
    }
        return (<div>
            <div>
               <h1> <Link to="/"style={{ textDecoration: 'none',color:"black"}}>My Blog</Link></h1>
            </div>
            <div className="register_container">
        <form onSubmit={onSubmit} >
            <div>
            <input value={Id} type="text" onChange={onId} placeholder="ID" style={{marginTop:"4rem"}}/>
            </div>
            <div>
        <input value={Password} type="password" onChange={onPassword} placeholder="Password" style={{marginTop:"4rem"}}/>
            </div>
            <div>
        <input value={ConfirmPassword} type="password" onChange={onConfirmPassword} placeholder="ConfirmPassword" style={{marginTop:"4rem"}}/>
            </div>

            <div>
        <input value={email} type="email"  onChange={onemail} placeholder="Email" style={{marginTop:"4rem"}}/>
            </div>
            <button type="submit"  className="register_button" style={{margin:'2rem', width:'6rem', height:'3rem'}}>register</button>
    </form>
    </div>
            </div>
    )
}

export default Register