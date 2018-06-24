import React, { Component } from "react";

class Search extends Component {
    state = {
        search: "",
        breeds: [],
        results: []
    };

    render() {
        return (
            <Container style=({ minHeight: "80%" }) >
                <h1 className="text-center">Search By Breed!</h1>
                <SearchForm />
                <SearchResults /> 
            </ Container>
                );
    }
}

export default Search;

