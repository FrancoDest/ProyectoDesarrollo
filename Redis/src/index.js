const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');
const redis = require('redis');
const cors = require('cors');


const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
});

const app = express();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfcmVzdWx0Ijp7Il9pZCI6IjY0OWI2MTBlMzJmZTNlODVjODNjYjNiYiIsIkNsYXNlIjoiQWRtaW5pc3RyYWRvciIsIkNvbnRyYXNlbmEiOiJmcmFuY28iLCJFc3RhZG8iOnRydWUsIk5vbWJyZSI6IkZyYW5jbyJ9LCJpYXQiOjE2ODc5OTk4NzJ9.mt-NMdHJNy_KEOkMLDQMOdijSARROPWi_qHUph5QhE8';
const clase = 'Administrador';

app.use(cors());

app.use(responseTime());

app.get('/Partes', async (req, res, next) => {

    client.get('Partes', async (err, reply) => {
        if (reply) {
            return res.json(JSON.parse(reply))
        }

        try {
            const response = await axios.get('http://localhost:5000/Partes', {
                headers: {
                    Authorization: `Bearer ${token} ${clase}`
                }
            });

            const responseString = JSON.stringify(response.data);
            client.set('Partes', responseString, (err, reply) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(reply);
                    res.json(response.data);
                }
            });
        } catch (error) {
            next(error);
        }
    })


});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
