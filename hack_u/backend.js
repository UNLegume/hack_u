const express = require('express')
const fs = require('fs')

const app = express()
// CORS を許可する
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// axios を require してインスタンスを生成する
const axiosBase = require('axios');
const axios = axiosBase.create({
    baseURL: 'https://7628cfca.ngrok.io', // バックエンドB のURL:port を指定する
    responseType: 'arraybuffer',
    headers: {
        'Content-Type': 'image/jpeg',
    },
});

app.get('/', (req, res) => {

  let url = 'http://7628cfca.ngrok.io/request/' + req.query.color +
            '/'                                  + req.query.pattern +
            '/'                                  + req.query.length  +
            '/';

    axios.get(url)
    .then(function (response) {
        var img_base64 = base64Encode(response.data)
        //var img_base64
        fs.writeFileSync('./result.jpg', new Buffer.from(response.data), 'binary')
        /*fs.readFile('./result.jpg', 'base64', function (err, data) {
            if (err) throw err;
            img_base64 = data
        })
        */

    })
    .catch(function (error) {
        console.log("err:", error)
    })
})

function base64Encode(imgData) {
    // arraybuffer で渡された imgData を base64 エンコードする
    const base64Encoded = imgData.toString('base64');
    return base64Encoded;
}

app.listen(8000, () => console.log('listening...'))
