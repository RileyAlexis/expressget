let express = require('express');
let app = express();
const port = 5001;

const quoteList = require('./quoteList.js');
app.use(express.static('server/public'));

//Sets path and data to send back to client
app.get('/quotes', function(req, res) {
    console.log('Request for /quotes was made');
    res.send(quoteList);
});

app.listen(port, function() {
    console.log('listening on port', port)
});

//4 types of routes:
//get
//post
//put
//delete
//CRUD - Create Read Update Delete

//status codes:
//server request always includes status codes
// 200 - Okay - everything worked as expected
// 201 - Created - record was created without issue
// 400 - Bad Request - something went wrong in your route
// 404 - Not found
// 500 - Server Error - something bad happened on the server