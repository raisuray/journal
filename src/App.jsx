import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './component/Clock'
import Journal from './component/Journal'
import delete_on_progress from './api/delete_on_progress'
import add_on_progress from './api/add_on_progress'

function App() {

  const [recording, setRecording] = useState({
    status : false,
    data : null
  });

  const handleClick =  () => {
    const newData = recording;
    if(recording.status) {
      delete_on_progress(recording, setRecording);
    } else {
      add_on_progress(recording, setRecording);
    }
    setRecording({...newData, status : !recording.status})
  }

  return (
    <>
      <p>Welcome to Logging</p>
      <Clock/>
      <hr/>
      <div>
        <Journal recording={recording} setRecording={setRecording}/>
      </div>
      <div>
        <button onClick={() => recording.status ? null : handleClick()} disabled={recording.status}>Start</button>
        <button onClick={() => !recording.status ? null : handleClick()} disabled={!recording.status}>Stop</button>
      </div>

    </>
  )
}

export default App
