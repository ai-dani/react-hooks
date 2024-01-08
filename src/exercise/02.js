// Custom Hook: function that uses hooks (built in or custom)
// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// ^ dependency list is needed to avoid unnecessary re-rendering
// Hey, React, I don't care about re-renders or anything like that. 
// All I care about is, if the name changes, then that means the side effect 
// that I'm trying to synchronize has fallen out of sync, and I need to make 
//an update to the state of the world to match that change in my application.
// - Kent Dodds

// this custom hook wraps a use state while extending to a use effect for storing into local storage
const useLocalStorageWithState = (key, defaultValue='') => {

  const [state, setState] = React.useState(() => window.localStorage.getItem(key) || defaultValue)

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {

  const [name, setName] = useLocalStorageWithState(initialName);

function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Jake"/>
}

export default App
