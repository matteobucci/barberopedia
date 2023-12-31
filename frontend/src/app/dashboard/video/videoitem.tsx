import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useRouter } from 'next/navigation';
import { IVideo } from "@barberopedia/shared-types"

interface Props {
  videoData: IVideo;
}


const VideoItem: React.FC<Props> = ({ videoData }) => {

  const { thumbnail, name, channelName, source, videoId, _id } = videoData;

  const views = 500;
  
  const router = useRouter();


  const cardClicked = () => {
    if(!videoId) return console.log("No video " + videoId)
    //router.push(source?.url)
    router.push("/dashboard/video/" + _id)
  }

  console.log("VideoItem", videoData)


  return (
    <Card style={{ margin: "5px" }} onClick={cardClicked}>
      <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#e9ecef' }}>
        {thumbnail ? (
          <div style={{ maxWidth: '100%', maxHeight: '50vh' }}>
          <Image
                src={thumbnail}
                alt="This video has no thumbnail"
                layout="responsive"
                width={400}
                height={300}
            />
        </div>
        ) : (
          <Placeholder as="div" className="w-100 h-100" />
        )}
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2">{channelName}</Card.Subtitle>
        <Card.Text>{views} views</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoItem;