"use client";
import { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GET_PAGES = gql`
  query GetPages($filter: FilterFindManyVideoInput) {
    videoMany(filter: $filter) {
      _id
      name
      lessons {
        lessonId
        data {
          name
        }
        startTime
        endTime
      }
      description
    }
  }
`;

function CreateVideoButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/dashboard/video/new");
  }

  return (
    <Button variant="primary" onClick={handleClick}>
      New Video
    </Button>
  );
}

function Page({ params }) {
  const [id, setId] = useState(params.id);
  const [pageData, setPageData] = useState(null);

  const { loading, error, data } = useQuery(GET_PAGES, {
    variables: { id },
  });

  if (data && !pageData) {
    setPageData(data.videoMany);
  }

  return (
    <div>
      <CreateVideoButton />
      <h2>Videos:</h2>
      <ul>
        {console.log(pageData)}
        {pageData &&
          pageData.map((video) => (
            <li key={video._id}>
              <Link href={`/dashboard/video/${video._id}`}>
                {video.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Page;
