const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    password:'sécuritéinformatiqueest importante',
    database:'datawarehouse',
    host:'localhost',
    port:5432,
});

module.exports = pool;