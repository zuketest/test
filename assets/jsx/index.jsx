import React from 'react'
import ReactDOM from "react-dom";
import { createStore,bindActionCreators,combineReducers,applyMiddleware } from 'redux';
import { Router, Route, Link, browserHistory,hashHistory } from 'react-router';
import { Provider,connect } from 'react-redux';
import CommentList from './parts/CommentList.jsx'
require("babel-polyfill");


console.log(browserHistory);
/*
export const logger = store => next => action => {
  console.log("before: %O", store);
  //next(action);
  console.log("after: %O", next);
};

*/

/* Actionsの実装 */

// Action名の定義
const SEND = 'SEND';
const DEL = 'DEL';
// Action Creators
var t = [];
function send(value) {
  // Action
  t.push(value);
  //console.log(t);
  return {
    type: SEND,
    value:value,
    te:true
  };
}

function del(value) {
  // Action

  
  return {
    type: DEL,
    te: value?false:true
  };
}

function b(value) {
  // Action

  
  return {
    type: SEND,
    value:90
  };
}

const initialState = {
  value: [],
  te: true
};

const initialState2 = {
  value: "test",
  valuse: true
};
/* Reducersの実装 */

function formReducer(state = initialState, action) {

  const { value, te } = state;



  switch (action.type) {
    case 'SEND':
      //console.log(action.value);
      return Object.assign({}, state, {
        value: state.value.concat([action.value]),
        te: action.te,
      });
    case 'DEL':
      return Object.assign({}, state, {
        te: action.te,
      });

    default:
      return state;
  }
}





function formn(state = initialState2, action) {

  //const { value, te } = state;
      
  switch (action.type) {
    case 'E':
      console.log(5758);
      return Object.assign({}, state, {
        value: action.value,
        bn:90000000
      });
    default:
      return state;
  }
}


function formnl(state, action) {

  //const { value, te } = state;
      
  switch (action.type) {
    case 'E':
      console.log(5758);
      return Object.assign({}, state, {
        value: action.value,
        bn:90000000
      });
    default:
      return state;
  }
}


var vb = [];

var as = [...vb,"gfshgf"];



/* Storeの実装 */


const reducer = combineReducers({formReducer,formn});

const store = createStore(reducer,{formn: {processedPhones: []}});

//console.log(reducer(undefined,{type:"E"}));


/* Viwの実装 */

// Veiw (Container Components)
class FormApp extends React.Component {
  render() {
  

    return (
      <div>
        <FormInput bbb={this.props.bbb} handleClick={this.props.onClick} del={this.props.onval} flag={this.props.te}/>
        <FormDisplay data={this.props.value} flag={this.props.te}/>
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

// Veiw (Presentational Components)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  del(e) {
    e.preventDefault();

    this.props.del(this.props.flag);

    return;
  } 


  render() {

    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
        <button onClick={(event) => this.del(event)}>del</button>
        <button onClick={(event) => this.props.bbb(event)}>pure</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};


console.log(FormApp.displayName);

// Veiw (Presentational Components)
class FormDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  stay(){
  
    //this.setState({f:!this.state.f?true:false});

    //console.log(this.props.flag);
  }
  render() {
    let btnstyle = {
      textDecoration: this.props.flag?"none":"line-through"
    };
  
    return (
      <div onClick={this.stay.bind(this)} style={btnstyle}>
      {this.props.data.map(function(e,i){
          return <p key={i}>{e}</p>;
      })}

      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>test</h1>
         <ul>
            <li><Link to="/about">index</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/contact/aboutChild">contact</Link></li>
        </ul>       
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }
}


class About extends React.Component {
  render() {
    return (
      <p>あばうと</p>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <div className="b">
        <p>Contact</p>

        <div>


        </div>
        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>
        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>


        <div>


        </div>
        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>
        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>



        <div>


        </div>
        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>
        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>


         <div>


        </div>
        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>
        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>       




        <div>


        </div>
        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>
        <div>
          <p>dfshths</p>

        </div>

        <div>
          <p>dfshths</p>

        </div>


        <div>
          <p>dfshths</p>

        </div>





        <span>{this.props.children}</span>
      </div>
      
    );
  }
}

class ContactChild extends React.Component {
  render() {
    return (
        <p>ContactChild</p>
    );
  }
}


function mapStateToProps(state) {

  return {
    value: state.formReducer.value,
    te:state.formReducer.te
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick:function(value){dispatch(send(value))},
    onval:(value) => dispatch(del(value)),
    bbb:(value) => dispatch(b(value))
  };
}


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);





// Rendering
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}>
        <Route path="aboutChild" component={ContactChild}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('container')
);

