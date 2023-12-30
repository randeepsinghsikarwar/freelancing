import React from 'react';

 function Listing(props) {
    const getColor = () => {
        return props.rating > 3.5 ? 'green' : 'red';
    };

    const starStyle = {
        color: getColor(),
    };

    return (
        <div className="Listing">
            <img src={props.pic} alt="" width="120" />
            <h2>{props.country}</h2>
            <p>{props.location}</p>
            <p>
                <span style={starStyle}>{props.rating}&#9733;</span>
            </p>
            <p>{props.price}/night</p>
        </div>
    );
}

export default Listing;