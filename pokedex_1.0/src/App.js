import React, {Component} from 'react';
import './App.css';
import Images from './Images';
import PostList from './PostList';

class App extends Component {
  render(){
    return (
      <>
      {/* <div className="row">
        <div className="col-sm-6">
        <div className="card">
        <Images/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
      </div> */}
      <PostList/>
      </>
    );
  }
}
export default App;
