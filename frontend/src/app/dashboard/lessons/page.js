"use client";
import { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const GET_LESSONS = gql`
    query GetPages($filter: FilterFindManyLessonInput) {
        lessonMany(filter: $filter) {
            _id
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
        }
`;

function CreateLessonButton() {
    const router = useRouter();


    function handleClick() {
        router.push("/dashboard/lessons/new");
    }

    return (
      <Button variant="primary" onClick={handleClick}>
            New lesson
      </Button>
    );
  }


function Page({params}) {


  const [id, setId] = useState(params.id);
  const [pageData, setPageData] = useState(null);

  const { loading, error, analyzedVideoData: data } = useQuery(GET_LESSONS, {
    variables: { id },
  });
  
  if (analyzedVideoData && !pageData) {
    setPageData(analyzedVideoData.lessonMany);
  }

  return (
    <div>
    <CreateLessonButton />
      <h2>Lessons:</h2>
      <ul>
        {console.log(pageData)}
        { pageData && pageData.map(lesson => (
          <li key={lesson._id}>
            <Link href={`/dashboard/lessons/${lesson._id}`}>{lesson.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
