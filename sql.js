const sql = require('mssql')

const config = {
    user: 'yy316004',
    password: 'yy209036',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'INX_AGVC',

}

// ;(async () =>{
//     try {
//         let pool = await sql.connect(config)
//         let result1 = await pool.request()
//             .query('SELECT * FROM TAG_INFO')
            
//         console.dir(result1)
    
//     } catch (err) {
//         // ... error checks
//     }
// })();
 
// sql.on('error', err => {
//     // ... error handler
// });


var test = (()=>{return 1;})();
console.log(test);