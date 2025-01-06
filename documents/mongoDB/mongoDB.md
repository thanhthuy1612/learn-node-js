# Mongoose là gì
Mongoose là 1 thư viện của Node.JS, giúp xử lý và thao tác với MongoDB thông qua ODM.

ODM: Object Data (Document) Mapping
Validate (Process) dữ liệu trước khi lưu xuống database Mongo. Tức là, tạo khái niệm Schema (Model)

# Lưu dưới dạng BSON 
BSON: lưu binary, tối đa lưu 16MB
Định dạng type là Buffer

## Ưu điểm
- Lưu nguyên file cần lưu vào database dưới dạng BSON
- Không cần xử lý nhiều coding

## Nhược điểm
- Tốc độ truy cập chậm, không tối ưu vì cần thao tác đọc ghi database với file
- Bị giới hạn dung lượng bới BSON (16MB với MongoDB v6)


# Lưu trữ dưới dạng GridFS (file system)

## Ưu điểm
- Lưu nguyên file cần lưu vào database (dưới dạng đặc biệt - GridFS)
- Đáp ứng được nhu cầu lưu trữ file lớn (tương tự BLOB của SQL)
- Max file size (k giới hạn phụ thuộc vào tài nguyên server)

## Nhược điểm
- Tốc độ truy cập chậm, không tối ưu (vì cần thao tác đọc/ghi database với file)
- Nếu lưu nhiều file lớn sẽ dẫn tới kích thước database bị phình
- Để thao tác với định dạng này, cần sử dụng API trực tiếp của MongoDB (thay vì thông qua ORM Mongoose)

## Ý tưởng:
- Sử dụng API (hàm) GridFS của MongoDB
- File gốc ban đầu sẽ được phân tán nhỏ ra, và lưu vào 2 collections (do MongoDB tự tạo):
    + chunk collection (stores the document parts) : lưu trữ file (break nhỏ ra dưới dạng binary)
    + file collection (stores the consequent additional metadata) : lưu trữ thông tin file, ví dụ filename, id..
- Để query 1 file, chúng ta sẽ lại dựa vào API GridFS, sau đấy truyền vào (filename, id...) để lấy lên.


# Lưu trữ file không dùng database

## Ưu điểm:
- Không lưu trữ file dưới database
- Tốc độ truy cập nhanh

## Nhược điểm:
- Với cách làm 1, cần quan tâm tới việc backup (nếu mất data), tính mở rộng (nếu lưu nhiều file), tính an toàn (security)
nếu lưu thông tin nhạy cảm (thông tin cá nhân khách hàng...)

- Với cách làm 2 là perfect, chỉ mỗi cái tốn tiền. Cách 1 tốn tiền đầu tư, phần còn lại tự lo.
Còn cách này, dùng bao nhiêu trả bấy nhiêu. pay as you go

## Cách dùng:
- lưu file vào server (có thể là server đang code hoặc server remote)
- Chỉ lưu đường dẫn tới ảnh vào database

# Với Node.js, các thư viện nổi tiếng thường dùng để upload file:
+ multer : https://www.npmjs.com/package/multer
+ formidable: https://www.npmjs.com/package/formidable
+ busboy: https://www.npmjs.com/package/busboy
+ express-fileupload: https://www.npmjs.com/package/express-fileupload
