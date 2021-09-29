import React from 'react';

const Search = (props)=> {
    const {recup, requete, req} = props;
      return(
        <>
    <form className="d-flex" onSubmit={(e)=>{e.preventDefault();requete()}}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            className="form-control me-2"
            type="text" onChange={recup}  value={req} className="form-control" placeholder="Search"
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </>
      )
    }
export default Search;