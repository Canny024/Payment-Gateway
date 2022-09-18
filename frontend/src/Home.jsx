import React from 'react'
import axios from "axios";
import Navigation from './Navigation';
import Main from './Main';


const Home = () => {

   
function enter () {

    let num= prompt("Enter number of tickets","1")
    num = parseInt(num);
    if(typeof(num)=='number'){
       let amount=num*500;
        checkoutHandler(amount);
    }
    else{
        alert("Please enter a valid input!!")
    }

}

    const checkoutHandler = async (amount) => {
        

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "TEDxNITW",
            description: "Payment for ticket booking",
            image: "https://pi.tedcdn.com/r/www.filepicker.io/api/file/2J6LaPS7SYeMZEkREHBN?quality=90&w=260",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
       
     <div >
            <Navigation />
            <Main  enter={enter}  />
            </div>
    )
    
}

export default Home