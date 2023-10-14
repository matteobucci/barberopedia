"use client";
import GoBackButton from "@/components/navigation/gobackbutton";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";
import LessonSelector from "../lessonselector";
import EmptyDataBlock from "@/components/utils/emptydatablock";

const GET_VIDEO = gql`
  query GetVideo($id: MongoID!) {
    videoById(_id:$id){
      name
      lessons{
        data{
          name
        }
        startTime
        endTime
      }
      source {
        url
        type
      }
      description
    }
  }
`;




function Page({params}) {


  const [id, setId] = useState(params.id);
  const [videoData, setVideoData] = useState(null);


  const { loading, error, data } = useQuery(GET_VIDEO, {
    variables: { id },
  });
  
  if (data && !videoData) {
    setVideoData(data.videoById);
  }

  return (
    <div>
      <GoBackButton />
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {!videoData && !loading && (
        <EmptyDataBlock />
      )}
      {videoData && (
        <div>
          <h2>{videoData.name}</h2>
          <p>{videoData.description}</p>
          <h3>Source:</h3>
          <Link href={videoData.source.url}>{videoData.source.url}</Link>
          <h3>Lessons</h3>
          <ul>
            {videoData.lessons.map((lesson) => (
              <li key={lesson.name}>{lesson.name}</li>
            ))}
          </ul>
        </div>
        
      )}
    </div>
  );
}

export default Page;
