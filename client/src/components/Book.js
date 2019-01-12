import React from "react";


function Book(props) {
    return(
        <div className="book mx-auto">
            <img className="img-fluid" src={props.thumbnail} alt="Book Jacket" />
            <h2>{props.title}</h2>
            <p>{props.synopsis}</p>
            <button type="button" className="btn btn-success" onClick={() => props.button1Function}>{props.button1Text}</button>
            <button type="button" className="btn btn-success" onClick={() => props.button2Function}>{props.button2Text}</button>
        </div>
    )
}

export default Book;