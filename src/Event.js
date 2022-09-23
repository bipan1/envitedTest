import React from "react";
import { AiTwotoneCalendar, AiOutlineRight } from 'react-icons/ai';
import { GoLocation } from "react-icons/go";

const Event = () => {
    return (
        <>
            <div className="eventDetails">
                <span className="eventTitle">Birthday Bash</span>
                <label className="hostedBy">Hosted By <strong>Elysia</strong></label>

                <div style={{marginTop : "40px"}} className="locationDetail row">
                    <div className="iconContainer col-2">
                        <AiTwotoneCalendar color="#8456EC" size={"30px"} />
                    </div>
                    <div className="col-9">
                        <span style={{color : "#240D57"}}>18 August 6:00PM</span><br/> to 19 August 1:00PM UTC+10
                    </div>
                    <div className="col-1">
                        <AiOutlineRight color="gray" />
                    </div>
                    
                </div>

                <div className="locationDetail row">
                    <div className="iconContainer col-2">
                        <GoLocation color="#8456EC" size={"30px"} />
                    </div>

                    <div className="col-9">
                        <span style={{color : "#240D57"}}>Street name</span><br/> Suburb, State, Postcode
                    </div>
                    <div className="col-1">
                        <AiOutlineRight color="gray" />
                    </div>
                </div>
            </div>

            <div>
                <img alt="Event" className="eventImage" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220923%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220923T052351Z&X-Amz-Expires=86400&X-Amz-Signature=4ddf6d354d3feb314e0524d9d422eb8f376030efae3f0359249ef58649345e04&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" />
            </div>
        </>
    )
};

export default Event;