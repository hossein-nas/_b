import { useEffect } from 'react';
import './App.css'

const BASE_URL ='https://b.vuecasts.ir/api';
function App() {

  const fetchMessage = async () => {
    const req = await fetch(`${BASE_URL}`, {
      method: 'GET'
    })

    if(req.ok){
      const res = await req.json();
      console.log({ res})
    }

    throw new Error( 'API errored')
  }

  const setCookie = async () => {
    const req = await fetch(`${BASE_URL}/set-cookie`, {
      method: 'POST'
    })

    if(req.ok){
      const res = await req.json();
      console.log({ res })
    }

    throw new Error( 'API errored')
  }

  useEffect(() => {
    fetchMessage();
  }, [])

  return (
    <div>
      Hey
      <button onClick={() => setCookie() }>Set cookie</button>
    </div>
  )
}

export default App
