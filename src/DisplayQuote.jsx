import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div >
            <img  src={quote.image}  alt=""  />
            <h3>{quote.character}</h3>
            <h4>{quote.quote}</h4>
        </div>
    );
};

export  default  DisplayQuote;