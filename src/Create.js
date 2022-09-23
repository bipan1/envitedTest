import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import logo from "./Image.png";

const Create = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [hostName, setHostName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let inputRef;


  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <>
      <div className="createForm">
        <div className="row">
          <div className="col-6 verticalLine">
            <h2 className="headerTitle">Create your event</h2>
            <div>
              <label>Event name</label>
              <input placeholder="Name of event" type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} name="eventName" className="form-control mb-2" />
              <label>Host name</label>
              <input type="text" placeholder="Name of Host" value={hostName} onChange={(e) => setHostName(e.target.value)} name="hostName" className="form-control mb-2" />
              <label>Location of event</label>
              <div className="row mb-2">
                <div className="col-12 mb-2 mt-1">
                  <span>Street Address</span>
                  <input type="text" placeholder="Street Address" value={location} onChang={(e) => setLocation(e.target.value)} name="location" className="form-control" />
                </div>
                <div className="col-6">
                  <span>State</span>
                  <input type="text" placeholder="State" value={location} onChang={(e) => setLocation(e.target.value)} name="location" className="form-control" />
                </div>
                <div className="col-6">
                  <span>Suburb</span>
                  <input type="text" placeholder="Suburb" value={location} onChang={(e) => setLocation(e.target.value)} name="location" className="form-control" />
                </div>
              </div>
              
              <label>Start Date</label>
              <DatePicker className="form-control mb-2" selected={startDate} onSelect={(date) => setStartDate(date)}/>
              <label>End Date</label>
              <DatePicker className="form-control mb-2" selected={endDate} onSelect={(date) => setEndDate(date)}/>

              {/* <label>Event Photo</label> */}
              <input ref={refParam => inputRef = refParam} style={{display : "none"}} type="file" name="eventPhoto" onChange={handleImageChange} className="form-control" />

              <div style={{marginTop : "20px"}} className="col text-center">
                <button onClick={() => navigate("/event")} style={{width: "300px"}} className=" btn btn-primary" >Next</button>
              </div>
            </div>
          </div>
            <div className="col-6">
              <h2 className="headerTitle">Upload you Event Photo</h2>
              <img onClick={() => inputRef.click()} src={image ? image : logo} alt="Placeholder" className="placeholderImage"/>
            </div>
        </div>

        

          {/* {image && <div>
            <img className="imagePreview" src={image} alt="uploaded" />
          </div>} */}
      </div>
    </>
    
  );
}
   
  export default Create;