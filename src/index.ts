import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import {buildSchema} from 'type-graphql';
import "reflect-metadata";
import { UserResolver } from "./resolvers/user";
import { PostResolver } from "./resolvers/post";
import { MyContext } from "./types";



const main = async () => {

    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PostResolver, UserResolver],
            validate: false
        }),
        context: ({req, res}): MyContext => ( {em: orm.em, req, res} ),
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.listen(4000, () => {
        console.log('server started on port 4000')
    });

};

main();

