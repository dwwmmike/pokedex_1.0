import React, {Component} from 'react';
import PostData from './sources/data/List.json';

class PostList extends Component {
  render(){
    return(
      <>
      <div className="row">
        {PostData.map((postDetail, index)=>{
          return(
            <div className="col">
            <div className="card">
            <div className="card-body">
            <img src={postDetail.photo} className="card-img-top" alt="Image de Pokemon"/>
              <h5 className="card-title">{postDetail.nom}</h5>
              <p className="card-text">{postDetail.desc}</p>
              <hr/>
              <p>Types: {postDetail.type}</p>
              <p>Faiblesses: {postDetail.faiblesses}</p>
              <a href="#" className="btn btn-primary">Ajouter</a>
            </div>
            </div>
          </div>
          )
        }
        )
        }
      </div>
      </>
    )
  }
}

export default PostList;
