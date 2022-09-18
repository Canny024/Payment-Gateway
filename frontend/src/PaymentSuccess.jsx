import React from 'react'

const PaymentSuccess = () => {

    
    return (
        <div style={{backgroundColor: "green", display:"flex", justifyContent:"center", textAlign:"center"}}>

            <div><h1 style={{color: "white", fontSize:"40px", fontWeight:"bold"}}>PAYMENT SUCCESSFULL,CLICK TO DOWNLOAD</h1></div>  
            <button ><a href='http://localhost:4000/api/recipt'>DOWNLOAD TICKET</a></button>        
      
        </div>
    )
}

export default PaymentSuccess;