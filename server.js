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

app.set("view engine", "ejs");
// app.set("views", "./views"); // Đảm bảo có thư mục "views" trong thư mục dự án của bạn

const port = 3000;

app.get("/", (req, res) => {
    res.render("dangky"); // Không cần thêm .ejs
});

app.listen(port, () => console.log("Ứng dụng đang chạy trên port 3000"));
