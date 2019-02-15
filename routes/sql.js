const sql = require('mssql')

const config = {
    user: 'sa',
    password: '..cmo123',
    server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance
    database: 'INX_AGVC',

}

// ;(async () =>{
//     try {
//         let pool = await sql.connect(config)
//         let result1 = await pool.request()
//             .query('SELECT * FROM TAG_INFO')
            
//         console.log(result1);  
//     } catch (err) {
//         // ... error checks
//         console.log(err)
//     }
// })();
 



module.exports = {
    queryTag : async function()
    {
       try {
           let pool = await sql.connect(config);
           let result1 = await pool.request().query('SELECT * FROM TAG_INFO');
           console.log("query end");
           sql.close();
           return result1;
       } catch (err) {
           // ... error checks
           console.log(err);
   
        }
    },
    queryTagObj : async function()
    {
       try {
           let pool = await sql.connect(config);
           let result1 = await pool.request().query('SELECT * FROM TAG_OBJ');
           console.log("query end");
           sql.close();
           return result1;
       } catch (err) {
           // ... error checks
           console.log(err);
   
        }
    }

};

module.exports.test = true;




