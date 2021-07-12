const fs = require('fs');

fs.writeFileSync('./.env', `API_KEY_OPEN_WEATHER=${process.env.API_KEY_OPEN_WEATHER}\n`);
