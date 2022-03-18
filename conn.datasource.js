"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'conn',
    connector: 'mongodb',
    url: 'mongodb+srv://mhayde:12345577@cluster0.klsyk.mongodb.net/appres',
    host: 'cluster0.klsyk.mongodb.net',
    port: 27018,
    user: 'mhayde',
    password: '12345577',
    database: 'appres',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let ConnDataSource = class ConnDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
ConnDataSource.dataSourceName = 'conn';
ConnDataSource.defaultConfig = config;
ConnDataSource = (0, tslib_1.__decorate)([
    (0, core_1.lifeCycleObserver)('datasource'),
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.config.conn', { optional: true })),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ConnDataSource);
exports.ConnDataSource = ConnDataSource;
//# sourceMappingURL=conn.datasource.js.map