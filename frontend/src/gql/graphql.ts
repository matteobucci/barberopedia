/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: { input: any; output: any; }
};

export type AnalyzedVideo = {
  __typename?: 'AnalyzedVideo';
  _id: Scalars['MongoID']['output'];
  channelId: Scalars['String']['output'];
  channelName: Scalars['String']['output'];
  commentCount?: Maybe<Scalars['Float']['output']>;
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  lastFetchOn?: Maybe<Scalars['Date']['output']>;
  likeCount?: Maybe<Scalars['Float']['output']>;
  publishedAt: Scalars['String']['output'];
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
  viewCount?: Maybe<Scalars['Float']['output']>;
};

export type Character = {
  __typename?: 'Character';
  _id: Scalars['MongoID']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<CharacterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Character;
};

/** List of items with pagination. */
export type CharacterPagination = {
  __typename?: 'CharacterPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Character>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type CreateManyCharacterInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateManyCharacterPayload = {
  __typename?: 'CreateManyCharacterPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Character>>;
};

export type CreateManyHistoricalReferenceInput = {
  description: Scalars['String']['input'];
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  startYear: Scalars['Float']['input'];
};

export type CreateManyHistoricalReferencePayload = {
  __typename?: 'CreateManyHistoricalReferencePayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<HistoricalReference>>;
};

