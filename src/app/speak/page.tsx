"use client";
import React, { useState, useEffect } from "react";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<any>(null);
  const [mediaRecorder, setMediaRecorder] = useState<any>(null);

  useEffect(() => {
    // Get permission and media stream on component mount
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            const audioBlob = new Blob([event.data], { type: "audio/wav" });
            setAudioUrl(URL.createObjectURL(audioBlob));
          }
        };
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  }, []);

  const toggleRecording = () => {
    if (mediaRecorder) {
      if (isRecording) {
        mediaRecorder.stop();
      } else {
        mediaRecorder.start();
        setAudioUrl(null); // Clear the previous audio URL
      }
      setIsRecording(!isRecording);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={toggleRecording}
        className={`px-4 py-2 rounded text-white font-bold ${
          isRecording ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioUrl && (
        <div className="mt-4">
          <audio controls={true} src={audioUrl}></audio>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
