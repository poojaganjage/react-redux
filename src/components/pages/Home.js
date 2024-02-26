import React, {Component} from "react";
export default class Home extends Component {
    state = {
        homename: "Deepika"
    }

    render() {
        return(
            <div>
                <h1>Home Page</h1>
                <button onClick={() => {
                    this.props.handlenameChild(this.state.homename);
                }}>Change Name</button>
            </div>
        );
    }
}