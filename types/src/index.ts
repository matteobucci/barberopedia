
export interface CreatableObject {
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends CreatableObject {
  name: string;
  email: string;
  password: string;
  uid: string;
  role: 'user' | 'admin';
}

export interface IAnalyzedVideo extends CreatableObject {
    title: string
    description: string
    duration: string
    publishedAt: string
    thumbnail: string
    channelId: string
    channelName: string
    lastFetchOn: Date
    url: string
    commentCount?: number;
    videoId: string;
    likeCount?: number;
    viewCount?: number
}

export interface ICharacter extends CreatableObject {
    name: string;
    description: string;
}

export interface IHistoricalReference extends CreatableObject {
    name: string;
    description: string;
    startYear: number;
    endYear: number;
}

export interface ILesson extends CreatableObject {
    name: string;
    description: string;
    category: string;
    mainPictureUrl: string;
    tags: string[];
    year: number;
    lessonCreatedOn: Date;
    eventName: string;
}

export interface IVideo extends CreatableObject {
    name: string;
    title: string;
    description: string;
    duration: string;
    publishedAt: Date;
    thumbnail: string;
    channelId: string;
    channelName: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
    lastFetchOn: Date;
    lessons: {
      lesson: ILesson;
      startTime: number;
      endTime: number;
    }[];
    source: {
      type: 'youtube';
      url: string;
    };
  }

  export interface Event extends CreatableObject {
    name: string;
    description: string;
    startYear: number;
    endYear?: number;
    year: number;
  }

  export interface ISpeaker extends CreatableObject {
    name: string;
    pictureUrl: string;
    description: string;
    referenceUrl: string;
  }