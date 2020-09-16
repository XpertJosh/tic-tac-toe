let express = require('express');
let io = require('socketio');

let app = express();

let port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}. http://localhost:${port}.`);
})