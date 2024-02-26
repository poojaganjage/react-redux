import {useEffect} from "react";
import {connect, useSelector, useDispatch} from "react-redux";
import {anotherName, anotherWish, anotherText, anotherFetchData, anotherSubmitData} from "./actions/actionscreators";
{/*import React, {Component} from "react";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";*/}

{/*export default class App extends Component {
  state = {
    name: "Pooja"
  }

  changeName = (name) => {
    this.setState({name: name});
  }

  render() {
    return(
      <div>
        <h1>App Component: {this.state.name}</h1>
        <button onClick={() => {this.changeName("Deepika")}}>App Button</button>
        <Home handlenameChild={(name) => {this.changeName(name)}} />
        <Profile name={this.state.name} />
      </div>
    );
  }
}*/}

function App(props) {
  useEffect(() => {
    props.fetchdata();
  }, []);
  //console.log(props.myfetchdata);

  // const myname = useSelector((state) => {
  //   return state.name
  // });

  // const dispatch = useDispatch();

  const mywishes = props.mywish.map((item) => {
    return item;
  }).join(", ");
  
  // const wish = props.mywish.splice(1, 1, 'Travelling');

  //console.log(props.mysubmitdata);

  return(
    <div className="App">
      <h2>App Componet The name is: {props.myname}</h2>
      <button onClick={() => {props.changeName("Deepika")}}>Change Name</button>
      {/* <h2>App Componet The name is: {myname}</h2>
      <button onClick={() => {dispatch(anotherName("Deepika"))}}>Change Name</button> */}
      <br />
      <h2>My wish is: {mywishes}</h2>
      <button onClick={() => {props.addWish("Travelling")}}>Add Wishes</button>
      <br /><br />
      <form onSubmit={(e) => {props.submitdata(e, props.mytext)}}>
        <h2>Enter Name:</h2><input type="text" value={props.text} onChange={(e) => {props.changeInput(e.target.value)}} />
        <button value="submit">Update the data</button>
      </form>
      {/* <h2>{props.mytext}</h2> */}
      <h2>Fetch Data:</h2>
      <h2>{props.myfetchdata.load}</h2>
      <h2>{props.mysubmitdata}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    mywish: state.wish,
    mytext: state.text,
    myfetchdata: state.fetchdata,
    mysubmitdata: state.submitdata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) =>{dispatch(anotherName(name))},
    addWish: (wish) => {dispatch(anotherWish(wish))},
    changeInput: (input) => {dispatch(anotherText(input))},
    fetchdata: () => {dispatch(anotherFetchData())},
    submitdata: (e, input) => {dispatch(anotherSubmitData(e, input))}
  }
}
//export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
