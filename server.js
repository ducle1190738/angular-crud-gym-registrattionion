const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Đường dẫn tới tệp JSON mô phỏng dữ liệu
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

let nextId = 1; // Khởi tạo giá trị ban đầu cho id

// Intercept POST requests to /dangky and modify id field
server.post('/dangky', (req, res, next) => {
    // Đặt giá trị id cho đối tượng mới
    req.body.id = nextId++;
    next();
});

server.use(router);
server.listen(8080, () => {
    console.log('JSON Server is running');
});