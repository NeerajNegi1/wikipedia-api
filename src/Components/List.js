import React from 'react'
import './List.css'

function List({ id, title, description }) {

    const regex = /(<([^>]+)>)/ig;
    const result = description.replace(regex, '');


    return (
        <div className="list_container" key={id}>
            <div style={{margin:"10px"}}>
                <h3 style={{ marginBottom: "0px" }}>{title}</h3>
                <p>{result}</p>
            </div>
            <div className='btn'>
                <a href={`http://en.wikipedia.org/?curid=${id}`}>Read More</a>
            </div>
        </div>
    )
}

export default List
