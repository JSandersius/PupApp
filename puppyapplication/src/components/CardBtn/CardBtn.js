import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default CardBtn;

//the jsx shortcut here means that the rest of the properties of this props object will be added
//to the button element 
//so in this case, all of the inline css will be applied as well as the date value 