
import React, { useState } from 'react'

export default function UserForm() {
    let [total, setTotal] = useState(0);
    let [car, setCar] = useState({
        brand: 'Tata',
        color: 'Red',
        model: 'Nexon'
    });

    function updateCar(event) {
        event.preventDefault();
        setCar({...car, color: 'blue', brand: 'Tata New' });
    }
    function calculateTotal(event) {
        event.preventDefault();
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);

        setTimeout(() => {
            console.log("Total : ", total);
        }, 6000);

        setTotal(num1 + num2);
        console.log("Total : ", total);

        setTimeout(() => {
            console.log("Total : ", total);
        }, 6000)
    }
    return (
        <form>
            <input type='text' id="num1" />
            <input type='text' id="num2" />
            <p>Total = {total}</p>
            <p>Car Brand : {car.brand}</p>
            <p>Car Model : {car.model}</p>
            <p>Car Color : {car.color}</p>
            <button onClick={calculateTotal}> Calculate Total</button>
            <button onClick={updateCar}> Update Car</button>
        </form>
    )
}
