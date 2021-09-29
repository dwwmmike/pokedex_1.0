import React, {Component} from 'react';


class Search extends Component {
    render(){
      return(
        <>
    <form className="d-flex" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            className="form-control me-2"
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </>
      )
    }
}
    export default Search;