import React, { useState,useEffect } from "react";
// import demonslayer from "../Images/demonslayer.png";
import axios from "axios";
import GooglePayButton from "@google-pay/button-react";
// import {QRCodeContainer} from "./EventsContainer";
import UPI from "../Images/qrcode.png";


const QRCodeContainer = () => {
  return(<>
    <div className="upiPay">
      <img src={UPI} alt="QR Code" />
    </div>
  </>)
}

const Card = ({title,desc,seats,fees,imgUrl}) => {
  // useEffect(() => {
  //   axios
  //     .get("/api/events")
  //     .then((res) => {
  //       console.log(res.data);
  //       // setAllQuestions(res.data.reverse());
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //     });
  // }, [1]);
  const [upi, setUpi] = useState(true);
  const [close, setClose] = useState(false);
  
  const openUPI = () =>{
    setUpi(true);
  }
  
  const [payNow,setPayNow] = useState(true);
 
  

  return (<>

{
          close?<><div className="QRcodeContainer">
          <h1 className="upiHeading"> Register now</h1>

          {payNow?<QRCodeContainer/>:null}
          <button className="close_btn_QR" onClick={()=>setClose(!close)}>X</button>

          </div></>:null
        }

    <div className="eventsCard">
      <div className="leftsideCard">
        <div className="cardTitle">
          <h1>
            <strong>{title}</strong>
          </h1>
        </div>
        <div className="cardDesc">
          <p>
            {desc}
          </p>
        </div>
        <div className="cardSeat_Price">
          <div className="seats">
            <h5>Total Seats</h5>
            <h2>{seats}</h2>
          </div>
          <div className="cardPrice">
            <h5 className="priceClass">Price</h5>
            <h2>₹{fees}</h2>
          </div>
          {/* <div className="seatsRemaining">
            <h5>Seats Remaining</h5>
            <h2>46</h2>
          </div> */}
        </div>
        
        <div className="payBtn" onClick={()=>setClose(!close)}>Pay</div>

        {/* <GooglePayButton className="payBtn"
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1.00",
            currencyCode: "USD",
            countryCode:"US",
          },
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log(paymentData);
          return { transactionState: "SUCCESS" };
        }}
        existingPaymentMethodRequired="false"
        buttonColor="Black"
        buttonType="pay"
        buttonSizeMode="fill"
      /> */}
      </div>
      <div className="rightsideCard">
        <img className="cardImg" src={imgUrl} alt="img" />
      </div>
    </div>
    
        </>
  );
};

export default Card;
