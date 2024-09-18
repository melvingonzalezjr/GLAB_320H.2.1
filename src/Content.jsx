import React from "react";

function Content(props) {
    return (
        <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt="school_logo" />
        </div>
        <div className="bottom">
          <p className="info">{props.desc}</p>
          <p className="info">{props.completion}</p>
        </div>
      </div>
    );
}

export default Content;