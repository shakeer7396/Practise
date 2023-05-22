import React, {Component} from 'react';

export class NewsItem extends Component {
    render(){
      let {title,discription,imageUrl}=this.props;
        return(
            <div>
               <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href="/newsdetails" className="btn btn-primary">Read more</a>
  </div>
</div>

            </div>
        )
    }
}

export default NewsItem;
