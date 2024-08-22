import { httpServer } from './http';
import './webSocket';


httpServer.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running, on port ${process.env.PORT || 8080} `);
});
