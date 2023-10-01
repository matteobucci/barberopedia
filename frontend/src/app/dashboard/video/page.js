"use client";
import { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VideoItem from "./videoitem";

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
    <Container>
      <CreateVideoButton />
      <h2>Videos:</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={5}>
        {console.log(pageData)}
        {pageData &&
          pageData.map((video) => (
            <Col key={video._id}>
              <VideoItem videoData={video} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Page;
