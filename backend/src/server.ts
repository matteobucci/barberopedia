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

// server.register(require('fastify-firebase-auth'), {
//   apiKey: "AIzaSyAGsENC_9aRE0FFAYwirNWc4lFVhf9OvsA",
//   authDomain: "barberopedia.firebaseapp.com",
//   projectId: "barberopedia",
//   storageBucket: "barberopedia.appspot.com",
//   messagingSenderId: "316941186824",
//   appId: "1:316941186824:web:b738dab1b525731a6adebd",
//   measurementId: "G-FNM4G9S7CN"
// });

server.register(db, { uri });

server.register(mercurius, {
    schema,
    graphiql: true,
    context: async (request: any, reply: any) => {

      

      const authToken = request?.headers?.authorization;
      
      if (authToken) {
        const token = authToken.replace('Bearer ', '');
  
        return {
          userId: 'loggedUser'
        }
      }else{
        return {
          userId: 'anonymousUser'
        }
      }
    }
} as any); 

await server.register(cors, { 
  // put your options here
})

server.post('/signin', async (request, reply) => {
 
  return { hello: 'world' };
});

await server.register(config);
await server.register(routes);
await server.ready();

export default server;
