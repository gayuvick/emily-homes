const fs = require('fs');
const path = require('path');

// This function will read the db.json file and return its contents
exports.handler = async function(event, context) {
  const filePath = path.join(__dirname, '../db.json');
  const data = fs.readFileSync(filePath, 'utf8');
  
  return {
    statusCode: 200,
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
