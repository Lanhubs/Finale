import React from "react";
import ControlButton from "./ControlButton";
import { LiaMicrophoneSlashSolid, LiaMicrophoneSolid } from "react-icons/lia";
import { CiVideoOff, CiVideoOn } from "react-icons/ci";
import { PiPhoneCallThin, PiPhoneSlashThin } from "react-icons/pi";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { BiUpload } from "react-icons/bi";
const ControlButtons: React.FC = () => {
  const [mute, useMute] = React.useState(false);
  const [capture, useCapture] = React.useState(false);
  const [hangup, setHangup] = React.useState(false);
  return (
    <div className="flex justify-center items-center space-x-4">
      {/* Mute btn */}
      <ControlButton onClick={() => {}} icon={mute ? <RxSpeakerLoud /> : <RxSpeakerOff />}/>
      <ControlButton onClick={() => {}} icon={capture ? <CiVideoOn /> : <CiVideoOff />}/>
      <ControlButton callBtn={true} onClick={() => {}} icon={hangup ? <PiPhoneSlashThin /> : <PiPhoneCallThin />}/>
      <ControlButton onClick={() => {}} icon={mute ? <LiaMicrophoneSolid /> : <LiaMicrophoneSlashSolid />}/>
     
      <ControlButton icon={<BiUpload />} onClick={() => {}} />
    </div>
  );
};

export default ControlButtons;
