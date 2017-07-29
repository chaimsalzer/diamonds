import React from 'react';

const s = {
    title:{
        fontSize:'45px',
        color:'#d21145',
        fontFamily:'sans-serif',
        marginTop: '30px',
        fontWeight:'700'
    },
    linkBar:{
        display:'flex',
        justifyContent:'center',
        marginTop:'20px',
        marginBottom:'35px',
    },
    linkItem:{
        padding:'10px',
        fontSize:'17px',
        color:'darkgray'
    }
};

export default function Header(){
    return(
        <div >
            <div style={s.title}>RAPAPORT</div>
            <div style={s.linkBar}>
                <div style={s.linkItem}>Auctions</div>
                <div style={s.linkItem}>Store</div>
                <div style={s.linkItem}>rapnet.com</div>
            </div>
        </div>
    )
};