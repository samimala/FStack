import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: new Array(anecdotes.length)   
    }
    
    for (let i=0; i<anecdotes.length; i++) this.state.pisteet[i] = 0
  }

  addVote() {
    let uudetPisteet = this.state.pisteet
    uudetPisteet[this.state.selected]++;
    this.setState({pisteet: uudetPisteet})
  }

  pickMostVoted() {
    let maxIdx = 0;
    let maxValue = 0;
    this.state.pisteet.forEach((value, idx)  => {
      if (value>maxValue) {
        maxValue = value;
        maxIdx = idx;
      }
    })
    return maxIdx
  }

  render() {
    let maxIdx = this.pickMostVoted();

    return (
      <div>
        <div>{this.props.anecdotes[this.state.selected]}</div>
        <div>has {this.state.pisteet[this.state.selected]} votes</div>
          <div>
              <button onClick={()=>this.addVote()}>vote</button>
              <button onClick={()=>this.setState({selected: getNextIdx()})}>next anecdote</button>
          </div>
          <h2>anecdote with most votes:</h2>
          <div>{this.props.anecdotes[maxIdx]}</div>
          <div>has {this.state.pisteet[maxIdx]} votes</div>
      </div>
    )
  }
}

 
function getNextIdx()  {
  let val = Math.floor(Math.random()*anecdotes.length)
  return (val)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
