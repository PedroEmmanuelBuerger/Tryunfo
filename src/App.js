import React from 'react';
import Forms from './components/Form';
import Cardx from './components/Card';
import CreateSavedCards from './components/CreateSavedCards';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  validation = () => {
    const noventa = 90;
    const duzentosedez = 210;
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage } = this.state;
    const validatename = cardName.length > 0;
    const validadeImg = cardImage.length > 0;
    const validateDesc = cardDescription.length > 0;
    const validateattr1 = Number(cardAttr1) <= noventa && Number(cardAttr1) >= 0;
    const validateattr2 = Number(cardAttr2) <= noventa && Number(cardAttr2) >= 0;
    const validateattr3 = Number(cardAttr3) <= noventa && Number(cardAttr3) >= 0;
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

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState(({
        hasTrunfo: true,
      }));
    }
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((prev) => ({
      savedCards: [...prev.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  buttonDel = ({ target }) => {
    const { savedCards, hasTrunfo } = this.state;
    const { id } = target;
    const result = savedCards.filter((elements) => elements.cardName !== id);
    const card = savedCards.filter((elements) => elements.cardName === id);
    this.setState(() => ({
      savedCards: result,
    }));
    if (hasTrunfo && card[0].cardTrunfo === true) {
      this.setState(() => ({
        hasTrunfo: false,
      }));
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, savedCards } = this.state;
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
          onSaveButtonClick={ this.onSaveButtonClick }
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
        />
        <section>
          <CreateSavedCards savedCards={ savedCards } buttonDel={ this.buttonDel } />
        </section>
      </div>
    );
  }
}

export default App;
