const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercises1} 
               part2={part2} exercise2={exercises2} 
               part3={part3} exercise3={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  )
}

const Header = (c) => {
  return (
    <p>
      {c.course}
    </p>
  )
}

const Part = (c) => {
  return (
    <p>
      {c.part} {c.exercise}
    </p>
  )
}

const Content = (c) => {
  return (
    <div>
      <Part part={c.part1} exercise={c.exercise1} />
      <Part part={c.part2} exercise={c.exercise2} />
      <Part part={c.part3} exercise={c.exercise3} />
    </div>
  )
}

const Total = (c) => {
  return (
    <p>
      Number of exercises {c.one + c.two + c.three}
    </p>
  )
}

export default App