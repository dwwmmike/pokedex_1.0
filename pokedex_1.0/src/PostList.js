import React, {Component} from 'react';
import PostData from './sources/data/List.json';

class PostList extends Component {
  getType = (type) => { 
  var pill;
  switch (type) {
    case 'Feu':
      pill="bg-danger";
      break;
    case 'Eau':
      pill="bg-primary";
      break;
    case 'Plante':
      pill="bg-success";
      break;
    default:
      pill="bg-warning";;
  }
    return pill;
  }

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
            <h5 className="card-title">N°{postDetail.id}</h5>
              <h4 className="card-title">{postDetail.nom}</h4>
              <p className="card-text">{postDetail.desc}</p>
              <hr/>
              Type: {postDetail.type.map((type,i)=>{
                var pill = this.getType(type);
                return(
                <span className={"badge rounded-pill "+ pill}> {type}</span>
                )
              })}
              <p>Faiblesses: {postDetail.faiblesses.join(" ")}</p>
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
