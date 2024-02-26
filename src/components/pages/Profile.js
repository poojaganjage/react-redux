import React, {Component} from "react";
export default class Profile extends Component {
    render() {
        return(
            <div>
                <h1>Profile Page: {this.props.name}</h1>
            </div>
        );
    }
}