export type CreateManyLessonInput = {
  category: Scalars['String']['input'];
  createdAt: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn: Scalars['Date']['input'];
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateManyLessonPayload = {
  __typename?: 'CreateManyLessonPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Lesson>>;
};

export type CreateManyVideoInput = {
  channelId: Scalars['String']['input'];
  channelName: Scalars['String']['input'];
  commentCount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  lastFetchOn: Scalars['Date']['input'];
  lessons?: InputMaybe<Array<InputMaybe<VideoLessonsInput>>>;
  likeCount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  publishedAt: Scalars['Date']['input'];
  source?: InputMaybe<VideoSourceInput>;
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
  viewCount: Scalars['Float']['input'];
};

export type CreateManyVideoPayload = {
  __typename?: 'CreateManyVideoPayload';
  /** Number of created documents */
  createdCount: Scalars['Int']['output'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']['output']>;
  /** Created documents */
  records?: Maybe<Array<Video>>;
};

export type CreateOneCharacterInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateOneCharacterPayload = {
  __typename?: 'CreateOneCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Character>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneHistoricalReferenceInput = {
  description: Scalars['String']['input'];
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  startYear: Scalars['Float']['input'];
};

export type CreateOneHistoricalReferencePayload = {
  __typename?: 'CreateOneHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<HistoricalReference>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneLessonInput = {
  category: Scalars['String']['input'];
  createdAt: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn: Scalars['Date']['input'];
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type CreateOneLessonPayload = {
  __typename?: 'CreateOneLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Lesson>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneVideoInput = {
  channelId: Scalars['String']['input'];
  channelName: Scalars['String']['input'];
  commentCount: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  lastFetchOn: Scalars['Date']['input'];
  lessons?: InputMaybe<Array<InputMaybe<VideoLessonsInput>>>;
  likeCount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  publishedAt: Scalars['Date']['input'];
  source?: InputMaybe<VideoSourceInput>;
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
  viewCount: Scalars['Float']['input'];
};

export type CreateOneVideoPayload = {
  __typename?: 'CreateOneVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Video>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type FilterCountCharacterInput = {
  AND?: InputMaybe<Array<FilterCountCharacterInput>>;
  OR?: InputMaybe<Array<FilterCountCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountCharacterOperatorsInput = {
  _id?: InputMaybe<FilterCountCharacter_IdOperatorsInput>;
};

export type FilterCountCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterCountHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterCountHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterCountHistoricalReference_IdOperatorsInput>;
};

export type FilterCountHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountLessonInput = {
  AND?: InputMaybe<Array<FilterCountLessonInput>>;
  OR?: InputMaybe<Array<FilterCountLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountLessonOperatorsInput = {
  _id?: InputMaybe<FilterCountLesson_IdOperatorsInput>;
};

export type FilterCountLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountVideoInput = {
  AND?: InputMaybe<Array<FilterCountVideoInput>>;
  OR?: InputMaybe<Array<FilterCountVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterCountVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterCountVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterCountVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountVideoOperatorsInput = {
  _id?: InputMaybe<FilterCountVideo_IdOperatorsInput>;
};

export type FilterCountVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterCountVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyCharacterInput = {
  AND?: InputMaybe<Array<FilterFindManyCharacterInput>>;
  OR?: InputMaybe<Array<FilterFindManyCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCharacterOperatorsInput = {
  _id?: InputMaybe<FilterFindManyCharacter_IdOperatorsInput>;
};

export type FilterFindManyCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterFindManyHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterFindManyHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterFindManyHistoricalReference_IdOperatorsInput>;
};

export type FilterFindManyHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyLessonInput = {
  AND?: InputMaybe<Array<FilterFindManyLessonInput>>;
  OR?: InputMaybe<Array<FilterFindManyLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyLessonOperatorsInput = {
  _id?: InputMaybe<FilterFindManyLesson_IdOperatorsInput>;
};

export type FilterFindManyLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyVideoInput = {
  AND?: InputMaybe<Array<FilterFindManyVideoInput>>;
  OR?: InputMaybe<Array<FilterFindManyVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterFindManyVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterFindManyVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindManyVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyVideoOperatorsInput = {
  _id?: InputMaybe<FilterFindManyVideo_IdOperatorsInput>;
};

export type FilterFindManyVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindManyVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneCharacterInput = {
  AND?: InputMaybe<Array<FilterFindOneCharacterInput>>;
  OR?: InputMaybe<Array<FilterFindOneCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCharacterOperatorsInput = {
  _id?: InputMaybe<FilterFindOneCharacter_IdOperatorsInput>;
};

export type FilterFindOneCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterFindOneHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterFindOneHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterFindOneHistoricalReference_IdOperatorsInput>;
};

export type FilterFindOneHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneLessonInput = {
  AND?: InputMaybe<Array<FilterFindOneLessonInput>>;
  OR?: InputMaybe<Array<FilterFindOneLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneLessonOperatorsInput = {
  _id?: InputMaybe<FilterFindOneLesson_IdOperatorsInput>;
};

export type FilterFindOneLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneVideoInput = {
  AND?: InputMaybe<Array<FilterFindOneVideoInput>>;
  OR?: InputMaybe<Array<FilterFindOneVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterFindOneVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterFindOneVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterFindOneVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneVideoOperatorsInput = {
  _id?: InputMaybe<FilterFindOneVideo_IdOperatorsInput>;
};

export type FilterFindOneVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterFindOneVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyCharacterInput = {
  AND?: InputMaybe<Array<FilterRemoveManyCharacterInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyCharacterOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyCharacter_IdOperatorsInput>;
};

export type FilterRemoveManyCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterRemoveManyHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyHistoricalReference_IdOperatorsInput>;
};

export type FilterRemoveManyHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyLessonInput = {
  AND?: InputMaybe<Array<FilterRemoveManyLessonInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyLessonOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyLesson_IdOperatorsInput>;
};

export type FilterRemoveManyLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveManyVideoInput = {
  AND?: InputMaybe<Array<FilterRemoveManyVideoInput>>;
  OR?: InputMaybe<Array<FilterRemoveManyVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterRemoveManyVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterRemoveManyVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveManyVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyVideoOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyVideo_IdOperatorsInput>;
};

export type FilterRemoveManyVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveManyVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneCharacterInput = {
  AND?: InputMaybe<Array<FilterRemoveOneCharacterInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneCharacterOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneCharacter_IdOperatorsInput>;
};

export type FilterRemoveOneCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterRemoveOneHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneHistoricalReference_IdOperatorsInput>;
};

export type FilterRemoveOneHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneLessonInput = {
  AND?: InputMaybe<Array<FilterRemoveOneLessonInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneLessonOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneLesson_IdOperatorsInput>;
};

export type FilterRemoveOneLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterRemoveOneVideoInput = {
  AND?: InputMaybe<Array<FilterRemoveOneVideoInput>>;
  OR?: InputMaybe<Array<FilterRemoveOneVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterRemoveOneVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterRemoveOneVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterRemoveOneVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneVideoOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneVideo_IdOperatorsInput>;
};

export type FilterRemoveOneVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRemoveOneVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyCharacterInput = {
  AND?: InputMaybe<Array<FilterUpdateManyCharacterInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyCharacterOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyCharacter_IdOperatorsInput>;
};

export type FilterUpdateManyCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterUpdateManyHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyHistoricalReference_IdOperatorsInput>;
};

export type FilterUpdateManyHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyLessonInput = {
  AND?: InputMaybe<Array<FilterUpdateManyLessonInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyLessonOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyLesson_IdOperatorsInput>;
};

export type FilterUpdateManyLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateManyVideoInput = {
  AND?: InputMaybe<Array<FilterUpdateManyVideoInput>>;
  OR?: InputMaybe<Array<FilterUpdateManyVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterUpdateManyVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterUpdateManyVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateManyVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyVideoOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyVideo_IdOperatorsInput>;
};

export type FilterUpdateManyVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateManyVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneCharacterInput = {
  AND?: InputMaybe<Array<FilterUpdateOneCharacterInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneCharacterInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneCharacterOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCharacterOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneCharacter_IdOperatorsInput>;
};

export type FilterUpdateOneCharacter_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneHistoricalReferenceInput = {
  AND?: InputMaybe<Array<FilterUpdateOneHistoricalReferenceInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneHistoricalReferenceInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneHistoricalReferenceOperatorsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneHistoricalReferenceOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneHistoricalReference_IdOperatorsInput>;
};

export type FilterUpdateOneHistoricalReference_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneLessonInput = {
  AND?: InputMaybe<Array<FilterUpdateOneLessonInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneLessonInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneLessonOperatorsInput>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneLessonOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneLesson_IdOperatorsInput>;
};

export type FilterUpdateOneLesson_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterUpdateOneVideoInput = {
  AND?: InputMaybe<Array<FilterUpdateOneVideoInput>>;
  OR?: InputMaybe<Array<FilterUpdateOneVideoInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneVideoOperatorsInput>;
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<FilterUpdateOneVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<FilterUpdateOneVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type FilterUpdateOneVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneVideoOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneVideo_IdOperatorsInput>;
};

export type FilterUpdateOneVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOneVideo_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type HistoricalReference = {
  __typename?: 'HistoricalReference';
  _id: Scalars['MongoID']['output'];
  description: Scalars['String']['output'];
  endYear?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  startYear: Scalars['Float']['output'];
};

/** A connection to a list of items. */
export type HistoricalReferenceConnection = {
  __typename?: 'HistoricalReferenceConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<HistoricalReferenceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type HistoricalReferenceEdge = {
  __typename?: 'HistoricalReferenceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: HistoricalReference;
};

/** List of items with pagination. */
export type HistoricalReferencePagination = {
  __typename?: 'HistoricalReferencePagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<HistoricalReference>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Lesson = {
  __typename?: 'Lesson';
  _id: Scalars['MongoID']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  eventName?: Maybe<Scalars['String']['output']>;
  historicalReferences: Array<Maybe<HistoricalReference>>;
  lessonCreatedOn: Scalars['Date']['output'];
  mainCharacter?: Maybe<Character>;
  mainPictureUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  secondaryCharacters: Array<Maybe<Character>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

/** A connection to a list of items. */
export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<LessonEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LessonEdge = {
  __typename?: 'LessonEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Lesson;
};

/** List of items with pagination. */
export type LessonPagination = {
  __typename?: 'LessonPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Lesson>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  characterCreateMany?: Maybe<CreateManyCharacterPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  characterCreateOne?: Maybe<CreateOneCharacterPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  characterRemoveById?: Maybe<RemoveByIdCharacterPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  characterRemoveMany?: Maybe<RemoveManyCharacterPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  characterRemoveOne?: Maybe<RemoveOneCharacterPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  characterUpdateById?: Maybe<UpdateByIdCharacterPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  characterUpdateMany?: Maybe<UpdateManyCharacterPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  characterUpdateOne?: Maybe<UpdateOneCharacterPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  historicalReferenceCreateMany?: Maybe<CreateManyHistoricalReferencePayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  historicalReferenceCreateOne?: Maybe<CreateOneHistoricalReferencePayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  historicalReferenceRemoveById?: Maybe<RemoveByIdHistoricalReferencePayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  historicalReferenceRemoveMany?: Maybe<RemoveManyHistoricalReferencePayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  historicalReferenceRemoveOne?: Maybe<RemoveOneHistoricalReferencePayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  historicalReferenceUpdateById?: Maybe<UpdateByIdHistoricalReferencePayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  historicalReferenceUpdateMany?: Maybe<UpdateManyHistoricalReferencePayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  historicalReferenceUpdateOne?: Maybe<UpdateOneHistoricalReferencePayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  lessonCreateMany?: Maybe<CreateManyLessonPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  lessonCreateOne?: Maybe<CreateOneLessonPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  lessonRemoveById?: Maybe<RemoveByIdLessonPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  lessonRemoveMany?: Maybe<RemoveManyLessonPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  lessonRemoveOne?: Maybe<RemoveOneLessonPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  lessonUpdateById?: Maybe<UpdateByIdLessonPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  lessonUpdateMany?: Maybe<UpdateManyLessonPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  lessonUpdateOne?: Maybe<UpdateOneLessonPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  videoCreateMany?: Maybe<CreateManyVideoPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  videoCreateOne?: Maybe<CreateOneVideoPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  videoRemoveById?: Maybe<RemoveByIdVideoPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  videoRemoveMany?: Maybe<RemoveManyVideoPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  videoRemoveOne?: Maybe<RemoveOneVideoPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  videoUpdateById?: Maybe<UpdateByIdVideoPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  videoUpdateMany?: Maybe<UpdateManyVideoPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  videoUpdateOne?: Maybe<UpdateOneVideoPayload>;
};


export type MutationCharacterCreateManyArgs = {
  records: Array<CreateManyCharacterInput>;
};


export type MutationCharacterCreateOneArgs = {
  record: CreateOneCharacterInput;
};


export type MutationCharacterRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationCharacterRemoveManyArgs = {
  filter: FilterRemoveManyCharacterInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCharacterRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneCharacterInput>;
  sort?: InputMaybe<SortRemoveOneCharacterInput>;
};


export type MutationCharacterUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdCharacterInput;
};


export type MutationCharacterUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyCharacterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyCharacterInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyCharacterInput>;
};


export type MutationCharacterUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneCharacterInput>;
  record: UpdateOneCharacterInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneCharacterInput>;
};


export type MutationHistoricalReferenceCreateManyArgs = {
  records: Array<CreateManyHistoricalReferenceInput>;
};


export type MutationHistoricalReferenceCreateOneArgs = {
  record: CreateOneHistoricalReferenceInput;
};


export type MutationHistoricalReferenceRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationHistoricalReferenceRemoveManyArgs = {
  filter: FilterRemoveManyHistoricalReferenceInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationHistoricalReferenceRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneHistoricalReferenceInput>;
  sort?: InputMaybe<SortRemoveOneHistoricalReferenceInput>;
};


export type MutationHistoricalReferenceUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdHistoricalReferenceInput;
};


export type MutationHistoricalReferenceUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyHistoricalReferenceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyHistoricalReferenceInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyHistoricalReferenceInput>;
};


export type MutationHistoricalReferenceUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneHistoricalReferenceInput>;
  record: UpdateOneHistoricalReferenceInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneHistoricalReferenceInput>;
};


export type MutationLessonCreateManyArgs = {
  records: Array<CreateManyLessonInput>;
};


export type MutationLessonCreateOneArgs = {
  record: CreateOneLessonInput;
};


export type MutationLessonRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationLessonRemoveManyArgs = {
  filter: FilterRemoveManyLessonInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLessonRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneLessonInput>;
  sort?: InputMaybe<SortRemoveOneLessonInput>;
};


export type MutationLessonUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdLessonInput;
};


