import React from 'react';
import PropTypes from 'prop-types';
import Cardx from './Card';

class CreateSavedCards extends React.Component {
  render() {
    const { savedCards } = this.props;
    return (
      savedCards.map((element, index) => {
        const { cardAttr1, cardAttr2, cardAttr3, cardDescription,
          cardImage, cardName, cardRare, cardTrunfo } = element;
        const result = (
          <section key={ index }>
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
};

export default CreateSavedCards;
