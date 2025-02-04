
// Kundens krav:
// - Öka och minska antalet produkter av en viss sort i kundvagnen

import { useState } from "react"

// User stories:
// 1. som kund vill jag kunna öka antalet av en viss vara
// 2. som kund vill jag kunna minska antalet av en viss vara
// 3. som kaosgeneral vill jag att antalet ska randomisas varje gång jag klickar

// 0.1 det ska finnas knappar med texten "+" och "-" och "Surprise me"
// 0.2 användaren ska se talet 1 initialt (innan man klickat på någon knapp)
// 1.1 när man klickar på knappen första gången "+" ska talet 2 visas i stället
// 1.2 när man klickar på knappen "+" ska antalet ändras till (tidigare tal + 1)
// 2.1 när man klickar på knappen "-" ska antalet ändras till (tidigare tal - 1)
// 2.2 när man klickar på knappen "-" och antalet är 0 ska antalet inte ändras
// 3.1 när man klickar på knappen "Surprise me" ska antalet ändras til ett slumpat tal mellan 0 och 100



const Counter = () => {
    const [count, setCount] = useState(1);


    const handleAdd = () => setCount(count + 1);
    const handleSubtract = () => {
        if(count > 0)
            setCount(count - 1);
    }

    const handleRandom = () => {
        setCount( Math.floor(Math.random() * 101))
    }

    return (
        <div classname="counter">
            Product counter
            <p className="value">{count}</p>
            <button className="add-button" onClick={handleAdd}> + </button>
            <button className="subtract-button" onClick={handleSubtract}> - </button>
            <button className="random-button" onClick={handleRandom}> Suprise me </button>
        </div>

    )
}

export default Counter