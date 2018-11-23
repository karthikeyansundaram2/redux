import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { leagues } from './actions/index';
class App extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
} 
  createitem(){
     return this.props.league.map((league)=>{
       return(
         <li key={league.id}
         onClick={() => this.props.leagues(league)}> 
         {league.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         winning amount:{league.winning_amount}<hr/></li>
       );
     });
  }
  render() {
    return (
     <h2> League <ul>
        {this.createitem()}
       </ul><hr/> <br></br>League Details</h2>
    );
  }
}
function matchDispatchToProps(dispatch){

  return bindActionCreators({leagues:leagues},dispatch)
}
function mapStateToProps(state){
    return {
      league:state.league
    }
}
export default connect(mapStateToProps,matchDispatchToProps)(App);
