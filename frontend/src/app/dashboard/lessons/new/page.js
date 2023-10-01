"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button, ListGroup } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";
import GoBackButton from "@/components/navigation/gobackbutton";

function Page() {
  const ANALYZE_VIDEO = gql`
    query AnalyzeVideo($url: String!) {
      analyzeVideo(url: $url) {
            title
            description
            duration
            publishedAt
            thumbnail
            channelId
            channelName
            url
            commentCount 
            likeCount
            viewCount
            lastFetchOn
        }
    }
  `;

  const [analyze, { loading, data, error }] = useLazyQuery(ANALYZE_VIDEO);

  const [inputData, setInputData] = useState({
    name: "",
    videoURL: "",
    endYear: "",
    startYear: "",
    description: "",
  }); // Current input data
  const [items, setItems] = useState([
    {
      name: "Ciao",
      endYear: "2021",
      startYear: "2020",
      description: "Ciao A  atuttiii", 
    },
  ]); // Array to store items

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the current item to the items array
    setItems([...items, inputData]);
    setInputData({ name: "", year: "" }); // Clear the input fields
  };

  const handleDelete = (indexToRemove) => {
    const newItems = items.filter((_, index) => index !== indexToRemove);
    setItems(newItems);
  };

  const onVideoUrlChange = (videoURL) => {
    if(!videoURL)  return;

    console.log(videoURL);
    setInputData({ ...inputData, videoURL });
    analyze({ variables: { url: videoURL } });
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
      </Form.Group>

      {data && data.analyzeUrl && (
        <div style={{padding:"10px"}}>
          <p>Title: {data.analyzeUrl.title}</p>
          <p>Description: {data.analyzeUrl.description.substr(0,200)}</p>
            <p>Duration: {data.analyzeUrl.duration}</p>
            <p>Published At: {data.analyzeUrl.publishedAt}</p>
            <p>Channel Id: {data.analyzeUrl.channelId}</p>
            <p>Channel Name: {data.analyzeUrl.channelName}</p>
            <p>Thumbnail: </p>
            <img src={data.analyzeUrl.thumbnail} />
        </div>
      )}

      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={inputData.description}
            onChange={(e) =>
              setInputData({ ...inputData, description: e.target.value })
            }
          />
        </Form.Group>
      </Form>

      <h3>Historical references</h3>

      <Row>
        <Col lg={3}>
          {
            <div style={{}}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={inputData.name}
                    onChange={(e) =>
                      setInputData({ ...inputData, name: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={inputData.description}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formYear">
                  <Form.Label>Start Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter year"
                    value={inputData.startYear}
                    onChange={(e) =>
                      setInputData({ ...inputData, startYear: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formYear">
                  <Form.Label>End Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter year"
                    value={inputData.endYear}
                    onChange={(e) =>
                      setInputData({ ...inputData, endYear: e.target.value })
                    }
                  />
                </Form.Group>

                <Button
                  style={{ marginTop: "20px" }}
                  variant="primary"
                  type="submit"
                >
                  Add
                </Button>
              </Form>
            </div>
          }
        </Col>
        <Col lg={9}>
          {
            <ListGroup className="mt-4">
              {items.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <div>
                      <div>
                        <h3>{item.name}</h3>
                      </div>
                      {item.startYear} - {item.endYear}
                    </div>
                    <Button
                      style={{ marginRight: "auto", width: "100px" }}
                      variant="danger"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          }
        </Col>
      </Row>
    </div>
  );
}

export default Page;
