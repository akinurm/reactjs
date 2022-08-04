/*const Header = (props) => {
  return(
<div>
<h1>{props.course}</h1>
</div>)
}

const Content = (props) => {
  return(

<p>
        {props.sis} {props.määrä}
      </p>
)
}
const Total = (props) => {
  return(
<div>
<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
</div>)
}

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
      <Header course ={course}/>
      <Content sis= {part1} määrä={exercises1} />
      <Content sis= {part2} määrä={exercises2} />
      <Content sis= {part3} määrä={exercises3} />
      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}                         1.1

export default App
________________________________________________________________*//*

const Header = (props) => {
  return(
<div>
<h1>{props.course}</h1>
</div>)
}
const Content = (props) => {
  console.log(props);
  return(
  <div>
        <Part part= {props.osio[0]} exerci= {props.exercises[0]}/>
        <Part part= {props.osio[1]} exerci={props.exercises[1]} />
        <Part part= {props.osio[2]} exerci={props.exercises[2]} />
  </div>
)
}
const Part = (props) => {
  return(
    <p>
      <span className="nimi">{props.part}</span> : exercises {props.exerci}
      </p>
)
}

const Total = (props) => {

  return(
<div>
<p>Number of exercises {props.parts}</p>
</div>)

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const osiolista = [part1,part2,part3];
  const osiolista2 = [exercises1,exercises2,exercises3];

  return (
    <div>
      <Header course ={course}/>
      <Content osio ={osiolista} exercises={osiolista2} />
      <Total parts = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
export default App   /*                 1.2
_______________________________________________________________________________
*/
/*
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  console.log(props);
  return(

  <div>
        <Part part= {props.osio[0].name} exercises= {props.osio[3].exercises}/>
        <Part part= {props.osio[1].name} exercises={props.osio[4].exercises} />
        <Part part= {props.osio[2].name} exercises={props.osio[5].exercises} />
  </div>
)
}
const Part = (props) => {

  return(
    

      <p>
      <span className="nimi">{props.part}</span> : exercises {props.exerci}
      </p>
)
}

const Total = (props) => {
  console.log(props);
  return(
<div>
<p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
</div>)

}

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
      <Header course ={course}/>
      <Content osio ={osiolista} exercises={osiolista2} />
      <Total parts = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}
export default App*/
/*___________________________________________________1.3*//*

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  console.log(props);
  return(

  <div>
        <Part part= {props.osio[0].name} exercises= {props.osio[0].exercises}/>
        <Part part= {props.osio[1].name} exercises={props.osio[1].exercises} />
        <Part part= {props.osio[2].name} exercises={props.osio[2].exercises} />
  </div>
)
}
const Part = (props) => {

  return(
    

      <p>
      <span className="nimi">{props.part}</span> : exercises {props.exercises}
      </p>
)
}

const Total = (props) => {
  console.log(props);
  return(
<div>
<p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
</div>)

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  

  return (
    <div>
      <Header course ={course}/>
      <Content osio ={parts} />
      <Total parts = {parts}/>
    </div>
  )
}
export default App
/*
________________________________________________1.4*//*


const Header = (props) => {
  console.log(props)
  return <h1>{props.kurssi}</h1>
}
const Content = (props) => {
  console.log(props);
  return(

  <div>
        <Part part= {props.osio[0].name} exercises= {props.osio[0].exercises}/>
        <Part part= {props.osio[1].name} exercises={props.osio[1].exercises} />
        <Part part= {props.osio[2].name} exercises={props.osio[2].exercises} />
  </div>
)
}
const Part = (props) => {

  return(
    

      <p>
      <span className="nimi">{props.part}</span> : exercises {props.exercises}
      </p>
)
}

const Total = (props) => {
  console.log(props);
  return(
<div>
<p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
</div>)

}


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
      <Header kurssi ={course.name}/>
      <Content osio ={course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}
export default App
_____________________________________1.5___________________*/
//1.6-1.9/*
/*import { useState } from 'react'

const Statistics = (props) => {
  
  
  <button onClick={props.good}>
  
</button>

  if(props.good===0&props.neutral===0&props.bad===0){
    return (<div><h1>No Data</h1></div>)
  }
  return(
    
  <div>
  <h1>Statistiikkaa</h1>
  <p>good{props.good}</p>
  <p>neutral{props.neutral}</p>
  <p>bad{props.bad}</p>
  <p>tulos{props.good + props.neutral + props.bad}</p>
  <p>keskiarvo{((props.good*1) +(props.neutral*0) - props.bad) / (props.good + props.neutral+ props.bad)}</p>
  <p>positiivisia {((props.good*1)) / (props.good + props.neutral+ props.bad)*100} %</p>

  </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>palaute</h1>
      <button onClick={() => setGood(good + 1)}>
      good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
      neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
      bad
      </button>
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
____________________________________________1.9*/
import { useState } from 'react'

const Statistics = (props) => {
  
  
  <button onClick={props.good}>
  
</button>

  if(props.good===0&props.neutral===0&props.bad===0){
    return (<div><h1>No Data</h1></div>)
  }
  return(
    
  <div>
  <h1>Statistiikkaa</h1>
  <p>good{props.good}</p>
  <p>neutral{props.neutral}</p>
  <p>bad{props.bad}</p>
  <p>tulos{props.good + props.neutral + props.bad}</p>
  <p>keskiarvo{((props.good*1) +(props.neutral*0) - props.bad) / (props.good + props.neutral+ props.bad)}</p>
  <p>positiivisia {((props.good*1)) / (props.good + props.neutral+ props.bad)*100} %</p>
  <div>
        <StatisticLine text= "good" value= {props.good}/>
        <StatisticLine text= "neutral" value={props.neutral} />
        <StatisticLine text= "bad" value={props.bad} />
        <StatisticLine text= "tulos" value={props.good + props.neutral + props.bad} />
        <StatisticLine text= "keskiarvo" value={((props.good*1) +(props.neutral*0) - props.bad) / (props.good + props.neutral+ props.bad)} />
        <StatisticLine text= "positiivisia" value={((props.good*1)) / (props.good + props.neutral+ props.bad)*100} />
  </div>

  </div>
  )
}
const StatisticLine = (props) => {

  return(
    
<div>
<p>
      <span className="nimi">{props.text} {props.value}</span>
      </p>

</div>
)
}

 const Button = (props) => {
  return(
    <div>
  <button onClick={() => props.setGood(props.good + 1)}>
  good
  </button>
  <button onClick={() => props.setNeutral(props.neutral + 1)}>
  neutral
  </button>
  <button onClick={() => props.setBad(props.bad + 1)}>
  bad
  </button>
  </div>
)
 }

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>Palaute</h1>
      <Button setGood= {setGood} setNeutral={setNeutral} setBad={setBad} good = {good} neutral={neutral} bad={bad}/>
      <Statistics good = {good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App