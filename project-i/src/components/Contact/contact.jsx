import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/navbar'
import './contact.css'
import Topnav from '../Topnav/topnav'
import axios from 'axios';
import Pagination from './Pagination';


function Contact() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  

  const [searchTerm, setSearchTerm] = useState('');

  const [dataArray, setDataArray] = useState([]);
  const [output, setOutput] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  // const fetch =()=>{
  //   const storedData = JSON.parse(localStorage.getItem('contactData')) || [];
  //   console.log(storedData);
  // }

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setInputValue3(event.target.value);
  };

  const [contact, setContact] = useState([]);
  const existingData = JSON.parse(localStorage.getItem('contactData')) || [];

  const createData = async (data) => {
    try {
      // Adjust the API endpoint to your backend server for creating data
      await axios.post('http://localhost:3001/staff/create-staff', data);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
  };

  const handleContactSave = async () => {
    try {
      const newData = {
        inputValue1,
        inputValue2,
        inputValue3,
      };

      await createData(newData);
      // Optionally, you can fetch the data after creation
      await fetchData();
    } catch (error) {
      console.error('Error saving data:', error.message);
    }


    // const updatedData = [...existingData, newData];

    // // Save the updated data back to local storage
    // localStorage.setItem('contactData', JSON.stringify(updatedData));

    // // Log the updated data
    // console.log(updatedData);
    // fetch();
  };
  // const searchInDataArray = (inputValue) => {
  //   const searchResult = dataArray.find(item => item.inputValue1 === inputValue);
  //   // Use searchResult as needed, e.g., update state or perform further actions
  //   console.log(searchResult);
  // };
  // const searchInDataArray = () => {
  //   const filteredData = dataArray.find(item => item.toLowerCase().inputValue1.includes(searchTerm));
  //   setDataArray(filteredData);
  // };
  // const searchInDataArray = (inputValue) => {
  //   const filteredData = dataArray.filter(item => {
  //     if (typeof item.inputValue1 === 'string') {
  //       return item.inputValue1.toLowerCase().includes(inputValue.toLowerCase());
  //     }
  //     return false;
  //   });
  //   setDataArray(filteredData);
  // };
  const searchInDataArray = (inputValue) => {
    const filteredData = dataArray.filter(item => {
      if (typeof item.inputValue1 === 'string' && typeof inputValue === 'string') {
        return item.inputValue1.toLowerCase().includes(inputValue.toLowerCase());
      }
      return false;
    });
    setOutput(filteredData);
    console.log(output);
    // setDataArray(filteredData);
  };
  

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/staff/get-staff');
      console.log('Fetched Data:', response.data);
      setDataArray(response.data);
    setOutput(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

 


  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:3001/staff/search', { searchTerm });
  //     setDataArray(response.data);
  //   } catch (error) {
  //     console.error('Error searching staff:', error);
  //   }
  // };
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataArray.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className='contactfull'>
      <Navbar />
      <div className="contactcontent">
        <Topnav />
        <div className="contactmain">
          <div className="contacthead">
            <label htmlFor="">
              <h3><b>Contact</b></h3>
              <p>Wellcome back,Onekode</p>
            </label>
            <label className="contactsvg" htmlFor="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setSearchTerm(inputValue);
                  searchInDataArray(inputValue);
                }}
                // onChange={(e) => {
                //   setSearchTerm(e.target.value);
                //   searchInDataArray(); // Call handleSearch on every change
                // }}
                placeholder='Search' />
            </label>
          </div>
          <div className="contactcrud">
            {output.map((item, index) => (
              <div className="contacthide" key={index}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAZlBMVEX///8AAAD8/PwiIiLFxcUEBAT5+fn19fUICAioqKju7u4+Pj6goKBaWlowMDDJycm9vb0aGhrl5eU1NTV1dXXV1dXc3NyGhoZvb29kZGRfX18QEBAoKCiwsLCQkJBOTk6YmJh+fn7p6D3JAAAEo0lEQVR4nO2bi3aqOhCGkwhJuMkdqah1v/9L7pmAlPZAodU47rPy6fISKf5OMpOZhDLmcDgcDofD4XA4HA6Hw+FwOBz/VwTchWBC4quPRilM87SRECGNDlVn5zg+Z7WaNL4AaCiQVF+O5S7XOt+Vx0ttmsRLSIS+DKXMIv6JKJMyFK/Qw2a4pdWO687ncDMPnea7Kv0yMKkEQj9m77xXZp54r5O/Z72fUIrDG+jr+CwdKmSE/WzMo2Sw58Z4X4CmfSAVo/OVIcylEff1nAG1z6O0D5REAhn6R3GEAbcg0OfHgtGFaxhc0IHx4BgzYHtsfgWVQCZZk3PNZw3omw/yBg6iEQhBDh5iPusho5/wWJgfQgJ8c5gsibuRhHShEL7Z268J3Ht0BgSB8ezw+0RMGmYOq/r4gXJCDtt1gW1IJk+w8G1d4FtI2MUwjawCkwlZH4tiiwULwnwmrNYFViFh6r/Ri+kQQb6mLw9Ik+p0fSZJqbRhNi/CI2ZV8/lWX5kcQ3MgiUD0zhgT5/l0BssozQOYialGoQKRqsTMeUmh5qWC36GIBIJpJAs6rZdSfq27ABNqSVY24WxX8YWUFRsxCDKiMcj6gk3W0Zy6nqjG4UfVw6ZaA9tA3blQF0PVaTyJzEsQyPa86Lbk4XM+eRl5glTaACb+yUdg8ccqNPFeYv1Soo82h5yPAdGEP54fGiHoQuAHoq8/m6qcLCF1ZdUwwpL9K2AqIeqgei9PXXcq36ugNk3UunqGVXR4Vk3qZZmXNmrS+DqIxTevwricSr2u+i0vrA3sho4xPFCr+TcB40ml5BBfXsGIEyWyqL1zcLkcDpdLcPbqQo4fEfb3bW0yTINDEp3GqaQ7RckhSHFRRhIKFBCPFQgogmM5s1PSlcegAIUKIjjNErBJBlXajpmMqeOGlGtQ2aaKUVV1mCSEHib8WJQYRfoj14eCqW+svJDRbMyCVeo/WLdDcmUqTJ/f0i3zBtqMwv2fmsiC8lwO6V8vaqyP/bGp/7A8PzsrxM102bSTXl3GHNA28qk78PJjC3YD49bsE+0oZbYf/HZdn5G4z+Tz9IEBYfhh4bHNgqZcKc9PNKGKd7ft9VWJ/m0Tfhc/r4CPT1wPMXmLk5gjNT/F9pX1ZUZ64htM9x9D8lPa1yo2BeKuUZOY2PxTgTAOk6a/SMSmQMGKdgjCPxSI97awHA7h5CrO+Vb//aJQ8xwcxWq4gS5OzWrbFv/9LK8P6lFqOXMQ/fbhj+3Hb9NOa3d/W4rspu7nY7Ansxuuw7dfWW9E4+anTbLdxgxh0Y67s019anHFfDuVzRkP55D1qxS+QZv5xBriaibW3+szf3y158cqubd/cYAkdvoYl4RqfvcIxAklFTZSQ1yxuj5EIL9aSP/7YbO5DPlGHhYok1M+VKDQoxHuMSDXVla/8CKUyZfcI5A3zMKVrXC+7A5ln8hsCIRRfZ0Y4beYMRxbWGfH8x1M+XM//MIsbIAKJTZcxbONykJWjWt8Gy5128abhU14/I+HKt89hLy1MdlBwVl7jyGrH7/RjeXsA3+2orzC3+FwOBwOh8PhcDgcDofD4XD8K/wF6ecvHy35+wwAAAAASUVORK5CYII=" alt="" />
                <p>{`${item.inputValue1}`}</p>
                <p id="contactnumber">{` ${item.inputValue2}`}</p>
                <p id="contactroll">{` ${item.inputValue3}`}</p>
                <p id="onecoderemove">OneKode</p>
              </div>
            ))}
  {/* <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dataArray.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />  */}
          </div>

          <div className="contactfooter">
            <div className="contactfooter1">
              <h3>Recent Interaction</h3>
              <div className="contactsub">
                <div className="contactsubcontent">
                  <img src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.webp?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=" alt="" />
                  <p>Jack</p>
                  <p>+3676994978</p>
                  <p>Manager</p>

                </div>
                <div className="contactsubcontent">
                  <img src="https://as1.ftcdn.net/v2/jpg/03/82/78/76/1000_F_382787674_JmU69nTp1qEUwh0kxBeThK60my6MBYSL.jpg" alt="" />
                  <p>Larry</p>
                  <p style={{ marginRight: '9px' }}>+6456772898</p>
                  <p style={{ marginRight: '20px' }}>C.E.O</p>

                </div>
              </div>
            </div>
            <div className="contactfooter2">
              <h3>Add New Contact</h3>
              <div className="contactinput">
                <label htmlFor="">Name:
                  <input onChange={handleInputChange1} type="text" />
                </label>
                <label htmlFor="">Tell No:
                  <input onChange={handleInputChange2} type="text" />
                </label>
                <label htmlFor="">Role:
                  <input onChange={handleInputChange3} type="text" />

                </label>
                <label id='contactsave' htmlFor="">
                  <button onClick={handleContactSave}>Save</button>
                </label>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact