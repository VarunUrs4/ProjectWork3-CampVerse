import React,{useState} from "react";
import Card from "./Card";
import { data } from "./data";
import qrcode from "../Images/qrcode.png";


const QRCodeContainer = () => {
  return(<>
    <div className="upiPay">
      <img src={""} alt="QR Code" />
    </div>
  </>)
}

const EventsContainer = () => {
  console.log(data);
  // const [upi, setUpi] = useState(true);
  // const [close, setClose] = useState(true);
  
  // const openUPI = () =>{
  //   setUpi(true);
  // }
  
  return (
    <>
      <div className="EventsContainer">
        <div className="eventsHeader">
          <h1>Events Page</h1>
        </div>
        {data.map((eventData, index) => {
          {const ans = eventData.eventName === 'Big Data'
           console.log("new :",ans) 
          } 
          return (
            <Card
              title={eventData.eventName}
              desc={eventData.eventDescription}
              seats={eventData.totalSeats}
              fees={eventData.entryFees}
              key={index}
              imgUrl={eventData.imgUrl}
            />
          )
        })}
        {/* {
          close?<><div className="QRcodeContainer">
          <h1 className="upiHeading">Pay using any UPI app</h1>

          <QRCodeContainer/>
          <button className="close_btn_QR" onClick={()=>setClose(!close)}>X</button>

          </div></>:null
        } */}
      </div>
    </>
  );
};

export default EventsContainer;
export {QRCodeContainer};
