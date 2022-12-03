import React from 'react';
import Forms from './components/Form';
import Cardx from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: true,
    isSaveButtonDisabled: true,
  };

  validation = () => {
    const noventa = 90;
    const duzentosedez = 210;
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
    const validatename = cardName.length > 0;
    const validadeImg = cardImage.length > 0;
    const validateDesc = cardDescription.length > 0;
    const validateattr1 = cardAttr1 <= noventa && cardAttr1 >= 0;
    const validateattr2 = cardAttr2 <= noventa && cardAttr2 >= 0;
    const validateattr3 = cardAttr3 <= noventa && cardAttr3 >= 0;
    const value = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const vaidateValue = value <= duzentosedez;
    const bool = (validatename && validadeImg && validateDesc
      && validateattr1 && validateattr2 && validateattr3 && vaidateValue);
    this.setState(({
      isSaveButtonDisabled: !bool,
    }));
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validation);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onSaveButtonClick } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Forms
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Cardx
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
