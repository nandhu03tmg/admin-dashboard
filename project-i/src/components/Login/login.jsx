import React from 'react'
import { Link } from 'react-router-dom';

import './login.css'




function Login() {
    return (
        <div>
            <div className="loginfull">
                <div className="loginpage">
                    <div className="logincontent">
                        <h3>Sign In</h3>
                        <div className="loginlogo">

                            <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6G4hOTgd8-c1Cjclx3uwTkGtFvg2h-lT0TrWNAgWLCQ&s" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawxLX5ThF0jjClVdI5Hg7TPu5QGjRw8aBGJQUxckgmA&s" alt="" />
                        </div>
                        <p>or use your account</p>
                        <label id='inputs' htmlFor="">
                            <input type="text" placeholder='Email' />
                        </label>
                        <label id='input' htmlFor="">
                            <input type="password" placeholder='Password' />
                        </label>
                        <label htmlFor="">
                            <p>Forgot Your Password</p>
                        </label>
                        <button>SIGN IN</button>


                    </div>
                    <div className="loginboard">
                        <h4>Hello,Friend!</h4>
                        <p>Enter your personal Details and start<br /><center>journey with us</center></p>
                        <Link id='Link' to='/signup'><button>SIGN UP</button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login