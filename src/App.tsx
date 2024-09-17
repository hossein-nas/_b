import { useEffect, useState, MouseEvent, MouseEventHandler } from 'react';
import './App.css'

const BASE_URL ='https://b.vuecasts.ir/api';
function App() {

  const [name, setName] = useState('')

  const fetchMessage = async () => {
    const req = await fetch(`${BASE_URL}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',

    })

    if(req.ok){
      const res = await req.json();
      console.log({ res})
    }

    throw new Error( 'API errored')
  }

  const setCookie = async () => {
    const req = await fetch(`${BASE_URL}/set-cookie`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    })

    if(req.ok){
      const res = await req.json();
      console.log({ res })
    }

    throw new Error( 'API errored')
  }

  useEffect(() => {
    fetchMessage();

    if( localStorage.getItem('name')){
      setName(localStorage.getItem('name') ?? '')
    }
  }, [])

  const handleInput: MouseEventHandler<HTMLInputElement> = (evt: MouseEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement
    if( input ){
      setName(input.value)
    }
  }

  const handleSave = () => {
    localStorage.setItem('name', name);
  }

  return (
    <div>
      Hey
      <button onClick={() => setCookie() }>Set cookie</button>
      <div>
        Name: {name}
      </div>
      <div>
        <input type="text" onInput={handleInput} value={name}></input>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default App
