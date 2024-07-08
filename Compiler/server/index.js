const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", async (req, res) => {
    //getting the required data from the request
    const { code, language, input } = req.body;

    const data = {
        source_code: code,
        language_id: language === "python" ? 71 : 63, // 71 for Python 3, 63 for JavaScript (Node.js)
        stdin: input
    };

    const config = {
        method: 'post',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        data: data
    };

    try {
        const response = await Axios(config);
        const token = response.data.token;

        // Polling the API to get the result
        let result;
        while (true) {
            result = await Axios({
                method: 'get',
                url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
                headers: {
                    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
                }
            });

            if (result.data.status.id !== 1 && result.data.status.id !== 2) {
                break;
            }
        }

        res.send(result.data);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing your request.");
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
