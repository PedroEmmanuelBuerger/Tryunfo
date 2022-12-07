import React from 'react';
import PropTypes from 'prop-types';
import Cardx from './Card';

class CreateSavedCards extends React.Component {
  render() {
    const { savedCards, buttonDel, filtered, rare } = this.props;
    return (
      savedCards
        .filter((card) => card.cardName.includes(filtered))
        .filter((card) => card.cardRare.startsWith(rare))
        .map((element) => {
          const { cardAttr1, cardAttr2, cardAttr3, cardDescription,
            cardImage, cardName, cardRare, cardTrunfo } = element;
          const result = (
            <section key={ cardName }>
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
              <button
                id={ cardName }
                type="button"
                onClick={ buttonDel }
                data-testid="delete-button"
              >
                Excluir
              </button>
            </section>

          );
          return result;
        })
    );
  }
}

CreateSavedCards.propTypes = {
  savedCards: PropTypes.arrayOf(PropTypes.shape({
    cardname: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    hasTrunfo: PropTypes.bool,
  })).isRequired,
  buttonDel: PropTypes.func.isRequired,
  filtered: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
};

export default CreateSavedCards;
