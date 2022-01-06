import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
        user: "postgres",
        password:"postgres",
        migrations: {
                path: path.join(__dirname, './migrations'), // path to the folder with migrations
                pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
        },
        entities: [Post, User],
        dbName: "toDo1",
        type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];

