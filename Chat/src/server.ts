import { httpServer } from './http';
import './webSocket';
// import { Connection } from './connection';

// const connection = new Connection();

httpServer.listen(process.env.PORT || 8080, () => {
  // connection.connect();
  console.log(`Server is running, on port ${process.env.PORT || 8080} `);
});
