import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import UserInput from './User-input';
import GuessInfo from './Guess-info';
import HotColdOuput from './HotColdOutput.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessCount: 0,
      guess: [],
      randomNumber: this.chooseRandomNumber(),
    };
    this.setGuessState = this.setGuessState.bind(this);
  };

  chooseRandomNumber() {
    return Math.floor(Math.random() * 101)
  }

  setGuessState(guessInfo) {
    this.setState({
      guessCount: this.state.guessCount + 1,
      guess: [...this.state.guess, { guessInfo }]
    })
  };

  startNewGame() {
    this.setState({
      guess: [],
      guessCount: 0,
      randomNumber: this.chooseRandomNumber(),
    });
  }

  render() {
    const guessList = this.state.guess.map((item, index) => {
      return <GuessInfo key={index} {...item} />
    });

    const lastGuessIndex = () => {
      return this.state.guess.length - 1;
    }

    return (
      <div className='game-container'>
        <div>
          <Button type={'button'} onClick={() => this.startNewGame()} value={'New-Game'} />
        </div>
        <div>
          <h2>Hot or Cold</h2>
        </div>
        <div>
          <HotColdOuput {...this.state.guess[lastGuessIndex()]} random={this.state.randomNumber} />
        </div>
        <div>
          <UserInput getInputFromChild={this.setGuessState} buttonValue={'Submit Guess'} />
        </div>
        <div>
          <p>You have guessed:</p>
          <GuessInfo guessInfo={this.state.guessCount} />
        </div>
        <div>
          <p>Previous guesses</p>
          {guessList}
        </div>
      </div>
    );
  }
}

export default App;
