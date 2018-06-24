import React, { Component } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        breeds: [],
        results: []
    };

    handleInputChange = event => {
        this.state({})
    }

}

render() {
    return (
        <Container style={{ minHeight: "80%" }} >
            <h1 className="text-center">Search By Breed!</h1>
            <SearchForm />
            <SearchResults />
        </ Container>
    );
}
}

export default Search;

