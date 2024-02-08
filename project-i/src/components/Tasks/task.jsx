import React from 'react'
import Navbar from '../Navbar/navbar'
import './task.css'
import Topnav from '../Topnav/topnav'

function Task() {
  return (
    <div className='taskfull'>
      <Navbar />
      <div className="taskcontent">
        <Topnav />
        <div className="taskmain">
          <div className="contacthead">
            <label htmlFor="">
              <h3>Task & Calender</h3>
              <p>Wellcome back,Onekode</p>
            </label>
            <label htmlFor="">
              <input type="text" placeholder='Search' />
            </label>
          </div>
          <div className="taskmaincontent">
            <div className="taskcalender">
              <div className="taskcalendersub">
                <div className="taskcalenderhead">
                  <button id='calbutton'>Next</button>
                  <button id='calbutton'>Today</button>
                  <p><b>December 2023</b></p>
                  <div className="taskcalenderbutton">
                    <button style={{borderBottomLeftRadius:'20px',borderTopLeftRadius:'20px',borderRight:'1px solid white'}}>Month</button>
                    <button>Day</button>
                    <button style={{borderBottomRightRadius:'20px',borderTopRightRadius:'20px',borderLeft:'1px solid white'}}>Week</button>
                  </div>

                </div>
                <div className="taskcalendersub2">
                <table> 
          

  
        <caption align="top"> 
           
        </caption> 
  
       
  
        <thead> 
            <tr> 
               
                <th>S</th> 
                <th>M</th> 
                <th>T</th> 
                <th>W</th> 
                <th>T</th> 
                <th>F</th> 
                <th>S</th> 
            </tr> 
        </thead> 
          
        <tbody> 
            <tr> 
                <td></td> 
                <td></td> 
                <td></td> 
                <td></td> 
                <td></td> 
               <td style={{}}>1</td> 
                <td>2</td> 
            </tr> 
            <tr></tr> 
            <tr> 
                <td>3</td> 
                <td>4</td> 
                <td>5</td> 
                <td>6</td> 
                <td>7</td> 
                <td>8</td> 
                <td>9</td> 
            </tr> 
            <tr> 
                <td>10</td> 
                <td>11</td> 
                <td>12</td> 
                <td>13</td> 
                <td>14</td> 
                <td>15</td> 
                <td>16</td> 
            </tr> 
            <tr> 
                <td>17</td> 
                <td>18</td> 
                <td>19</td> 
                <td>20</td> 
                <td>21</td> 
                <td>22</td> 
                <td>23</td> 
            </tr> 
            <tr> 
                <td>24</td> 
                <td>25</td> 
                <td>26</td> 
                <td>27</td> 
                <td>28</td> 
                <td>29</td> 
                <td>30</td> 
            </tr> 
             
        </tbody> 
    </table> 

                </div>

              </div>
            </div>
            <div className="taskdetails">
              <div className="taskdetailscontent">
                <h3>Task Details</h3>
                <label htmlFor="">Title:
                  <input type="text" />
                </label>
                <label htmlFor="">Details:
                  <input style={{height:'100px'}} type="textarea" />
                </label>
                <label htmlFor="">Activity Date:
                  <input type="text" />
                </label>
                <label htmlFor="">All Day:
                  <input type="text" />
                </label>
                <label htmlFor="">Priority:
                  <input type="text" />
                </label>
                <div className="taskbutton">
                  <button id='taskbutton1'>Edit Task</button>
                  <button id='taskbutton2'>Save Task</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task