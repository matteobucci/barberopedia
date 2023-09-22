"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button, ListGroup } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";
import GoBackButton from "@/components/navigation/gobackbutton";
import Duration from "@/components/utils/durationstrings";

function Page() {
  const ANALYZE_URL = gql`
    query AnalyzeUrl($url: String!) {
      analyzeUrl(url: $url) {
        id
        title
        description
        duration
        publishedAt
        thumbnail
        channelId
        channelName
      }
    }
  `;

  const [analyze, { loading, data, error }] = useLazyQuery(ANALYZE_URL);

  const [inputData, setInputData] = useState({
    name: "",
    videoURL: "",
    endYear: "",
    startYear: "",
    description: "",
  }); // Current input data

  const [items, setItems] = useState([]); // Array to store items

  const onVideoUrlChange = (videoURL) => {
    setInputData({ ...inputData, videoURL });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.videoURL) return;
    analyze({ variables: { url: inputData.videoURL } });
  };

  return (
    <div>
      <GoBackButton />
      <h1>Add Lesson</h1>

      <Form.Group controlId="formName">
        <Form.Label>Video URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enetr video URL"
          value={inputData.videoURL}
          onChange={(e) => onVideoUrlChange(e.target.value)}
        />
        <Button variant="primary" onClick={handleSubmit}>
          Analyze Video
        </Button>
      </Form.Group>

      {data && data.analyzeUrl && (
        <div style={{ padding: "10px" }}>
          <Row>
            <Col md="auto">
              <img style={{ width: "150px" }}
                src={`https://img.youtube.com/vi/${data.analyzeUrl.id}/0.jpg`}
              />
            </Col>
            <Col>
              <h2>{data.analyzeUrl.title}</h2>
              <p className="description">
                {data.analyzeUrl.description.substr(0, 150)}
              </p>
              <Duration duration={data.analyzeUrl.duration} />
              <p>Published At: {data.analyzeUrl.publishedAt}</p>
              <p>Channel Name: {data.analyzeUrl.channelName} ({data.analyzeUrl.channelId})</p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Page;
