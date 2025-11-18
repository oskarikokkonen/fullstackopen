const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total one={part1} two={part2} three={part3} />
    </div>
  )
}

const Header = (c) => {
  return (
    <h1>
      {c.course}
    </h1>
  )
}

const Part = (p) => {
  return (
    <p>
      {p.part.name} {p.part.exercises}
    </p>
  )
}

const Content = (c) => {
  return (
    <div>
      <Part part={c.part1} />
      <Part part={c.part2} />
      <Part part={c.part3} />
    </div>
  )
}

const Total = (c) => {
  return (
    <p>
      Number of exercises {c.one.exercises + c.two.exercises + c.three.exercises}
    </p>
  )
}

export default App