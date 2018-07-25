import React from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({text,value, posttext}) =>  {
  return (
    <React.Fragment>
      <td> {text} </td> 
      <td> {value} {posttext} </td>
     </React.Fragment>
  )
}

const Statistics = ({hyvat,huonot,neutraalit}) =>  {
  let maara = hyvat + neutraalit + huonot
  let keskiarvo = (hyvat-huonot)/maara
  let positiiviset = hyvat*100/maara
  if (maara===0) {
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
      <table>
        <tbody>
          <tr>
          <Statistic text="hyvä" value={hyvat} />
          </tr>
          <tr>
          <Statistic text="neutraali" value={neutraalit} />
          </tr>
          <tr>
          <Statistic text="huono" value={huonot} />
          </tr>
          <tr>
          <Statistic text="keskiarvo" value={keskiarvo.toFixed(1)} />
          </tr>
          <tr>
           <Statistic text="positiivisia" value={positiiviset.toFixed(1)} posttext="%"/>
          </tr>
        </tbody>
      </table>
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

    //this.incCounter = this.incCounter.bind(this)
  }

  incCounter = (field) => {
    return () => {
      this.setState({[field]: this.state[field] + 1})
    }
  }
 
  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button
          handleClick={this.incCounter('hyva')}
          text="hyva"
        />
        <Button
          handleClick={this.incCounter('neutraali')}
          text="neutraali"
        />
        <Button
          handleClick={this.incCounter('huono')}
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