import React from 'react';

const s = {
    cardOuter:{
        width:'300px',
        height:'300px',
        marginBottom:'30px',
        // backgroundColor:'blue',
        borderRadius:'2px',
        // borderLeft:'solid #e6e6e6 1px',
        borderRight:'solid #e6e6e6 1px',
    },
    imageContainer:{
        // backgroundColor:'green',
        height:'50%',
        margin:'15px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    imageInner:{
        width:'180px'
    },
    image:{
        width:'180px'
    },
    price:{
        fontSize:'30px',
        color:'#575757',
        marginBottom:'4px',
        fontFamily: 'Cutive Mono'

},
    listPrice:{
        fontSize:'14px',
        color:'#f70000',
        wordSpacing:'-5px'
    },
    infoSection:{
        display:'flex',
        // backgroundColor:'red',
        flexDirection:'column',
        margin:'20px'
        // width:'75%'
    },
    infoRow:{
        display:'flex',
        // justifyContent:'space-between'
    },
    rowItem:{
        width:'50%',
        textAlign:'start',
        fontSize:'14px',
        color:'#4e4e4e'
    },





};
// C:\Users\CS\Desktop\projects\reduxDiamonds\src\assets\diamond.png
export default function DiamondCard({price,color,shape,clarity,listPrice,size}) {
    // console.log(window.location);
    return(
        <div style={s.cardOuter}>
            <div style={s.imageContainer}>
                <div style={s.imageInner}>
                    <img style={s.image} alt="diamond" src={require('../assets/diamond.png')}/>
                </div>

            </div>
            <div style={s.price}>${price}</div>
            <div style={s.listPrice}>List Price: ${listPrice}</div>
            <div style={s.infoSection}>
                <div style={s.infoRow}>
                    <div style={s.rowItem}><b>Color</b>: {color}</div>
                    <div style={s.rowItem}><b>Size</b>: {size}</div>
                </div>
                <div style={s.infoRow}>
                    <div style={s.rowItem}><b>Shape</b>:{shape}</div>
                    <div style={s.rowItem}><b>Clarity</b>: {clarity} </div>
                </div>
            </div>
        </div>
    )
}
