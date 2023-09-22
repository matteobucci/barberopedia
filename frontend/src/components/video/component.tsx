"use client"

import React from 'react';

export interface VideoComponentProps {
  name: string;
  description: string;
  duration: number;
  lessons: {
    name: string;
    id: string;
    startTime: number;
    endTime: number;
  }[];
  source: {
    type: string;
    url: string;
  };
}

const Video = (data: {videoData: VideoComponentProps}) => {
    return (
        <div>
            <h1>Video Component</h1>
            
        </div>
    );
};

export default Video;
