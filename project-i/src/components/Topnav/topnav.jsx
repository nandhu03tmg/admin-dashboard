import React from 'react'
import './topnav.css'

function Topnav() {
  return (
    <div>
      <div className="topnavfull">
        <div className="topselect">
          <p>Sort: </p>
          <select name="" id="">
            <option value="">Last week</option>
            <option value="">Today</option>
            <option value="">Yesterday</option>

          </select>
        </div>
        <div className="topprofile">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
          <div className="topname">
            <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
            <label htmlFor="">
              <h5>John Simth</h5>
              <p>johnsimth@gmail.com</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topnav