import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <div>
            <div className="signfull">
                <div className="signpage">
                    <div className="signboard">
                        <h4>Wellcome Back</h4>
                        <p>Enter your personal Details and start<br /><center>journey with us</center></p>
                        <Link id='Link' to='/signin'><button>SIGN IN</button></Link>
                    </div>

                    <div className="signcontent">
                        <h3>Create Account</h3>
                        <div className="signlogo">
                           <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6G4hOTgd8-c1Cjclx3uwTkGtFvg2h-lT0TrWNAgWLCQ&s" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawxLX5ThF0jjClVdI5Hg7TPu5QGjRw8aBGJQUxckgmA&s" alt="" />
                        </div>
                        <p>or use your email for registration</p>
                        <label htmlFor="">
                            <input type="text" placeholder='Name' />
                        </label>
                        <label id='input' htmlFor="">
                            <input type="text" placeholder='Email' />
                        </label>
                        <label id='input' htmlFor="">
                            <input type="password" placeholder='Password' />
                        </label>


                        <button>SIGN UP</button>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup