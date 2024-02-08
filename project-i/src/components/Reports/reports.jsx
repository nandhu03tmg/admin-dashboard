import React from 'react'
import Navbar from '../Navbar/navbar'
import Topnav from '../Topnav/topnav'
import './reports.css'
import Myimg from '../Reports/IMG_20240117_121116.jpg'

function Reports() {
    return (
        <div className='reportsfull'>
            <Navbar />
            <div className="reportscontent">
                <Topnav />
                <div className="reportsmain">
                    <div className="contacthead">
                        <label  htmlFor="">
                             <h3 style={{fontSize:'14px'}}>Reports & Analytics</h3>
                            <p>Wellcome back,Onekode</p>
                        </label>
                        <label className="contactsvg" htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                           
                            <input type="text" placeholder='Search' />
                        </label>
                    </div>
                    <div className="reportslist">
                        <div className="reportslist1">
                            <h3>32</h3>
                            <p>Lists</p>
                        </div>
                        <div className="reportslist1">
                            <h3>3922</h3>
                            <p>Emails</p>
                        </div>
                        <div className="reportslist1">
                            <h3>19829</h3>
                            <p>Total Contacts</p>
                        </div>
                    </div>
                    <div className="reportalalitics">
                        <h3>Analytics</h3>
                        <div className="analyticsimage">
                            <img src={Myimg} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports