import {useState} from "react";
import "./style.css"
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
        <form onSubmit={onSubmit}>
            <div>
            <input value={Id} type="text" onChange={onId} placeholder="ID"/>
            </div>
            <div>
        <input value={Password} type="password" onChange={onPassword} placeholder="Password"/>
            </div>
            <div>
        <input value={ConfirmPassword} type="password" onChange={onConfirmPassword} placeholder="ConfirmPassword"/>
            </div>

            <div>
        <input value={email} type="email"  onChange={onemail} placeholder="Email"/>
            </div>
            <button type="submit" value="register"/>
    </form>
    </div>
    )
}

export default Register