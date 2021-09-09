var {Client} = require(`pg`);

var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'daiki19712',
    port: '5432'
})

client.connect()

client.query('SELECT shohin_id, tenpo_mei FROM TenpoShohin', (err, res) => {
    console.log(err, res,'OKです')
    client.end()
})