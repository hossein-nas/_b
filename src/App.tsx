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

  useEffect(() => {
    fetchMessage();
  }, [])

  return (
    <div>
      Hey
    </div>
  )
}

export default App
