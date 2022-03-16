// from: https://json-schema.org/learn/miscellaneous-examples.html
const common = {
    schema : {
        "$id": "https://example.com/person.schema.json",
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "Person",
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string",
                "description": "The person's first name."
            },
            "lastName": {
                "type": "string",
                "description": "The person's last name."
            },
            "age": {
                "description": "Age in years which must be equal to or greater than zero.",
                "type": "integer",
                "minimum": 0
            }
        }
    },
    instance : {
        "firstName": "Ed",
        "lastName": "Beggler",
        "age": 999
    },
    create : `class TableName extends Model {}
TableName.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull : true
    }
    lastName: {
        type: DataTypes.STRING,
        allowNull : true
    }
    age: {
        type: DataTypes.INTEGER,
        allowNull : true
    }
}, {
    sequelize,
    modelName: 'tableName'
});
`,
    insert : `module.exports = async ()=>{
    await User.create({"firstName":"Ed","lastName":"Beggler","age":999});
};`,
    update : {
        ups: [
            "queryInterface.addColumn( 'tableName', 'score', {\n" +
              '    type: DataTypes.INTEGER,\n' +
              '    allowNull : true\n' +
              '})',
            "queryInterface.removeColumn( 'tableName', 'age')"
        ],
        downs: [
            "queryInterface.removeColumn( 'tableName', 'score')",
            "queryInterface.addColumn( 'tableName', 'age', {\n" +
              '    type: DataTypes.INTEGER,\n' +
              '    allowNull : true\n' +
              '})'
        ]
    }
};

module.exports = common;
