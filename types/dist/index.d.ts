export interface MySharedType {
    name: string;
}
export interface IAnalyzedVideo {
    title: string;
    description: string;
    duration: string;
    publishedAt: string;
    thumbnail: string?;
    channelId: string;
    channelName: string;
    lastFetchOn: Date;
    url: string;
    commentCount?: number;
    videoId: string?;
    likeCount?: number;
    viewCount?: number;
}
export interface ICharacter {
    name: string;
    description: string;
}
export interface IHistoricalReference {
    name: string;
    description: string;
    startYear: number;
    endYear: number;
}
export interface ILesson {
    name: string;
    description: string;
    category: string;
    mainPictureUrl: string;
    tags: string[];
    year: number;
    lessonCreatedOn: Date;
    eventName: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IVideo {
    name: string;
    title: string;
    description: string;
    duration: string;
    publishedAt: Date;
    thumbnail: string;
    channelId: string;
    channelName: string;
    videoId: string;
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
export interface ISpeaker {
    name: string;
    pictureUrl: string;
    description: string;
}
