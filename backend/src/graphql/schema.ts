
import { schemaComposer } from 'graphql-compose';
import { composeMongoose } from 'graphql-compose-mongoose';
import { Character } from 'models/character';
import { HistoricalReference } from 'models/historicalReference';
import { ILesson, Lesson } from 'models/lesson';
import { Video } from 'models/video';
import { analyzeYoutubeVideo } from './handlers';

const customizationOptions = {};

const CharacterTC = composeMongoose(Character, customizationOptions);

schemaComposer.Query.addFields({
  characterById: CharacterTC.mongooseResolvers.findById(),
  characterByIds: CharacterTC.mongooseResolvers.findByIds(),
  characterOne: CharacterTC.mongooseResolvers.findOne(),
  characterMany: CharacterTC.mongooseResolvers.findMany(),
  characterDataLoader: CharacterTC.mongooseResolvers.dataLoader(),
  characterDataLoaderMany: CharacterTC.mongooseResolvers.dataLoaderMany(),
  characterByIdLean: CharacterTC.mongooseResolvers.findById({ lean: true }),
  characterByIdsLean: CharacterTC.mongooseResolvers.findByIds({ lean: true }),
  characterOneLean: CharacterTC.mongooseResolvers.findOne({ lean: true }),
  characterManyLean: CharacterTC.mongooseResolvers.findMany({ lean: true }),
  characterDataLoaderLean: CharacterTC.mongooseResolvers.dataLoader({ lean: true }),
  characterDataLoaderManyLean: CharacterTC.mongooseResolvers.dataLoaderMany({ lean: true }),
  characterCount: CharacterTC.mongooseResolvers.count(),
  characterConnection: CharacterTC.mongooseResolvers.connection(),
  characterPagination: CharacterTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  characterCreateOne: CharacterTC.mongooseResolvers.createOne(),
  characterCreateMany: CharacterTC.mongooseResolvers.createMany(),
  characterUpdateById: CharacterTC.mongooseResolvers.updateById(),
  characterUpdateOne: CharacterTC.mongooseResolvers.updateOne(),
  characterUpdateMany: CharacterTC.mongooseResolvers.updateMany(),
  characterRemoveById: CharacterTC.mongooseResolvers.removeById(),
  characterRemoveOne: CharacterTC.mongooseResolvers.removeOne(),
  characterRemoveMany: CharacterTC.mongooseResolvers.removeMany(),
});

const HistoricalReferenceTC = composeMongoose(HistoricalReference, customizationOptions);

schemaComposer.Query.addFields({
  historicalReferenceById: HistoricalReferenceTC.mongooseResolvers.findById(),
  historicalReferenceByIds: HistoricalReferenceTC.mongooseResolvers.findByIds(),
  historicalReferenceOne: HistoricalReferenceTC.mongooseResolvers.findOne(),
  historicalReferenceMany: HistoricalReferenceTC.mongooseResolvers.findMany(),
  historicalReferenceDataLoader: HistoricalReferenceTC.mongooseResolvers.dataLoader(),
  historicalReferenceDataLoaderMany: HistoricalReferenceTC.mongooseResolvers.dataLoaderMany(),
  historicalReferenceByIdLean: HistoricalReferenceTC.mongooseResolvers.findById({ lean: true }),
  historicalReferenceByIdsLean: HistoricalReferenceTC.mongooseResolvers.findByIds({ lean: true }),
  historicalReferenceOneLean: HistoricalReferenceTC.mongooseResolvers.findOne({ lean: true }),
  historicalReferenceManyLean: HistoricalReferenceTC.mongooseResolvers.findMany({ lean: true }),
  historicalReferenceDataLoaderLean: HistoricalReferenceTC.mongooseResolvers.dataLoader({ lean: true }),
  historicalReferenceDataLoaderManyLean: HistoricalReferenceTC.mongooseResolvers.dataLoaderMany({ lean: true }),
  historicalReferenceCount: HistoricalReferenceTC.mongooseResolvers.count(),
  historicalReferenceConnection: HistoricalReferenceTC.mongooseResolvers.connection(),
  historicalReferencePagination: HistoricalReferenceTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  historicalReferenceCreateOne: HistoricalReferenceTC.mongooseResolvers.createOne(),
  historicalReferenceCreateMany: HistoricalReferenceTC.mongooseResolvers.createMany(),
  historicalReferenceUpdateById: HistoricalReferenceTC.mongooseResolvers.updateById(),
  historicalReferenceUpdateOne: HistoricalReferenceTC.mongooseResolvers.updateOne(),
  historicalReferenceUpdateMany: HistoricalReferenceTC.mongooseResolvers.updateMany(),
  historicalReferenceRemoveById: HistoricalReferenceTC.mongooseResolvers.removeById(),
  historicalReferenceRemoveOne: HistoricalReferenceTC.mongooseResolvers.removeOne(),
  historicalReferenceRemoveMany: HistoricalReferenceTC.mongooseResolvers.removeMany(),
});

const LessonTC = composeMongoose(Lesson, customizationOptions);

LessonTC.addRelation('mainCharacter', {
  resolver: () => CharacterTC.mongooseResolvers.findById(),
  prepareArgs: {
    _id: (source: ILesson) => source.mainCharacter,
  },
  projection: { mainCharacter: true }
});

