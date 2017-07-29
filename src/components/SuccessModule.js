import React from 'react'

const s = {
    outer:{
        // backgroundColor:'red',

    },
    inner:{
        // width:'100px',
        display:'inline-block',
        borderRadius:'180px',
        backgroundColor:'#d21145',
        padding:'15px',
        position:'fixed',
        top:'90vh',
        color:'#FFFFFF'
    }
};

export const SuccessModule = (props)=>{
    return(
        <div style={{...s.outer, opacity:props.opacity}}>
            <div style={s.inner}>Diamond saved successfully</div>
        </div>
    )
};