export type MutationLessonUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyLessonInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyLessonInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyLessonInput>;
};


export type MutationLessonUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneLessonInput>;
  record: UpdateOneLessonInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneLessonInput>;
};


export type MutationVideoCreateManyArgs = {
  records: Array<CreateManyVideoInput>;
};


export type MutationVideoCreateOneArgs = {
  record: CreateOneVideoInput;
};


export type MutationVideoRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationVideoRemoveManyArgs = {
  filter: FilterRemoveManyVideoInput;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationVideoRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneVideoInput>;
  sort?: InputMaybe<SortRemoveOneVideoInput>;
};


export type MutationVideoUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdVideoInput;
};


export type MutationVideoUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyVideoInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  record: UpdateManyVideoInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateManyVideoInput>;
};


export type MutationVideoUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneVideoInput>;
  record: UpdateOneVideoInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortUpdateOneVideoInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int']['output'];
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  perPage: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  analyzeVideo?: Maybe<AnalyzedVideo>;
  characterById?: Maybe<Character>;
  characterByIdLean?: Maybe<Character>;
  characterByIds: Array<Character>;
  characterByIdsLean: Array<Character>;
  characterConnection?: Maybe<CharacterConnection>;
  characterCount?: Maybe<Scalars['Int']['output']>;
  characterDataLoader?: Maybe<Character>;
  characterDataLoaderLean?: Maybe<Character>;
  characterDataLoaderMany: Array<Maybe<Character>>;
  characterDataLoaderManyLean: Array<Maybe<Character>>;
  characterMany: Array<Character>;
  characterManyLean: Array<Character>;
  characterOne?: Maybe<Character>;
  characterOneLean?: Maybe<Character>;
  characterPagination?: Maybe<CharacterPagination>;
  historicalReferenceById?: Maybe<HistoricalReference>;
  historicalReferenceByIdLean?: Maybe<HistoricalReference>;
  historicalReferenceByIds: Array<HistoricalReference>;
  historicalReferenceByIdsLean: Array<HistoricalReference>;
  historicalReferenceConnection?: Maybe<HistoricalReferenceConnection>;
  historicalReferenceCount?: Maybe<Scalars['Int']['output']>;
  historicalReferenceDataLoader?: Maybe<HistoricalReference>;
  historicalReferenceDataLoaderLean?: Maybe<HistoricalReference>;
  historicalReferenceDataLoaderMany: Array<Maybe<HistoricalReference>>;
  historicalReferenceDataLoaderManyLean: Array<Maybe<HistoricalReference>>;
  historicalReferenceMany: Array<HistoricalReference>;
  historicalReferenceManyLean: Array<HistoricalReference>;
  historicalReferenceOne?: Maybe<HistoricalReference>;
  historicalReferenceOneLean?: Maybe<HistoricalReference>;
  historicalReferencePagination?: Maybe<HistoricalReferencePagination>;
  lessonById?: Maybe<Lesson>;
  lessonByIdLean?: Maybe<Lesson>;
  lessonByIds: Array<Lesson>;
  lessonByIdsLean: Array<Lesson>;
  lessonConnection?: Maybe<LessonConnection>;
  lessonCount?: Maybe<Scalars['Int']['output']>;
  lessonDataLoader?: Maybe<Lesson>;
  lessonDataLoaderLean?: Maybe<Lesson>;
  lessonDataLoaderMany: Array<Maybe<Lesson>>;
  lessonDataLoaderManyLean: Array<Maybe<Lesson>>;
  lessonMany: Array<Lesson>;
  lessonManyLean: Array<Lesson>;
  lessonOne?: Maybe<Lesson>;
  lessonOneLean?: Maybe<Lesson>;
  lessonPagination?: Maybe<LessonPagination>;
  videoById?: Maybe<Video>;
  videoByIdLean?: Maybe<Video>;
  videoByIds: Array<Video>;
  videoByIdsLean: Array<Video>;
  videoConnection?: Maybe<VideoConnection>;
  videoCount?: Maybe<Scalars['Int']['output']>;
  videoDataLoader?: Maybe<Video>;
  videoDataLoaderLean?: Maybe<Video>;
  videoDataLoaderMany: Array<Maybe<Video>>;
  videoDataLoaderManyLean: Array<Maybe<Video>>;
  videoMany: Array<Video>;
  videoManyLean: Array<Video>;
  videoOne?: Maybe<Video>;
  videoOneLean?: Maybe<Video>;
  videoPagination?: Maybe<VideoPagination>;
};


