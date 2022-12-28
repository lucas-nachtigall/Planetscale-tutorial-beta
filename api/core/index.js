const mysql = require('mysql2/promise')

exports.handler = async (event) => {
    try {
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        const [rows] = await connection.execute('SELECT * FROM users');

        return {
            statusCode: 200,
            body: JSON.stringify({
                rows,
            }),
        };
    } catch (error) {
        console.error(error);
    }
};