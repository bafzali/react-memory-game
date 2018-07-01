import React from 'react';
import './ImageCard.css';

const ImageCard = props => (

  <span onClick={() => props.checkClicked(props.id)} className="image">
    <div className="card">
      <div className="img-thumbnail img-responsive">
        <img alt={props.alt} src={props.image} id={props.id} />
      </div>
    </div>
  </span>
);

export default ImageCard;
