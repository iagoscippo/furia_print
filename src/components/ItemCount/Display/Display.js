import React from 'react';

let display = {
    height:50,
    width:100,
    backgroundColor:"white",
    border:"2px solid pink",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight:"700",
    fontSize:"2rem",
    borderRadius:10,
}

export default function ItemCountDisplay(props){
    return (
        <div className="display" style={display}>{props.counter}</div>
    )
};