const express = require('express');
const path = require('path');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('PORT'), (err) => {
  if (err) {
    return console.log('Error spinning up', err);
  }

  console.log(`Server now listening on port: ${app.get('PORT')}`);
});
