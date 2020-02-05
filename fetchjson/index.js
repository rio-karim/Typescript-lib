'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var url = 'https://jsonplaceholder.typicode.com/posts/1';
var getTodo = axios_1['default'].get(url);
getTodo.then(function(res) {
  const { data } = res;
  const { ID, title, finished } = data;
  console.log(`The Todo with ID: ${ID}
  Has a title of: ${title}
  Is it finished? ${finished}`);
});
