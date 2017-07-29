import React from 'react';
import {connect} from 'react-redux';

const s = {
    bar:{
        backgroundColor:'#f9f9f9',
        height:'140px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        // borderTop:'solid #e6e6e6 1px'
    },
    statBox:{
        height:'80%',
        width:'280px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        fontWeight:'400',
        color:'gray'
        // backgroundColor:'yellow',
        // marginLeft:'20px',
        // marginRight:'20px',
    },
    stat:{
        fontSize:'50px',
        color:'#d21145',
        // marginBottom:'4px',
        fontFamily: 'Cutive Mono',
        fontWeight:'400'
    }
};
// average price, number of diamonds, average discount

class StatsBar extends React.Component{
    componentWillMount(){
        console.log(this.props.diamondsList);
        this.calcStats();
    }
    calcStats(){
        const dList = this.props.diamondsList[0];
        console.log(dList);
        let priceSum = 0;
        let discountSum = 0;
        dList.map((d,key)=>{
            priceSum+=parseInt(d.price,);
            discountSum+=(parseInt(d.listPrice)-parseInt(d.price));
            return null
        });
        return {avgPrice:priceSum/dList.length,avgDiscount:discountSum/dList.length, numDiamonds:dList.length}
    }
    render(){
        const stats = this.calcStats();
        return(
            <div style={s.bar}>
                <div style={{...s.statBox, borderRight:'solid #e6e6e6 1px'}}>
                    <span style={s.stat}>{stats.numDiamonds}</span>
                    <br/>
                    Diamonds Online
                </div>
                <div style={s.statBox}>
                    <span style={s.stat}>${Math.round(stats.avgPrice)}</span>
                    <br/>
                    Average Price</div>
                <div style={{...s.statBox, borderLeft:'solid #e6e6e6 1px',}}>
                    <span style={s.stat}>${Math.round(stats.avgDiscount)}</span>
                    <br/>
                    Average Discount</div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state);
    return { diamondsList:state.diamondsList };
}

export default connect(mapStateToProps)(StatsBar)