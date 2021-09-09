var {Client} = require(`pg`);

var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'daiki19712',
    port: '5432'
})

client.connect()

client.query('DELETE FROM Shohin', (err, res) => {
    console.log(err, res,'削除されました')
    client.end()
})