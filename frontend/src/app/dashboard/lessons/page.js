"use client";
import { useState } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LessonItem from "./lessonitem";
import EmptyDataBlock from "@/components/utils/emptydatablock";

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

  const { loading, error, data } = useQuery(GET_LESSONS, {
    variables: { id },
  });
  
  if (data && !pageData) {
    setPageData(data.lessonMany);
  }

  return (

    <Container>
    <CreateLessonButton />
      <h2>Lessons:</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={5} >
        {console.log(pageData)}
        {pageData &&
          pageData.map((lesson) => (
            <Col key={lesson._id} style={{ padding: '10px' }}>
              <LessonItem key={lesson._id} lesson={lesson} />
            </Col>
          ))}
        {(!loading && (!pageData || pageData.length === 0)) && <EmptyDataBlock message="No lessons have been found :(" />}
      </Row>
    </Container>
  );
}

export default Page;