export type QueryAnalyzeVideoArgs = {
  url: Scalars['String']['input'];
};


export type QueryCharacterByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCharacterByIdLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCharacterByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsCharacterInput>;
};


export type QueryCharacterByIdsLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsCharacterInput>;
};


export type QueryCharacterConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyCharacterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionCharacterEnum>;
};


export type QueryCharacterCountArgs = {
  filter?: InputMaybe<FilterCountCharacterInput>;
};


export type QueryCharacterDataLoaderArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCharacterDataLoaderLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryCharacterDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryCharacterDataLoaderManyLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryCharacterManyArgs = {
  filter?: InputMaybe<FilterFindManyCharacterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCharacterInput>;
};


export type QueryCharacterManyLeanArgs = {
  filter?: InputMaybe<FilterFindManyCharacterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCharacterInput>;
};


export type QueryCharacterOneArgs = {
  filter?: InputMaybe<FilterFindOneCharacterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneCharacterInput>;
};


export type QueryCharacterOneLeanArgs = {
  filter?: InputMaybe<FilterFindOneCharacterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneCharacterInput>;
};


export type QueryCharacterPaginationArgs = {
  filter?: InputMaybe<FilterFindManyCharacterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyCharacterInput>;
};


export type QueryHistoricalReferenceByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryHistoricalReferenceByIdLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryHistoricalReferenceByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceByIdsLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyHistoricalReferenceInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionHistoricalReferenceEnum>;
};


