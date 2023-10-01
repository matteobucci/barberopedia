"use client";
import { use, useCallback, useState } from "react";
import { useRouter } from 'next/navigation'
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import GoBackButton from "@/components/navigation/gobackbutton";
import DeleteButton from "@/components/navigation/deletebutton";
import { GET_LESSONS } from "../page";
import Link from "next/link";

const GET_LESSON = gql`
  query GetPage($id: MongoID!) {
    lessonById(_id:$id){
      name
      mainCharacter {
        name
      }
      secondaryCharacters {
        name
      }
      historicalReferences {
        name
        startYear
        endYear
      }
      description
    }
    videoMany(filter:{ AND: [{ lessons : {lessonId : $id }}]}){
      name
      description
      source {
        url
      }
    }
  }
`;

const LESSON_REMOVE_BY_ID = gql`
  mutation RemoveLesson($id: MongoID!) {
    lessonRemoveById(_id: $id) {
      recordId
    }
  }
`;


function Page({params}) {


  const [id, setId] = useState(params.id);
  const [pageData, setLessonData] = useState(null);
  const [videoData, setVideoData] = useState(null);

  
  const router = useRouter();

  const[deleteFunction,  { removeLoading, removeData, removeError }] = useMutation(LESSON_REMOVE_BY_ID, {
    variables: { id },
    onCompleted : (data) => {
      if(data){
        console.log("Lesson deleted", data);
        router.back();
      }
    },
    refetchQueries: [GET_LESSONS] // Not sure if this is working
  });



  const { loading, error, data } = useQuery(GET_LESSON, {
    variables: { id },
  });
  
  if (data && !pageData) {
    setLessonData(data.lessonById);
    setVideoData(data.videoMany);
  }


  return (
    <div>
      <GoBackButton />
      <DeleteButton onDeleteRequest={deleteFunction} />
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {pageData && (
        <div>
          <h2>{pageData.name}</h2>
          <p>{pageData.description}</p>
          <h3>Main Character:</h3>
          <p>{pageData.mainCharacter.name}</p>
          <h3>Secondary Characters:</h3>
          <ul>
            {pageData.secondaryCharacters.map((character) => (
              <li key={character.name}>{character.name}</li>
            ))}
          </ul>
          <h3>Historical References:</h3>
          <ul>
            {pageData.historicalReferences.map((reference) => (
              <li key={reference.name}>
                {reference.name} ({reference.startYear}-{reference.endYear})
              </li>
            ))}
          </ul>
          <h3>Videos:</h3>
          <ul>
            {videoData.map((video) => (
              <li key={video.name}>
                {video.name} ({video.description})
                <Link href={video.source.url}>{video.source.url}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Page;
