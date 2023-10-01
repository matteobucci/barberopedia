"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Form, Button, ListGroup, Container } from "react-bootstrap";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import GoBackButton from "@/components/navigation/gobackbutton";
import Duration from "@/components/utils/durationstrings";
import LessonSelector from "../lessonselector";

export interface VideoFormData {
  name: string;
  title: string;
  description: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  channelId: string;
  channelName: string;
  url: string;
  commentCount: number;
  likeCount: number;
  viewCount: number;
  lastFetchOn: string;
  source: {
    type: 'youtube';
    url: string;
  };
}

export interface AnalyzedVideo {
  title: string
  description: string
  duration: string
  publishedAt: string
  thumbnail: string
  channelId: string
  channelName: string
  lastFetchOn: string
  url: string
  commentCount?: number;
  videoId: string;
  likeCount?: number;
  viewCount?: number
}

function Page() {
  const ANALYZE_URL = gql`
    query AnalyzeUrl($url: String!) {
      analyzeVideo(url: $url) {
        title
        description
        duration
        publishedAt
        thumbnail
        channelId
        channelName
        commentCount
        likeCount
        viewCount
        lastFetchOn
        videoId
      }
    }
  `;

  const SAVE_VIDEO = gql`
    mutation CreateVideo($record: CreateOneVideoInput!) {
      videoCreateOne(record: $record) {
        record {
          title
          source {
            url
            type
          }
          duration
          description
        }
      }
    }
  `;

  const [
    executeAnalyze,
    { loading: analyzeLoading, data: analyzeVideoQuery, error: analyzeError },
  ] = useLazyQuery<{ analyzeVideo: AnalyzedVideo }, { url: string }>(ANALYZE_URL);

  const analyzedVideo = analyzeVideoQuery && analyzeVideoQuery.analyzeVideo;

  const [
    executeSaveVideo,
    { loading: saveLoading, data: savedVideoQuery, error: saveError },
  ] = useMutation<
    { savedVideo: VideoFormData },
    { record: VideoFormData }
  >(SAVE_VIDEO);
  const savedVideo = savedVideoQuery && savedVideoQuery.savedVideo;

  const [inputData, setInputData] = useState({
    name: "",
    videoURL: "",
    endYear: "",
    startYear: "",
    description: "",
  });

  const [selectedLessonId, setSelectedLessonId] = useState("");

  const onVideoUrlChange = (videoURL: string) => {
    setInputData({ ...inputData, videoURL });
  };

  const analyzePressed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputData.videoURL) return;
    executeAnalyze({ variables: { url: inputData.videoURL } });
  };

  const saveVideoPressed = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(inputData && analyzedVideo){
     
      const formVideoData: VideoFormData = {
          url: inputData.videoURL,
          title: analyzedVideo.title,
          description: analyzedVideo.description,
          duration: analyzedVideo.duration,
          publishedAt: analyzedVideo.publishedAt,
          thumbnail: analyzedVideo.thumbnail,
          channelId: analyzedVideo.channelId,
          channelName: analyzedVideo.channelName,
          commentCount: analyzedVideo.commentCount || 0,
          likeCount: analyzedVideo.likeCount || 0,
          viewCount: analyzedVideo.viewCount || 0,
          lastFetchOn: analyzedVideo.lastFetchOn || "",
          source: {
            type: 'youtube',
            url: inputData.videoURL
          },
          name: inputData.name || analyzedVideo.title
      };

      console.log(formVideoData);

      executeSaveVideo({ variables: { record: formVideoData } });
    
    }

  };

  const onLessonSelected = (lesson: any) => {
    console.log(lesson);
  };

  return (
    <Container>
      <GoBackButton />
      <h1>Add Lesson</h1>

      <Form.Group controlId="formName">
        <Form.Label>Video URL</Form.Label>

        <Row>
          <Col md="auto">
            {!analyzeLoading && (
              <Button variant="primary" onClick={analyzePressed}>
                Analyze Video
              </Button>
            )}
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter video URL"
              value={inputData.videoURL}
              onChange={(e) => onVideoUrlChange(e.target.value)}
            />
            {analyzeLoading && <p>Analyzing Video...</p>}
            {analyzeError && (
              <p>Error Analyzing Video: {analyzeError?.message}</p>
            )}
          </Col>
        </Row>
      </Form.Group>

      {analyzedVideo && (
        <div style={{ padding: "10px" }}>
          <Row>
            <Col md="auto">
              <img
                style={{ width: "150px" }}
                src={`https://img.youtube.com/vi/${analyzedVideo.id}/0.jpg`}
              />
            </Col>
            <Col>
              <h2>{analyzedVideo.title}</h2>
              <p className="description">
                {analyzedVideo.description.substr(0, 150)}
              </p>
              <Duration duration={`${analyzedVideo.duration || ""}`} />
              <p>Published At: {analyzedVideo?.publishedAt}</p>
              <p>
                Channel Name: {analyzedVideo.channelName} (
                {analyzedVideo.channelId})
              </p>
            </Col>
          </Row>
          <LessonSelector onSelect={onLessonSelected}></LessonSelector>
          {saveLoading && <p>Saving Video...</p>}
          {saveError && <p>Error Saving Video: {saveError?.message}</p>}
          {!saveLoading && (
            <Button variant="primary" onClick={saveVideoPressed}>
              Save Video
            </Button>   
          )}
        </div>
      )}
    </Container>
  );
}

export default Page;
