const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');

const app = express();



app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}))



app.listen(5000, () => {
    console.log('I AM Listening...');
})