'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');

module.exports.append = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      data: data,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t append the data.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};