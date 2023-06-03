import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    charactersList: [],
    inputValue: '',
  }

  renderCharacterCount = () => {
    const {charactersList} = this.state

    return (
      <ul className="ul-container">
        {charactersList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-img"
          />
        ) : (
          <>
            {charactersList.map(eachItem => (
              <li key={eachItem.id}>
                <p>{`${eachItem.name} : ${eachItem.name.length}`}</p>
              </li>
            ))}
          </>
        )}
      </ul>
    )
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const {inputValue} = this.state
    const newInputDetails = {
      name: inputValue,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newInputDetails],
      inputValue: '',
    }))
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="main-container">
        <div className="first-container">
          <div className="first-heading-container">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {this.renderCharacterCount()}
        </div>
        <form className="second-container" onSubmit={this.handleSubmit}>
          <h1 className="heading">Character Counter</h1>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              className="input-class"
              onChange={this.updateInputValue}
              placeholder="Enter the Characters here"
            />
            <button
              type="submit"
              className="add-btn"
              //   onClick={this.addInputToList}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CharacterCounter
