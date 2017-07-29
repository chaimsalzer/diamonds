import React from 'react';
import {connect} from 'react-redux'
import DiamondCard from '../components/DiamondCard'
import {Button} from '../components/Button';


const s = {
    outer:{
        display:'flex',
        justifyContent:'center',
        // backgroundColor:'gray'
    },
    inner:{
        display:'flex',
        backgroundColor:'white',
        flexWrap:'wrap',
        justifyContent:'center',
        maxWidth:"1300px",
        marginTop:'50px'
    },
    filler:{
        width:'300px',
    }
};

class DiamondGrid extends React.Component{

    renderDiamondsList(){
        const dList = this.props.diamondsList[0];

        // the cool && condition :)
        return dList && dList.map(d=>{
            return(
                <div key={d.listPrice+d.clarity}>
                    <DiamondCard price={d.price} color={d.color} shape={d.shape} clarity={d.clarity} listPrice={d.listPrice} size={d.size}/>
                </div>
            )
        });
    }
    render(){
        return(
            <div style={s.outer}>
                <div style={s.inner}>
                    {this.renderDiamondsList()}
                    <div style={{...s.filler,display:'flex',justifyContent:'center',marginTop:'80px'}}>
                        <Button onClick={this.props.onClick}/>
                    </div>
                    <div style={s.filler}></div>
                    <div style={s.filler}></div>
                    <div style={s.filler}></div>

                </div>
        </div>)
    }

}

function mapStateToProps(state) {
    // console.log(state.diamondsList);
    return { diamondsList:state.diamondsList };
}

export default connect(mapStateToProps)(DiamondGrid)