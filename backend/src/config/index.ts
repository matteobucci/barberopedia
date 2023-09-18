import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import { Character } from '../models/character';
import { HistoricalReference } from '../models/historicalReference';
import { Lesson } from '../models/lesson';
import { Video } from '../models/video';

const models = { Character, HistoricalReference, Lesson, Video };
const ConnectDB = async (fastify: any, options: any) => {
    try {
        mongoose.connection.on('connected', () => {
            fastify.log.info({ actor: 'MongoDB' }, 'connected');
        });
        mongoose.connection.on('disconnected', () => {
            fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
        });
        const db = await mongoose.connect(options.uri, {});
        // decorates fastify with our model
        fastify.decorate('db', { models });
    } catch (error) {
        console.error(error);
    }
};
export default fp(ConnectDB);