import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import helmetCSP from 'helmet-csp';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from "./routes/api.js";
import bodyParser from "body-parser";
import path from 'path';

const app = express();
const PORT = 5030;

app.use(cors());
app.use(helmet());
app.use(hpp());

app.use(cookieParser());

app.use(helmetCSP());
app.use(bodyParser.json())

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb' }));
app.get("/", (req, res) => {
    return res.send("welcome, saurav");
});
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);
app.use('/api/v1', router);
app.use(express.static('client/dist'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App Run @${PORT}`);
});

export default app;