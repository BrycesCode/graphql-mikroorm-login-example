"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220106051837 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220106051837 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "titles" text not null);');
    }
}
exports.Migration20220106051837 = Migration20220106051837;
//# sourceMappingURL=Migration20220106051837.js.map