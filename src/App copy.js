import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import Peer from "peerjs";
// import SimplePeerWrapper from "simple-peer-wrapper";

function App() {
  const URL = "https://localhost:8000/";
  // const URL = "http://178.128.20.19:8000";

  // const options = {
  //   serverUrl: URL,
  //   debug: true,
  // };

  // const spw = new SimplePeerWrapper(options);
  // spw.connect();

  const socket = io(URL, {
    forceNew: true,
  });
  // socket.on("connection", () => console.log("Connected client"));
  

  const peerServer = new Peer(undefined, {
    host: "localhost",
    secure: true,
    port: 8000,
    path: "/mypeer",
  });

  peerServer.on("error", (err) => console.log(err));

  // peerServer.on('call', (call) => {
  //   navigator.mediaDevices.getUserMedia({video: true, audio: true}, (stream) => {
  //     call.answer(stream);
  //     call.on('stream', (remoteStream) => {
  //       document.getElementsByClassName("app_playback")[0].srcObject=remoteStream
  //     });
  //   }, (err) => {
  //     console.error('Failed to get local stream', err);
  //   });
  // });

  function connectToNewUser(userId, stream) {
    const call = peerServer.call(userId, stream);
  }

  // peerServer.on('error',console.log)
  // useEffect(() => {
  // socket.on("connect", () => {
  //   const socketId = socket.io.engine.id;
  //   socket.emit("join_room", {
  //     room: "akn",
  //     socketId: socketId,
  //   });
  // });
  // }, []);

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
        // document.getElementsByClassName("app_playback")[0].srcObject = stream;
        // socket.emit("start_live", {
        //   room: "akn",
        //   stream,
        // });
        // const socketId = socket.io.engine.id;
        peerServer.on('open',(socketId)=>{
        socket.emit("join_room", {
          room: "akn",
          socketId: socketId,
        });
        socket.on("user-connected", (userId) => {
          console.log('userconnected>',userId)
          connectToNewUser(userId,stream)
        });
        })

        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  const stopVideo = () => {
    console.log("stop");
    setPlaying(false);
    let video = document.getElementsByClassName("app_videoFeed")[0];
    video.srcObject.getTracks().forEach((track) => {
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
      <div>
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app_playback"
        />
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
