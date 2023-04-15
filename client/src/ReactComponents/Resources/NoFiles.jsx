import React,{useState} from 'react'
import UPI from "../Images/qrcode.png";

const QRCodeContainer = () => {
  return(<>
    <div className="upiPay">
      <img src={UPI} alt="QR Code" />
    </div>
  </>)
}
const NoFiles = () => {
    const [upi, setUpi] = useState(true);
    const [close, setClose] = useState(false);
    
    const openUPI = () =>{
      setUpi(true);
    }
    
    const [payNow,setPayNow] = useState(true);

  return (
    <div className='nofiles'>
      {close?<><div className="QRcodeContainer">
          <h1 className="upiHeading"> Register now</h1>

          {payNow?<QRCodeContainer/>:null}
          <button className="close_btn_QR" onClick={()=>setClose(!close)}>X</button>

          </div></>:null
        }

    
        <div className="payBtn" onClick={()=>setClose(!close)}>Pay</div>
    </div>
  )
}

export default NoFiles;




 
 
  



