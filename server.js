const express = require('express');
const cors = require("cors");
const axios = require('axios');
const mypool = require("./db/connectdb")


global.pool = mypool;

const app = express();
const getdatarouter = require("./routes/datafetchrouter");
const pool_1 = require('./db/connectdb');

app.use(express.json());
app.use(cors());



app.get('/api/tickers/data', async(req,res)=>{
    
    try {
        const data= await pool.query("SELECT * FROM ticker_data ;");
        console.log(data.rows)
        res.json({status:true,data : data.rows});
    } catch (error) {
        throw error;
        
    }
})
    
    
    // app.use('/api/tickers', async (req, res) => {
    //     try {
    //         const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    //         const data = response.data;
    //         const pairsData = Object.keys(data).slice(0,10).reduce((acc, key) => {
             
    //           const pair = key.toLowerCase();
    //           acc[pair] = {
    //             base_unit: data[key].base_unit,
    //             quote_unit: data[key].quote_unit,
    //             low: parseFloat(data[key].low),
    //             high: parseFloat(data[key].high),
    //             last: parseFloat(data[key].last),
    //             type: data[key].type,
    //             open: parseFloat(data[key].open),
    //             volume: parseFloat(data[key].volume),
    //             sell: parseFloat(data[key].sell),
    //             buy: parseFloat(data[key].buy),
    //             at: parseInt(data[key].at),
    //             name: data[key].name,
    //           };
           
        
    //           return acc;
    //         }, {});
         
        
    //         // Insert each currency pair and its data into the database
    //         for (const pair in pairsData) {
    //           const values = Object.values(pairsData[pair]);
    //           const query = {
    //             text: `INSERT INTO ticker_data (base_unit, quote_unit, low, high, last, type, open, volume, sell, buy, at, name)
    //                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) `,
    //             values,
    //           };
        
    //           await pool.query(query);
              
    //         }
      
    //         res.json({status:true,message:"Data inserted successfully"})
    //         console.log('Data inserted successfully');
    //       } catch (error) {
    //         console.error('Error fetching or saving data:', error);
           
    //         throw error;
    //       } finally {
    //         // Close the database pool to release resources
    //         // await pool.end();
    //       }
    
    // });



app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
