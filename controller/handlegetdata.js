const axios = require("axios");

const fetchAndSaveData = async (req, res) => {


    try {
        const data = await pool.query("SELECT * FROM ticker_data ;");
        // console.log(data.rows)
        res.json({ status: true, data: data.rows });
    } catch (error) {
        throw error;

    }

};

module.exports = { fetchAndSaveData }
