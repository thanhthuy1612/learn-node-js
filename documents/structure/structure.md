# .env
https://www.npmjs.com/package/dotenv

# nodemon
tự động cập nhật khi code thay đổi

# static file
/public/*

# mô hình MVC

## Mô hình MVC - MVC Design Pattern
Design Pattern là cách 'giải pháp thiết kế' để xử lý bài toán một cách hiệu quả nhất. Với mô hình xây dựng website, mô hình MVC là cơ bản nhất, cũng như được sử dụng rộng rãi.

## MVC là viết tắt của Model - View - Controller

- View
View là kết quả nhìn thấy của client.
Với mô hình client - server, client gửi request lên server, server gửi response lại cho client, view chính là kết quả người dùng nhận được.

- Controller
Controller chính là nơi điều hướng dữ liệu (data)

+ Chức năng: Điều phối giữa Model và View.
+ Nhiệm vụ:
    Nhận yêu cầu từ người dùng (thông qua các sự kiện).
    Xử lý yêu cầu, tương tác với Model để lấy hoặc cập nhật dữ liệu.
    Chọn View phù hợp để hiển thị dữ liệu cho người dùng.

- Model
Model (theo lập trình hướng đối tượng, giúp mô hình hóa 'code' thành các thành phần có thể 'tái sử dụng' và 'định nghĩa tiêu chuẩn để sử dụng data) trong ứng dụng

+ Chức năng: Quản lý dữ liệu và logic nghiệp vụ của ứng dụng.
+ Nhiệm vụ:
    Tương tác với cơ sở dữ liệu.
    Định nghĩa các đối tượng và quy tắc nghiệp vụ.
    Cung cấp dữ liệu cho View và nhận dữ liệu từ Controller.
