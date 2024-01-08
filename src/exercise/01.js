// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const Greeting = ({initialName = ''}) => {
  // create state for name
  const [name, setName] = React.useState(initialName);
  // setName(initialName)

  // React.useEffect(()=>{
  //   setName(initialName)
  // }, [])

  const handleNameChange = (e) => {
    // console.log(e.target.value)
    const name = e.target.value
    setName(name)
  }

  return(
    <div>
      <form>
        <label>Name:</label>
        <input value={name} onChange={handleNameChange}></input>
      </form>
      {name ? <strong>Hello, {name}</strong> : 'Type your name'}
    </div>
  )
}

function App() {
  return <Greeting/>
}

export default App


