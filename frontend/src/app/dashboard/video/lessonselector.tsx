"use client";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export const GET_LESSONS = gql`
    query GetLessons($filter: FilterFindManyLessonInput) {
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

interface LessonSelectorProps {
    onSelect: (id: string) => void;
}

function LessonSelector(props: LessonSelectorProps) {
    const [selectedId, setSelectedId] = useState("");
    const [componentData, setPageData] = useState<any[] | null>(null);

    const { loading, error, analyzedVideoData: data } = useQuery(GET_LESSONS, {
        variables: { filter: {} },
    });

    console.log("loading", loading);    

    if (data && !componentData) {
        setPageData(data.lessonMany);
    }

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {componentData &&
                    componentData.map((lesson) => (
                        <Col key={lesson._id}>
                            <Card border="dark" onClick={() => {props.onSelect(lesson._id)}}>
                                <Card.Body >
                                    <Card.Title>{lesson.name}</Card.Title>
                                    <Card.Text>{lesson.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </div>
    );
}

export default LessonSelector;
