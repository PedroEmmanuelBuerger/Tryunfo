import React, { Component } from 'react';
import '../style/Form.css';
import PropTypes from 'prop-types';

export class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              data-testid="name-input"
              name="name"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="textarea">
            <textarea
              data-testid="description-input"
              name="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo1">
            <input
              type="number"
              data-testid="attr1-input"
              name="atributo1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo2">
            <input
              type="number"
              data-testid="attr2-input"
              name="atributo2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="atributo3">
            <input
              type="number"
              data-testid="attr3-input"
              name="atributo3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="imagem">
            <input
              type="text"
              data-testid="image-input"
              name="imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="select">
            <select
              data-testid="rare-input"
              name="select"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.defaultProps = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};
export default Form;
