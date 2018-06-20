import React, { Component } from "react";

class Discover extends Component {
    state = {
        image: "",
        matchCount: 0
    };

    render() {
        return (
            <div>
                <h1 className="text-center">Make New Friends</h1>
                <h3 className="text-center">
                    Thumbs up on any pups you'd like to meet!
                    </h3>
                <h1 className="text-center">
                    Made friends with {this.state.matchCount} pups so far!
                        </h1>
            </div>

        );
    }
}

export default Discover;

