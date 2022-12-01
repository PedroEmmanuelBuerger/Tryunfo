import React, { Component } from 'react';
import '../style/Form.css';

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">
            <input type="text" data-testid="name-input" name="name" id="name" />
          </label>

          <label htmlFor="textarea">
            <input
              type="textarea"
              data-testid="description-input"
              name="textarea"
            />
          </label>

          <label htmlFor="atributo1">
            <input type="number" data-testid="attr1-input" name="atributo1" />
          </label>

          <label htmlFor="atributo2">
            <input type="number" data-testid="attr2-input" name="atributo2" />
          </label>

          <label htmlFor="atributo3">
            <input type="number" data-testid="attr3-input" name="atributo3" />
          </label>

          <label htmlFor="imagem">
            <input type="text" data-testid="image-input" name="imagem" />
          </label>

          <label htmlFor="select">
            <select data-testid="rare-input" name="select">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input type="checkbox" data-testid="trunfo-input" name="checkbox" />
          </label>

          <label htmlFor="button">
            <input type="button" data-testid="save-button" name="button" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