export type QueryHistoricalReferenceCountArgs = {
  filter?: InputMaybe<FilterCountHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceDataLoaderArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryHistoricalReferenceDataLoaderLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryHistoricalReferenceDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryHistoricalReferenceDataLoaderManyLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryHistoricalReferenceManyArgs = {
  filter?: InputMaybe<FilterFindManyHistoricalReferenceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceManyLeanArgs = {
  filter?: InputMaybe<FilterFindManyHistoricalReferenceInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceOneArgs = {
  filter?: InputMaybe<FilterFindOneHistoricalReferenceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneHistoricalReferenceInput>;
};


export type QueryHistoricalReferenceOneLeanArgs = {
  filter?: InputMaybe<FilterFindOneHistoricalReferenceInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneHistoricalReferenceInput>;
};


export type QueryHistoricalReferencePaginationArgs = {
  filter?: InputMaybe<FilterFindManyHistoricalReferenceInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyHistoricalReferenceInput>;
};


export type QueryLessonByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryLessonByIdLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryLessonByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsLessonInput>;
};


export type QueryLessonByIdsLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsLessonInput>;
};


export type QueryLessonConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyLessonInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionLessonEnum>;
};


export type QueryLessonCountArgs = {
  filter?: InputMaybe<FilterCountLessonInput>;
};


export type QueryLessonDataLoaderArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryLessonDataLoaderLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryLessonDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryLessonDataLoaderManyLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryLessonManyArgs = {
  filter?: InputMaybe<FilterFindManyLessonInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyLessonInput>;
};


export type QueryLessonManyLeanArgs = {
  filter?: InputMaybe<FilterFindManyLessonInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyLessonInput>;
};


export type QueryLessonOneArgs = {
  filter?: InputMaybe<FilterFindOneLessonInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneLessonInput>;
};


export type QueryLessonOneLeanArgs = {
  filter?: InputMaybe<FilterFindOneLessonInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneLessonInput>;
};


export type QueryLessonPaginationArgs = {
  filter?: InputMaybe<FilterFindManyLessonInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyLessonInput>;
};


export type QueryVideoByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryVideoByIdLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryVideoByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsVideoInput>;
};


export type QueryVideoByIdsLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsVideoInput>;
};


export type QueryVideoConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyVideoInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionVideoEnum>;
};


export type QueryVideoCountArgs = {
  filter?: InputMaybe<FilterCountVideoInput>;
};


export type QueryVideoDataLoaderArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryVideoDataLoaderLeanArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryVideoDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryVideoDataLoaderManyLeanArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
};


