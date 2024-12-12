import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const { roomId } = useParams();
    const containerRef = useRef(null);

    const myMeeting = async (element) => {
        const appID = 1567032026;
        const serverSecret = "88af4d3970fd9cc35bd329085f9511c5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Anuj"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: { mode: ZegoUIKitPrebuilt.VideoConference },
        });
    };

    useEffect(() => {
        if (containerRef.current) {
            myMeeting(containerRef.current);
        }
    }, [roomId]);

    return (
        <div className='room' ref={containerRef}>{roomId}</div>
    );
}

export default Room;
