import  React  from  'react';

const  NewQuote = ({ getQuote }) => {
    return (
        <div>
        <button  onClick={getQuote}>Next Quote</button>
        </div>
    );
};

export  default  NewQuote;