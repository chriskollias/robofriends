import React from 'react';

// can destructure props directly in the params
const Card = ({id, name, email}) => {
    // can destructure props inside the function like this too (imagine if the only param was just "props")
    // const { id, name, email } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="monster"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;