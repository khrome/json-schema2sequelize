const should = require('chai').should();
const converter = require('../json-schema2sequelize');

const common = require('./common');

describe('json-schema2sequelize', ()=>{
    describe('common suite', ()=>{
        it('create statement', ()=>{
            let statements = converter.toSequelize('tableName', common.schema, {});
            should.exist(statements);
            statements.length.should.equal(1);
            statements[0].should.equal(common.create);
        });

        it('update statement', ()=>{
            let newSchema = JSON.parse(JSON.stringify(common.schema));
            delete newSchema.properties.age;
            newSchema.properties.score = {
                "description": "Score of the user's work",
                "type": "integer",
                "minimum": 0
            }
            let statements = converter.toSequelizeUpdates('tableName', newSchema, common.schema, {});
            should.exist(statements);
            statements.should.deep.equal(common.update);
        });

        it('insert statement', ()=>{
            let statement = converter.toSequelizeInsert('tableName',common.instance, {});
            should.exist(statement);
            statement.should.equal(common.insert);
        });
    });
});
