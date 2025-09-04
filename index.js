const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với website Express.js! abc');
});

app.get('/about', (req, res) => {
  res.send('Đây là trang giới thiệu. 123');
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});

const router1 = express.Router();
router1.get('/product',(req,res)=>{
	res.json('router 1 product')

})
router1.get('/cart',(req,res)=>{
	res.json(' cart retouer 1')
})
app.use('/api/v1/', router1);