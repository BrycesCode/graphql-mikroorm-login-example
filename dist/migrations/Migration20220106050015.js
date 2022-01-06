"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220106050015 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220106050015 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220106050015 = Migration20220106050015;
//# sourceMappingURL=Migration20220106050015.js.map