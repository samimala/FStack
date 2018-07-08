import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
   return (
       <div>
        <h1>{props.kurssi}</h1>
        </div>
   )
}

const Osa = (props) => {
    return (
      <div>
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
      </div>
    ) 
}

const Sisalto = (props) => {
  return (
    <div>
    <Osa osa={props.osa1} />
    <Osa osa={props.osa2} />
    <Osa osa={props.osa3} />
    </div>
  ) 
}

const Yhteensa = (props) => {
    let yht=0;
    props.tehtavat.forEach((osa) => {
      yht += osa.tehtavia
    })
    return (
        <div>
        <p>yhteensä {yht} tehtävää</p>
        </div>
      )  
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
      <Yhteensa tehtavat={[osa1,osa2,osa3]} />
    </div>
  )
}





ReactDOM.render(
  <App />,
  document.getElementById('root')
)

