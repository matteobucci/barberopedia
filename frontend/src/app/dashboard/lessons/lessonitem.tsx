import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { useRouter } from 'next/navigation';
import { ILesson, IVideo } from "@barberopedia/shared-types"

interface Props {
  lesson: ILesson;
}


const LessonItem: React.FC<Props> = ({ lesson }) => {

  const { name, year, _id } = lesson;

  let mainPictureUrl = lesson?.mainPictureUrl || "";

  const views = 500;
  
  const router = useRouter();


  const cardClicked = () => {
    if(!_id) return console.log("No video " + _id)
    //router.push(source?.url)
    router.push("/dashboard/video/" + _id)
  }

  console.log("VideoItem", _id)


  return (
    <Card style={{ margin: "5px" }} onClick={cardClicked}>
      <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#e9ecef' }}>
        {mainPictureUrl ? (
          <div style={{ maxWidth: '100%', maxHeight: '50vh' }}>
          <Image
                src={mainPictureUrl}
                alt="This lesson has no picture"
                layout="responsive"
                width={400}
                height={300}
            />
        </div>
        ) : (
          <Placeholder as="div" className="w-100 h-100" />
        )}
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2">{year}</Card.Subtitle>
        <Card.Text>{views}  views</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LessonItem;