import React from "react";

// Create a ClickTracker component that renders three buttons. 
// Implement a single event handler for all three buttons, and track 
// of which button was pressed last. Show the last button that was 
// pressed in an h1 tag within the ClickTracker component. 
// Tip: you can use the event object to access the target property of the event.

export class ClickTracker extends React.Component {   
    // state = {
    //     clickLast: "",
    // }

    buttonClick = (event) => {
        const getButton = document.getElementById("getH1")
        getButton.innerHTML = event.target.innerText;

    }

    render() {
        return (
            <div>
                <h1 id="getH1"></h1>
                <button name="buttonOne" onClick={this.buttonClick}>Button One</button>
                <button name="buttonTwo" onClick={this.buttonClick}>Button Two</button>
                <button name="buttonThree" onClick={this.buttonClick}>Button Three</button>
            </div>
        )
    }
}

