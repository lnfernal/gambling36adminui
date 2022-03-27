import { useState } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";

function App() {
  const socket = socketIOClient("http://127.0.0.1:8000");
  socket.on("connect",()=>{
    const socketId = socket.io.engine.id;
    socket.emit( 'join_room', {
      room: 'akn',
      socketId: 'akn100'
  } );
  })
  const [playing, setPlaying] = useState(false);
  const HEIGHT = 500;
  const WIDTH = 500;
  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
        audio: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app_videoFeed")[0];
        socket.emit('start_live',{
          room:'akn',
          stream
        })
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  const stopVideo = () => {
    console.log('stop')
    setPlaying(false);
    let video=document.getElementsByClassName("app_videoFeed")[0];
    video.srcObject.getTracks().forEach(track => {
      track.stop();
    });
  };
  return (
    <div className="App">
      <div className="app_container">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app_videoFeed"
        ></video>
      </div>
      <div className="app_input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
    </div>
  );
}

export default App;