export type QueryVideoManyArgs = {
  filter?: InputMaybe<FilterFindManyVideoInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyVideoInput>;
};


export type QueryVideoManyLeanArgs = {
  filter?: InputMaybe<FilterFindManyVideoInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyVideoInput>;
};


export type QueryVideoOneArgs = {
  filter?: InputMaybe<FilterFindOneVideoInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneVideoInput>;
};


export type QueryVideoOneLeanArgs = {
  filter?: InputMaybe<FilterFindOneVideoInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneVideoInput>;
};


export type QueryVideoPaginationArgs = {
  filter?: InputMaybe<FilterFindManyVideoInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyVideoInput>;
};

export type RemoveByIdCharacterPayload = {
  __typename?: 'RemoveByIdCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Character>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdHistoricalReferencePayload = {
  __typename?: 'RemoveByIdHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<HistoricalReference>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdLessonPayload = {
  __typename?: 'RemoveByIdLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Lesson>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdVideoPayload = {
  __typename?: 'RemoveByIdVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Video>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveManyCharacterPayload = {
  __typename?: 'RemoveManyCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveManyHistoricalReferencePayload = {
  __typename?: 'RemoveManyHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveManyLessonPayload = {
  __typename?: 'RemoveManyLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveManyVideoPayload = {
  __typename?: 'RemoveManyVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type RemoveOneCharacterPayload = {
  __typename?: 'RemoveOneCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Character>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneHistoricalReferencePayload = {
  __typename?: 'RemoveOneHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<HistoricalReference>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneLessonPayload = {
  __typename?: 'RemoveOneLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Lesson>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveOneVideoPayload = {
  __typename?: 'RemoveOneVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Video>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export enum SortConnectionCharacterEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionHistoricalReferenceEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionLessonEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionVideoEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneHistoricalReferenceInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneLessonInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneVideoInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdCharacterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdCharacterPayload = {
  __typename?: 'UpdateByIdCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Character>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdHistoricalReferenceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdHistoricalReferencePayload = {
  __typename?: 'UpdateByIdHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<HistoricalReference>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdLessonInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateByIdLessonPayload = {
  __typename?: 'UpdateByIdLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Lesson>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdVideoInput = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<UpdateByIdVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<UpdateByIdVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateByIdVideoPayload = {
  __typename?: 'UpdateByIdVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Video>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManyCharacterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManyCharacterPayload = {
  __typename?: 'UpdateManyCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManyHistoricalReferenceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateManyHistoricalReferencePayload = {
  __typename?: 'UpdateManyHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManyLessonInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateManyLessonPayload = {
  __typename?: 'UpdateManyLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManyVideoInput = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<UpdateManyVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<UpdateManyVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateManyVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateManyVideoPayload = {
  __typename?: 'UpdateManyVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']['output']>;
};

