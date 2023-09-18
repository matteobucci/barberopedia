import fastify from 'fastify';
import config from './plugins/config';
import routes from './routes/index';
import mercurius from 'mercurius';
import cors from '@fastify/cors'
import schema from './graphql/schema'


const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/barberopedia';

import db from './config/index'

const server = fastify({
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    }
  },
  logger: {
    level: process.env.LOG_LEVEL,
  },
});

server.register(db, { uri });

server.register(mercurius, {
    schema,
    graphiql: true
} as any); 

await server.register(cors, { 
  // put your options here
})

await server.register(config);
await server.register(routes);
await server.ready();

export default server;