LessonTC.addRelation(
  'secondaryCharacters',
  {
    resolver: () => CharacterTC.mongooseResolvers.dataLoaderMany(),
    prepareArgs: {
      _ids: (source: ILesson) => source.secondaryCharacters
    },
    projection: { secondaryCharacters: 1 },
  }
);

LessonTC.addRelation(
  'historicalReferences',
  {
    resolver: () => HistoricalReferenceTC.mongooseResolvers.dataLoaderMany(),
    prepareArgs: {
      _ids: (source: ILesson) => source.historicalReferences
    },
    projection: { historicalReferences: 1 },
  }
);

schemaComposer.Query.addFields({
  lessonById: LessonTC.mongooseResolvers.findById(),
  lessonByIds: LessonTC.mongooseResolvers.findByIds(),
  lessonOne: LessonTC.mongooseResolvers.findOne(),
  lessonMany: LessonTC.mongooseResolvers.findMany(),
  lessonDataLoader: LessonTC.mongooseResolvers.dataLoader(),
  lessonDataLoaderMany: LessonTC.mongooseResolvers.dataLoaderMany(),
  lessonByIdLean: LessonTC.mongooseResolvers.findById({ lean: true }),
  lessonByIdsLean: LessonTC.mongooseResolvers.findByIds({ lean: true }),
  lessonOneLean: LessonTC.mongooseResolvers.findOne({ lean: true }),
  lessonManyLean: LessonTC.mongooseResolvers.findMany({ lean: true }),
  lessonDataLoaderLean: LessonTC.mongooseResolvers.dataLoader({ lean: true }),
  lessonDataLoaderManyLean: LessonTC.mongooseResolvers.dataLoaderMany({ lean: true }),
  lessonCount: LessonTC.mongooseResolvers.count(),
  lessonConnection: LessonTC.mongooseResolvers.connection(),
  lessonPagination: LessonTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  lessonCreateOne: LessonTC.mongooseResolvers.createOne(),
  lessonCreateMany: LessonTC.mongooseResolvers.createMany(),
  lessonUpdateById: LessonTC.mongooseResolvers.updateById(),
  lessonUpdateOne: LessonTC.mongooseResolvers.updateOne(),
  lessonUpdateMany: LessonTC.mongooseResolvers.updateMany(),
  lessonRemoveById: LessonTC.mongooseResolvers.removeById(),
  lessonRemoveOne: LessonTC.mongooseResolvers.removeOne(),
  lessonRemoveMany: LessonTC.mongooseResolvers.removeMany(),
});

const VideoTC = composeMongoose(Video, customizationOptions);

VideoTC.getFieldOTC('lessons').addRelation(
  'data',
  {
    resolver: () => LessonTC.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source: { lessonId: string }) => source.lessonId
    },
    projection: { lessons: 1 },
  }
);

schemaComposer.Query.addFields({
  videoById: VideoTC.mongooseResolvers.findById(),
  videoByIds: VideoTC.mongooseResolvers.findByIds(),
  videoOne: VideoTC.mongooseResolvers.findOne(),
  videoMany: VideoTC.mongooseResolvers.findMany(),
  videoDataLoader: VideoTC.mongooseResolvers.dataLoader(),
  videoDataLoaderMany: VideoTC.mongooseResolvers.dataLoaderMany(),
  videoByIdLean: VideoTC.mongooseResolvers.findById({ lean: true }),
  videoByIdsLean: VideoTC.mongooseResolvers.findByIds({ lean: true }),
  videoOneLean: VideoTC.mongooseResolvers.findOne({ lean: true }),
  videoManyLean: VideoTC.mongooseResolvers.findMany({ lean: true }),
  videoDataLoaderLean: VideoTC.mongooseResolvers.dataLoader({ lean: true }),
  videoDataLoaderManyLean: VideoTC.mongooseResolvers.dataLoaderMany({ lean: true }),
  videoCount: VideoTC.mongooseResolvers.count(),
  videoConnection: VideoTC.mongooseResolvers.connection(),
  videoPagination: VideoTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  videoCreateOne: VideoTC.mongooseResolvers.createOne(),
  videoCreateMany: VideoTC.mongooseResolvers.createMany(),
  videoUpdateById: VideoTC.mongooseResolvers.updateById(),
  videoUpdateOne: VideoTC.mongooseResolvers.updateOne(),
  videoUpdateMany: VideoTC.mongooseResolvers.updateMany(),
  videoRemoveById: VideoTC.mongooseResolvers.removeById(),
  videoRemoveOne: VideoTC.mongooseResolvers.removeOne(),
  videoRemoveMany: VideoTC.mongooseResolvers.removeMany(),
});


const analyzeUrlResolver = schemaComposer.createResolver({
  name: 'analyzeUrl',
  type: `type AnalyzeUrl {
            title: String!
            description: String!
            duration: String!
            publishedAt: String!
            thumbnail: String!
            channelId: String!
            channelName: String!
            id: String!
        }`,
  args: {
    url: 'String!',
  },
  resolve: analyzeYoutubeVideo
});

// And add this resolver to your Schema
schemaComposer.Query.addFields({
  analyzeUrl: analyzeUrlResolver,
});

const schema = schemaComposer.buildSchema();
export default schema;