export type UpdateManyVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCharacterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOneCharacterPayload = {
  __typename?: 'UpdateOneCharacterPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Character>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneHistoricalReferenceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endYear?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startYear?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneHistoricalReferencePayload = {
  __typename?: 'UpdateOneHistoricalReferencePayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<HistoricalReference>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneLessonInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventName?: InputMaybe<Scalars['String']['input']>;
  historicalReferences?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lessonCreatedOn?: InputMaybe<Scalars['Date']['input']>;
  mainCharacter?: InputMaybe<Scalars['MongoID']['input']>;
  mainPictureUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secondaryCharacters?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateOneLessonPayload = {
  __typename?: 'UpdateOneLessonPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Lesson>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneVideoInput = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  commentCount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  lastFetchOn?: InputMaybe<Scalars['Date']['input']>;
  lessons?: InputMaybe<Array<InputMaybe<UpdateOneVideoLessonsInput>>>;
  likeCount?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['Date']['input']>;
  source?: InputMaybe<UpdateOneVideoSourceInput>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  viewCount?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneVideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId?: InputMaybe<Scalars['MongoID']['input']>;
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateOneVideoPayload = {
  __typename?: 'UpdateOneVideoPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Video>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateOneVideoSourceInput = {
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']['output']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']['output'];
  /** Validation error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']['output']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type Video = {
  __typename?: 'Video';
  _id: Scalars['MongoID']['output'];
  channelId: Scalars['String']['output'];
  channelName: Scalars['String']['output'];
  commentCount: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  lastFetchOn: Scalars['Date']['output'];
  lessons?: Maybe<Array<Maybe<VideoLessons>>>;
  likeCount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  publishedAt: Scalars['Date']['output'];
  source?: Maybe<VideoSource>;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  viewCount: Scalars['Float']['output'];
};

/** A connection to a list of items. */
export type VideoConnection = {
  __typename?: 'VideoConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<VideoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoEdge = {
  __typename?: 'VideoEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Video;
};

export type VideoLessons = {
  __typename?: 'VideoLessons';
  _id?: Maybe<Scalars['MongoID']['output']>;
  data?: Maybe<Lesson>;
  endTime?: Maybe<Scalars['Float']['output']>;
  lessonId: Scalars['MongoID']['output'];
  startTime?: Maybe<Scalars['Float']['output']>;
};

export type VideoLessonsInput = {
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  endTime?: InputMaybe<Scalars['Float']['input']>;
  lessonId: Scalars['MongoID']['input'];
  startTime?: InputMaybe<Scalars['Float']['input']>;
};

/** List of items with pagination. */
export type VideoPagination = {
  __typename?: 'VideoPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']['output']>;
  /** Array of objects. */
  items?: Maybe<Array<Video>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type VideoSource = {
  __typename?: 'VideoSource';
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type VideoSourceInput = {
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type GetLessonsQueryVariables = Exact<{
  filter?: InputMaybe<FilterFindManyLessonInput>;
}>;


export type GetLessonsQuery = { __typename?: 'Query', lessonMany: Array<{ __typename?: 'Lesson', _id: any, name: string, description: string, mainCharacter?: { __typename?: 'Character', name: string } | null, secondaryCharacters: Array<{ __typename?: 'Character', name: string } | null>, historicalReferences: Array<{ __typename?: 'HistoricalReference', name: string, startYear: number, endYear?: number | null } | null> }> };

export type AnalyzeUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type AnalyzeUrlQuery = { __typename?: 'Query', analyzeVideo?: { __typename?: 'AnalyzedVideo', title: string, description: string, duration: string, publishedAt: string, thumbnail?: string | null, channelId: string, channelName: string, commentCount?: number | null, likeCount?: number | null, viewCount?: number | null, lastFetchOn?: any | null, videoId: string } | null };

export type CreateVideoMutationVariables = Exact<{
  record: CreateOneVideoInput;
}>;


export type CreateVideoMutation = { __typename?: 'Mutation', videoCreateOne?: { __typename?: 'CreateOneVideoPayload', record?: { __typename?: 'Video', title: string, duration: string, description: string, source?: { __typename?: 'VideoSource', url: string, type: string } | null } | null } | null };


export const GetLessonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLessons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterFindManyLessonInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessonMany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mainCharacter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"secondaryCharacters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"historicalReferences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startYear"}},{"kind":"Field","name":{"kind":"Name","value":"endYear"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetLessonsQuery, GetLessonsQueryVariables>;
export const AnalyzeUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AnalyzeUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"analyzeVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"channelName"}},{"kind":"Field","name":{"kind":"Name","value":"commentCount"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"lastFetchOn"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]} as unknown as DocumentNode<AnalyzeUrlQuery, AnalyzeUrlQueryVariables>;
export const CreateVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOneVideoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videoCreateOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<CreateVideoMutation, CreateVideoMutationVariables>;