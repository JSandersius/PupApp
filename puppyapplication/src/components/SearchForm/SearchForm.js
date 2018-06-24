import React from "react";
import "./SearchForm.css";

const SearchForm = props =>
    <form className="search">
        <div className="form-group">
            <label htmlFor="breed">Breed Name:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="breed"
                type="text"
                className="form-control;
                placeholder="Type in a dog breed to begin"
                id="breed"
            />
        </div>

    </form>

export default Search;