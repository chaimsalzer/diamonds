import React, { Component } from 'react';
import './App.css';
import {getDiamonds,postDiamond} from './actions/index'
import DiamondGrid from './components/DiamondGrid'
import Header from './components/Header'
import StatsBar from './components/StatsBar'
import {connect} from 'react-redux';
import DiamondForm from './components/DiamondForm'
import { Notification } from 'react-notification';

class App extends Component {
  constructor(props){
      super(props);
      // this.toggleForm = this.toggleForm.bind(this);
      this.props.getDiamonds();
      this.state={formShow:false,successShow:false,moduleOpacity:0};
  }

  toggleForm(){
      this.setState({formShow: !this.state.formShow});
      console.log('toggling')

  }
  submit(values) {
        this.props.postDiamond(values);
        console.log(values);
        this.toggleForm();
        setTimeout(()=>this.setState({successShow:true}),2000);



  }
  render() {
    return (
      <div className="App">

          <Notification
              isActive={this.state.successShow}
              message="Diamond saved successfully"
              onDismiss={() => this.setState({ successShow: false })}
              dismissAfter={5000}
              activeBarStyle={{backgroundColor:'#d21145'}}
          />

          <Header/>
          <StatsBar/>
          <DiamondGrid onClick={()=>this.toggleForm()}/>
          {this.state.formShow && <DiamondForm closeForm={()=>this.toggleForm()} onSubmit={this.submit.bind(this)}/>}
      </div>
    );
  }
}
export default connect(null,{getDiamonds,postDiamond})(App)
