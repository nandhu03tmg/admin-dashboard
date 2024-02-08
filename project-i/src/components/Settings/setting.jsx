import React from 'react'
import Navbar from '../Navbar/navbar'
import './setting.css'
import Topnav from '../Topnav/topnav'

function Setting() {
    return (
        <div className='settingfull'>
            <Navbar />
            <div className="settingcontent">
                <Topnav />
                <div style={{ width: '97%' }} className="settingmain">
                    <div className="contacthead">
                        <label htmlFor="">
                            <h3>Settings</h3>
                            <p>Wellcome back,Onekode</p>
                        </label>
                        <label className="contactsvg" htmlFor="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            <input type="text" placeholder='Search' />
                        </label>
                    </div>
                    <div className="settingprofile">
                        <div className="settingname">
                            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                            <label htmlFor="">
                            <h4>John Simth</h4>
                            <p>johnsimth0@gmail.com</p>
                            </label>
                        </div>
                        <button>Upload Image</button>
                    </div>
                    <div className="setting_inputs">
                        <label htmlFor="">First Name
                            <input type="text" placeholder='First Name'/>
                        </label>
                        <label htmlFor="">Last Name
                            <input type="text" placeholder='Last Name'/>
                        </label>
                    </div>
                    <div className="setting_email">
                        <label htmlFor="">Email
                            <input type="email" placeholder='johnSimth@gmail.com'/>
                        </label>
                        <button>Add Another Account</button>
                    </div>
                    <div className="setting_password">
                        <label htmlFor="">Password <br />
                        <div className="setting_eye">
                            <input type="password" name="" id="" />
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M572.5 241.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4a32.4 32.4 0 0 0 0 29.2C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4a32.4 32.4 0 0 0 0-29.2zM288 400a144 144 0 1 1 144-144 143.9 143.9 0 0 1 -144 144zm0-240a95.3 95.3 0 0 0 -25.3 3.8 47.9 47.9 0 0 1 -66.9 66.9A95.8 95.8 0 1 0 288 160z"/></svg>
                            </div>
                        </label>
                        <label htmlFor="">Confirm Password <br />
                            <div className="setting_eye">
                            <input type="password" name="" id="" />
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M572.5 241.4C518.3 135.6 410.9 64 288 64S57.7 135.6 3.5 241.4a32.4 32.4 0 0 0 0 29.2C57.7 376.4 165.1 448 288 448s230.3-71.6 284.5-177.4a32.4 32.4 0 0 0 0-29.2zM288 400a144 144 0 1 1 144-144 143.9 143.9 0 0 1 -144 144zm0-240a95.3 95.3 0 0 0 -25.3 3.8 47.9 47.9 0 0 1 -66.9 66.9A95.8 95.8 0 1 0 288 160z"/></svg>
                            </div>
                        </label>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Setting