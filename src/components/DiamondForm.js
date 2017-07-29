import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'

const s = {
    background:{
        width:'100%',
        position:'fixed',
        zIndex:'100',
        top:'15vh',
        display:'flex',
        justifyContent:'center'
    },
    form:{
        width:'420px',
        backgroundColor:'#FFFFFF',
        padding:'50px',
        border:'solid'

    },
    formDiv:{
        margin:'10px',
        display:'flex',
        justifyContent:'space-between'

    },
    label:{
        width:'50%',
        textAlign:'left'
    },
    inputText:{
        borderRadius:'3px',
        border:'solid 1px lightgray',
        padding:'7px'
    },
    radioGroup:{
      display:'flex',
        flexWrap:'wrap',
        width:'48%'
    },
    radioButton:{
        width:'20px'
    },
    button:{
        backgroundColor:'#d21145',
        border:'none',
        borderRadius:'2px',
        padding:'10px 20px 10px 20px',
        fontSize:'14px',
        color:'#FFFFFF',
        fontFamily: 'Cutive Mono'

    },
    closeBtn:{
        position:'relative',
        right:'-520px',
        top:'10px',
        color:'gray',
        cursor:'default'
    }
};

let DiamondForm = (props) => {



    return (
    <div style={s.background}>
        <div style={s.closeBtn} onClick={props.closeForm}>[close]</div>


        <form style={s.form} onSubmit={props.handleSubmit} >
            <div style={s.formDiv}>
                <label style={s.label} htmlFor="color">Color </label>
                <Field style={s.inputText} name="color" component="input" type="text"  maxLength="1" pattern="[A-Za-z]{1}" required/>
            </div>

            <div style={s.formDiv}>
                <label style={s.label} htmlFor="size">Size</label>
                <Field  style={s.inputText} name="size" component="input" type="number" required/>
            </div>
            <div style={s.formDiv}>
                <label style={s.label} htmlFor="clarity">Clarity</label>
                <Field style={s.inputText} name="clarity" component="input" type="text" maxLength="1" required/>
            </div>
            <div style={s.formDiv}>
                <label style={s.label} htmlFor="listPrice">List Price</label>
                <Field style={s.inputText} name="listPrice" component="input" type="number" required/>
            </div>
            <div style={s.formDiv}>
                <label style={s.label} htmlFor="price">Price</label>
                <Field  style={s.inputText} name="price" component="input" type="number"required />
            </div>
            <div style={s.formDiv}>

                <label style={s.label}>Shape</label>
                <div style={s.radioGroup}>
                    <div>
                        <Field style={s.radioButton} name="shape" component="input" type="radio" value="round" required/>Round
                        <Field style={s.radioButton} name="shape" component="input" type="radio" value="square" />Square

                    </div>
                    <div>
                        <Field style={s.radioButton} name="shape" component="input" type="radio" value="heart" />Heart
                        <Field style={s.radioButton} name="shape" component="input" type="radio" value="emerald" />Emerald

                    </div>
                    <div>
                        <Field style={s.radioButton} name="shape" component="input" type="radio" value="princess" />Princess</div>
                </div>
            </div>
            <br/>
            <button style={s.button} type="submit">Submit</button>
        </form>
    </div>

    )
};


DiamondForm = reduxForm({
    // a unique name for the form
    form: 'addDiamond'
})(DiamondForm);

function mapStateToProps(state) {
    return { diamondsList:state.diamondsList };
}

export default connect(mapStateToProps)(DiamondForm);