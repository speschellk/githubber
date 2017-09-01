const express = require('express');

const app = express();

app.set('env', process.env.NODE_ENV);
app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'), (err) => {
  if (err) {
    return console.log('Error spinning up', err);
  }

  console.log(`Server now listening on port: ${app.get('PORT')}`);
});