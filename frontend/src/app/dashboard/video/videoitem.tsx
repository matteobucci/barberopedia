import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


interface Source {
  url: string;
}

interface VideoData {
  name: string;
  description: string;
  source: Source;
  lessons: {name:string}[];
  thumbnail: string
}

interface Props {
  videoData: VideoData;
}


const VideoItem: React.FC<Props> = ({ videoData }) => {


  return (
    <div>
      <h2>{videoData?.name}</h2>
      <p>{videoData?.description}</p>
      {videoData?.thumbnail && <Image src={videoData?.thumbnail} alt={videoData?.name} width={640} height={360} />}
      {/* <h3>Source:</h3>
      {videoData?.source && <Link href={videoData?.source?.url}>{videoData?.source?.url}</Link>}
      <h3>Lessons</h3>
      <ul>
        {videoData.lessons.map((lesson) => (
          <li key={lesson?.name}>{lesson?.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default VideoItem;