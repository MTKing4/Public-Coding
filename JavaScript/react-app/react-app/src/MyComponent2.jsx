import React, {useState} from 'react';


function MyComponent2(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="Number" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Add Comment" />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value=""> Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" 
                   checked={shipping === "Pick Up"}
                   onChange={handleShippingChange} />
            Pick Up
        </label>
        <br></br>
        <label>
            <input type="radio" value="Delivery"
                   checked={shipping === "Delivery"}
                   onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>)
}

export default MyComponent2

// onChange will update instantly to whatever we type in the textfield, function gets called each time a change happens
//  <input type="Number" /> will give two arrows to increasae and decreas the number (super coool)