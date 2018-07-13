import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }

    this.incHyvat = this.incHyvat.bind(this)
    this.incNeutraalit = this.incNeutraalit.bind(this)
    this.incHuonot = this.incHuonot.bind(this)
  }

  incHyvat() {
    this.setState({hyva: this.state.hyva + 1})
  }

  incNeutraalit() {
    this.setState({neutraali: this.state.neutraali + 1})   
  }
  incHuonot() {
    this.setState({huono: this.state.huono + 1})   
  }
  
 
  render() {
    const DisplayTila = () => {
      return (
      <div>
        <h1>statistiikka</h1>
        
        <div>hyvä {this.state.hyva}</div>
        <div>neutraali {this.state.neutraali}</div>
        <div>huono {this.state.huono}</div>
        
      </div>
      )
    } 
  
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <button onClick={this.incHyvat}>
            hyva
          </button>
          <button onClick={this.incNeutraalit}>
            neutraali
          </button>
          <button onClick={this.incHuonot}>
            huono
          </button>
        </div>
        <DisplayTila />
      </div>  
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)