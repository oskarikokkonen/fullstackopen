const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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
      <Part part={c.parts[0]} />
      <Part part={c.parts[1]} />
      <Part part={c.parts[2]} />
    </div>
  )
}

const Total = (c) => {
  let tot = 0
  c.parts.forEach(part => {
    tot += part.exercises
  })

  return (
    <p>
      Number of exercises {tot}
    </p>
  )
}

export default App