json-schema2sequelize
=====================

Just a simple JSON to Sequelize code generator, because I needed it. Not many syntax options, but I expect that to change over time.

Usage
-----

```javascript
const converter = require('json-schema2sequelize');
converter.toSequelize('tableName', jsonSchema, {});
//returns an array of create statements
converter.toSequelizeUpdates('tableName', newJSONSchema, oldJSONSchema, {});
//returns two arrays of SQL statements in an object as `ups` and `downs
converter.toSequelizeInsert('tableName', jsonObject, {});
//returns a single insert statement from the object(s) provided
```

Testing

```bash
mocha
```
