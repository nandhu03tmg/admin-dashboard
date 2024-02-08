import React from 'react';
import './dashboard.css';
import Navbar from '../Navbar/navbar';
import Topnav from '../Topnav/topnav';

function Dashboard() {
  return (
    <div className='dashfull'>
      <Navbar />

      <div className="dashcontent">
        <Topnav />
        <div className="dashmain">
          <div className="contacthead">
            <label htmlFor="">
              <h3><b>Dashboard</b></h3>
              <p>Wellcome back,Onekode</p>
            </label>

          </div>
          <div className="dashgraphs">
            <div className="dashgraph2">
              <div className="dashgraph1_content">
                <p>Revenue</p>
                <h2>$44300.50</h2>
              </div>
              <div className="dashgraphimg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoJifIypwi97Bi2l8NZQ8fji0wH9T31wwMySxYlhwSmd9rmPDjeSoRDrOSrr1UB2rpOg&usqp=CAU" alt="" />
            </div>
            </div>
            <div className="dashgraph2">
              <div className="dashgraph1_content">
              <p>Expenses</p>
              <h2>$13400.39</h2>
              </div>
              <div className="dashgraphimg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoJifIypwi97Bi2l8NZQ8fji0wH9T31wwMySxYlhwSmd9rmPDjeSoRDrOSrr1UB2rpOg&usqp=CAU" alt="" />
              </div>
            </div>
            <div className="dashgraph2">
            <div className="dashgraph1_content">
                <p>Revenue</p>
                <h2>$44300.50</h2>
              </div>
              <div className="dashgraphimg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoJifIypwi97Bi2l8NZQ8fji0wH9T31wwMySxYlhwSmd9rmPDjeSoRDrOSrr1UB2rpOg&usqp=CAU" alt="" />
              </div>
            </div>

          </div>
          <div className="dashfooter">
            <div className="dashfooter1">
              <h3>Recent Activites</h3>
              <div className="dashfoot1sub">
                <div className="dashfoot1_content1">
                  <label htmlFor="">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
                  <p>Meetings</p>
                  </label>
                  <p>5</p>
                </div>
                <div className="dashfoot1_content1">
                <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                 <p>Calls</p>
                  </label>
                  <p>12</p>
                </div>
                <div className="dashfoot1_content1">
                <label htmlFor="">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                  <p>Messages</p>
                  </label>
                  <p>25</p>
                </div>
               
              </div>
            </div>
            <div className="dashfooter2">
            <h3>Add Widgets</h3>
            <div className="dashfoot2sub">
              <div className="foot2sub2_content">
              <label htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                 <p>Sales Widget</p>
                  </label>
              </div>
              <div className="foot2sub2_content">
              <label htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
                <p>Chart Widget</p>
                  </label>
              </div>
              <div className="foot2sub2_content">
              <label htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/></svg>
                 <p>Lead Widget</p>
                  </label>
              </div>
              <div className="foot2sub2_content">
              <label htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                 <p>Account Widget</p>
                  </label>
              </div>

            </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
