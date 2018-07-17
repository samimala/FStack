import React from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text,value, posttext}) =>  {
  return (
    <div>
      {text}: {value} {posttext}
    </div>
  )
}

const Statistics = ({hyvat,huonot,neutraalit}) =>  {
  let maara = hyvat + neutraalit + huonot
  let keskiarvo = (hyvat-huonot)/maara
  let positiiviset = hyvat*100/maara
  if (maara==0) {
    return(
      <div>
        <h1>stataistiikka</h1>
        <div>ei yhtään palautetta annnettu</div>
      </div>
    )
  }
  return (
    <div>
      <h1>statistiikka</h1>
      <Statistic text="hyvä" value={hyvat} />
      <Statistic text="neutraali" value={neutraalit} />
      <Statistic text="huono" value={huonot} />
      <Statistic text="keskiarvo" value={keskiarvo.toFixed(1)} />
      <Statistic text="positiivisia" value={positiiviset.toFixed(1)} posttext="%"/>
    </div>
  )
}


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
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button
          handleClick={this.incHyvat}
          text="hyva"
        />
        <Button
          handleClick={this.incNeutraalit}
          text="neutraali"
        />
        <Button
          handleClick={this.incHuonot}
          text="huono"
        />

        <Statistics 
          hyvat={this.state.hyva}
          huonot={this.state.huono}      
          neutraalit={this.state.neutraali}
        /> 
      </div>  
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)