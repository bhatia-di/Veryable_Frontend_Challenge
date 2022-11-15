import express from "express";
import UserRoute  from "./routes/UserRoute";

const app = express();
const port = 9000;

app.disable('etag');

app.use( "/api/users", UserRoute );



app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});