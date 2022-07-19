import app from './app.js';
import conf from './config/conf.js';

app.listen(conf.port, () => {
  console.log(`Server is running on port ${conf.port}\n`);
});
