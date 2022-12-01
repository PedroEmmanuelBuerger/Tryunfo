import React from 'react';
import Forms from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Forms
          cardName="pedro"
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo=""
          hasTrunfo=""
          isSaveButtonDisabled=""
          onInputChange=""
          onSaveButtonClick=""
        />
      </div>
    );
  }
}

export default App;
