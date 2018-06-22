import React, { Component } from "react";
import Card from "../components/Card";
import API from "../utils/API.js";

class Discover extends Component {
    state = {
        image: "",
        matchCount: 0
    };

    //when the component mounts, load the next dog to be displayed
    //runs as soon as this Discover component has mounted
    componentDidMount() {
        this.loadNextDog();
    }

    handleBtnClick = event => {
        //Get the data value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;

        console.log(btnType);
    };

    loadNextDog = () => {
        API.getRandomDog()
            .then(res =>
                this.setState({
                    image: res.data.message
                })
            )
            .catch(err => console.log(err));

    };

    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">
                    Thumbs up on any pups you'd like to meet!
                    </h3>
                <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
                <h1 className="text-center">
                    Made friends with {this.state.matchCount} pups so far!
                        </h1>
            </div>

        );
    }
}

export default Discover;

