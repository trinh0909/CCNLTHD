// const { render } = require("ejs");
// const express = require("express"); // Thêm dòng này để khai báo express
// const app = express();

// app.set("view engine","ejs")
// app.set("view","./image")

// const port = 3000;

// app.get("/", (req,res)=>{
//     res.render("login.ejs")
// })

// app.listen(port, () => console.log("Ứng dụng đang chạy trên port 3000"));

const express = require("express"); 
const app = express();

app.use(express.json()); // Để phân tích JSON (dành cho API JSON)
app.use(express.urlencoded({ extended: true })); // Để phân tích dữ liệu từ form


app.set("view engine", "ejs");
// app.set("views", "./views"); // Đảm bảo có thư mục "views" trong thư mục dự án của bạn

const port = 3000;

var mysql = require('mysql');


var db = mysql.createConnection({
   host: 'localhost', user: 'root', password: '', 
   database: 'bookshop'
}); 



// module.exports = db; 

db.connect((err) => {
    if (err) {
      console.error('Lỗi kết nối: ', err);
      return;
    }
    console.log('Kết nối thành công!');
  });


app.get("/", (req, res) => {
    res.render("homepage"); // Không cần thêm .ejs
});


app.post("/homepage", (req, res) => {
    console.log(req.body);  // In ra để kiểm tra dữ liệu gửi từ form
    const { username, pass } = req.body;
    if (!username || !pass) {
        return res.status(400).send('Username or password missing');
    }

    var sql = `SELECT * FROM account WHERE username = '${username}' AND password = '${pass}'`;
    db.query(sql, (err, result) => {
        if (err) {
            res.render('login');
        }

        if (result.length > 0) {
            res.render('homepage', { username: username });
        } else {
            res.render('login');
        }
    });
});

app.listen(port, () => console.log("Ứng dụng đang chạy trên port 3000"));
