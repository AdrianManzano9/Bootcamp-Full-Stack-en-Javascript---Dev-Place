const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");
const cors = require('cors');
const dotenv = require('dotenv');
require("./config/relations")

dotenv.config();


app.use(cors())
app.use(express.json());
app.use(userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo por el puerto ${process.env.PORT}`);
})

