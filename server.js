const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;


//users

//posts



//albums


app.use(bodyParser.json())









const rootRouter = require('./routes').rootRouter;
app.use('/api', rootRouter);


app.listen(port);
console.log(`server listening on port ${port}`);






