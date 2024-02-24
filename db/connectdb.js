const Pool = require("pg").Pool;
require("dotenv").config();

const pool_1 = new Pool({
    connectionString: process.env.POSTGRES_URL
})

pool_1.connect((err) => {
    try {
        if (err) throw err;
        console.log("Connect Postgresql Successfully !");

    } catch (error) {

    }

})

module.exports = pool_1;