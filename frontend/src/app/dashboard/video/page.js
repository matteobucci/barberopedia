"use client";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import VideoItem from "./videoitem";
import EmptyDataBlock from "@/components/utils/emptydatablock";

const GET_PAGES = gql`
  query GetPages($filter: FilterFindManyVideoInput) {
    videoMany(filter: $filter) {
      _id
      name
      thumbnail
      videoId
      lessons {
        lessonId
        data {
          name
        }
        startTime
        endTime
      }
      source {
        type
        url
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
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={5} >
        {console.log(pageData)}
        {pageData &&
          pageData.map((video) => (
            <Col key={video._id} style={{ padding: '10px' }}>
              <VideoItem videoData={video}/>
            </Col>
          ))}
        {(!loading && (!pageData || pageData.length === 0)) && <EmptyDataBlock message="No videos have been found :(" />}
      </Row>
    </Container>
  );
}

export default Page;
