import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    const appID = 1275738584;
    const serverSecret = "4edaebb72d882f4b83a8f27ba395b75a";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      'rtmax',
      Date.now().toString()
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container:element,
        scenario:{
            mode:ZegoUIKitPrebuilt.VideoConference
        }
    })
  };
  return (
    <div>
      <h1><div ref={myMeeting} /></h1>
    </div>
  );
};

export default Room;
