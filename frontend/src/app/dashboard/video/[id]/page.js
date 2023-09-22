"use client";
import GoBackButton from "@/components/navigation/gobackbutton";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { useState } from "react";

const GET_PAGE = gql`
  query GetVideo($id: MongoID!) {
    videoById(_id:$id){
      name
      lessons{
        data{
          name
        }
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
  const [pageData, setPageData] = useState(null);

  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { id },
  });
  
  if (data && !pageData) {
    setPageData(data.videoById);
  }


  return (
    <div>
      <GoBackButton />
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {pageData && (
        <div>
          <h2>{pageData.name}</h2>
          <p>{pageData.description}</p>
          <h3>Source:</h3>
          <Link href={pageData.source.url}>{pageData.source.url}</Link>
          <h3>Lessons</h3>
          <ul>
            {pageData.lessons.map((lesson) => (
              <li key={lesson.name}>{lesson.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Page;
