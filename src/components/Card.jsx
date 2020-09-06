import React from 'react'


function Card(props) {
    return (
        <div class="card border-primary ">
            <div class="card-header" >
                <div className="card-icon" style={{transform: "scale(1.8)",}}>
                {props.header}
                </div>       
            </div>
            <div class="card-body text-primary">
                <h5 class="card-title" >{props.title}</h5>
                <p class="card-text" style={{color: "black",}}>{props.content}</p>
            </div>
        </div>
    )
}

export default Card
