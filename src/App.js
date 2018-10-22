import React, { Component } from 'react';
import  NewQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';


const sampleQuote = {
  quote: "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.",
  character: "Dr. Nick",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:  sampleQuote,
    };
  }

  getQuote() {

    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          quote:  data[0],
        });
    });
}



  render() {
    return (
    <div>
      <NewQuote  getQuote={() =>  this.getQuote()}  />
      <DisplayQuote  quote={this.state.quote}  />
    </div>    
    );
  }
}

export default App;
