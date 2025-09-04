const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với website Express.js!');
});

app.get('/about', (req, res) => {
  res.send('Đây là trang giới thiệu. 123');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});