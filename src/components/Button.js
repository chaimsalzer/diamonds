import React from 'react';



export const Button = (props)=> {
    return(
        <button onClick={props.onClick} style={{
            backgroundColor:'#d21145',
            border:'none',
            borderRadius:'2px',
            color:'white',
            padding:'10px 30px 10px 30px',
            marginTop:'40px',
            height:'60px',
            fontFamily: 'Cutive Mono', fontSize:'18px'
        }}>+ Add Diamond</button>
    )
};