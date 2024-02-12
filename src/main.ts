import express from 'express';
import axios from 'axios'
import { Root,Event } from './types';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});


setInterval(() => {
  axios.get<Root>('https://api.sofascore.com/api/v1/sport/football/events/live')
    .then(response => {
      const mappedEvents: Event[] = []
      response.data.events.filter(event => event.hasXg).forEach(event => {
        mappedEvents.push(event)
      })
      
      // Process the data as needed
    })
    .then()
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle error
    });
}, 5000); // 5000 milliseconds = 5 seconds