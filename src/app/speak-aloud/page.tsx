"use client";

import React, { useState, useEffect } from "react";
import { BsMic } from "react-icons/bs";

const VoiceRecorderUI = () => {
  const [isRecording, setIsRecording] = useState<any>(false);
  const [audioUrl, setAudioUrl] = useState<any>(null);
  const [mediaRecorder, setMediaRecorder] = useState<any>(null);
  const [timer, setTimer] = useState<any>(0);
  const [intervalId, setIntervalId] = useState<any>(null);
  const [micAccessDenied, setMicAccessDenied] = useState(false);
  console.log("media recorder", mediaRecorder);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        setMicAccessDenied(false);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioUrl(URL.createObjectURL(new Blob([event.data], { type: "audio/wav" })));
          }
        };
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
        setMicAccessDenied(true);
      });

    return () => {
      clearInterval(intervalId);
    };
  }, [micAccessDenied]);

  const toggleRecording = () => {
    if (mediaRecorder) {
      if (isRecording) {
        mediaRecorder.stop();
        clearInterval(intervalId);
        setIntervalId(null);
      } else {
        setAudioUrl(null);
        setTimer(0);
        mediaRecorder.start();
        const id = setInterval(() => {
          setTimer((prev: any) => prev + 1);
        }, 1000);
        setIntervalId(id);
      }
      setIsRecording(!isRecording);
    }
  };

  const formatTime = (totalSeconds: any) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-center items-start pt-24 bg-gray-200 min-h-screen">
      <div className="p-5 w-4/5 bg-white shadow-lg rounded-md">
        <div className="text-gray-800 mb-5 text-xl">Time: {formatTime(timer)}</div>
        <div className="border-dashed border-2 border-gray-400 p-5 rounded-md mb-5 bg-gray-100 text-gray-800">
          While extracurricular activities can be enriching, it is important to balance them with
          academic responsibilities. Students should prioritize their coursework and ensure that
          they have enough time to study and complete assignments. Effective time management skills
          are crucial for balancing academics and extracurriculars successfully.{" "}
        </div>{" "}
        {/* <div className="flex flex-col justify-center items-center mt-5 border-dashed border-2 border-gray-400 h-40 rounded-md bg-gray-100 text-gray-800">
          <p> {isRecording ? "Stop Recording" : "Start Recording"}</p>{" "}
          <button onClick={toggleRecording} className="bg-gray-300 p-2 rounded-full cursor-pointer">
            <BsMic size={40} color={isRecording ? "red" : "gray"} />{" "}
          </button>{" "}
          <div className="text-gray-600 text-sm ">
            Use a headset with inline microphone to get accurate AI scores{" "}
          </div>{" "}
        </div> */}
        {micAccessDenied ? (
          // Show this red box if microphone access is denied
          <div className="flex flex-col justify-center items-center mt-5 h-40 rounded-md bg-red-800 text-white">
            <p>Microphone access denied</p>
          </div>
        ) : (
          // Otherwise, show the normal recording interface
          <div className="flex flex-col justify-center items-center mt-5 border-dashed border-2 border-gray-400 h-40 rounded-md bg-gray-100 text-gray-800">
            <p>{isRecording ? "Stop Recording" : "Start Recording"}</p>
            <button
              onClick={toggleRecording}
              className="bg-gray-300 p-2 rounded-full cursor-pointer"
            >
              <BsMic size={40} color={isRecording ? "red" : "gray"} />
            </button>
            <div className="text-gray-600 text-sm">
              Use a headset with inline microphone to get accurate AI scores
            </div>
          </div>
        )}
        {audioUrl && (
          <div className="mt-4">
            <audio controls src={audioUrl}></audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorderUI;
