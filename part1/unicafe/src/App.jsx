import { useState } from 'react'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
    </button>
)

const StatisticsLine = ({text, value}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td> 
  </tr>
)

const Statistics = ({good, neutral, bad}) => {

    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </div>
      )
    }

    const total = () => {
      return good + neutral + bad
    }

    const average = () => {
      return (good - bad) / total()
    }

    const positive = () => {
      return (good / total()) * 100
    }

    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="all" value={total()}/>
            <StatisticsLine text="average" value={average()}/>
            <StatisticsLine text="positive" value={`${positive()} %`}/>
          </tbody>
        </table>
      </div>
    )
  }


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
