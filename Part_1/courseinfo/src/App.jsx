const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Part name = {part1} exercises = {exercises1}/>
      <Part name = {part2} exercises = {exercises2}/>
      <Part name = {part3} exercises = {exercises3}/>
    </>
  )
}

const Part = ({name, exercises}) => {
  return(
    <>
      <p> {name} {exercises}</p>
    </>
  )
}

const Header = (props) => {
  return(
    <>
      <p> {props.course} </p>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <p> {props.part1} {props.exercises1} </p>
      <p> {props.part2} {props.exercises2} </p>
      <p> {props.part3} {props.exercises3} </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

export default App