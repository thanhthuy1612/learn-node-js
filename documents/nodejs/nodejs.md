Web Server với Node.JS

Node.JS là một nền tảng (platform) có thể viết mã nguồn Backend với ngôn ngữ Javascript. Trong chương này, chúng ta sẽ viết chương trình Hello World với Node.JS từ những dòng code đầu tiên, đồng thời, tìm hiểu về framework Express (rất phổ biến để viết backend website Node.JS)

# Node.JS là platform (môi trường), không phải library (thư viện) hay framework.

## Platform (Môi trường)
- Định nghĩa: Là một môi trường tổng thể mà trong đó các ứng dụng có thể được phát triển và triển khai. Nó có thể bao gồm hệ điều hành, phần cứng, và các dịch vụ hỗ trợ khác.
- Chức năng: Cung cấp các công cụ, API, và dịch vụ cần thiết để phát triển, vận hành và quản lý ứng dụng. Một platform có thể hỗ trợ nhiều ngôn ngữ lập trình và công nghệ khác nhau.
- Ví dụ:
    + Hệ điều hành: Windows, macOS, Linux.
    + Cloud platforms: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP).
    + Mobile platforms: iOS, Android.
## Library (Thư viện)
- Định nghĩa: Là một tập hợp các hàm, lớp, hoặc module được viết sẵn để giúp lập trình viên thực hiện các tác vụ cụ thể mà không cần viết lại mã từ đầu.
- Chức năng: Cung cấp các chức năng có thể được sử dụng và gọi từ mã nguồn của ứng dụng. Lập trình viên có quyền kiểm soát hơn trong cách sử dụng thư viện, thường chỉ cần gọi các hàm cần thiết.
- Ví dụ: jQuery, Lodash, NumPy.
## Framework
- Định nghĩa: Là một tập hợp các công cụ và quy tắc được thiết kế để hỗ trợ quá trình phát triển ứng dụng, cung cấp cấu trúc và hướng dẫn cho lập trình viên.
- Chức năng: Đưa ra một kiến trúc sẵn có cho ứng dụng và quy định cách thức mà mã nguồn nên được tổ chức. Framework thường sử dụng mô hình "inversion of control", nghĩa là framework sẽ gọi mã của lập trình viên.
- Ví dụ: Django (Python), Ruby on Rails (Ruby), Angular (JavaScript).


# NPM - Node Package Manager
NPM chính là công cụ quản lý các thư viện của Node.js


# Express
framework xây dựng website với Node.js

## app.METHOD(PATH, HANDLER)
- app ở đây là ứng dụng express
- method: là HTTP request method, viết thường (sẽ đề cập tới sau) method GET sẽ nói với Express cần trả ra nội dung cho client
- Path: đường link (route) trên server
- Handler: function để xử lý khi route được match


# Lịch sử version của javascript 
https://www.w3schools.com/js/js_versions.asp

# Babel (Compiler)
- Input: tất cả cú pháp hiện có của Javascript
- Output: chuyển về cú pháp JS version cũ, mà 'ứng dụng' chạy JS có thể hiểu

## Ưu điểm: Giúp code chạy được ở nhiều 'ứng dụng' mà không cần quan tâm về 'version'. Developer có thể 'code theo phong cách' tùy thích. Dùng version nào của JS cũng không lo bị lỗi

## Nhược điểm: Cần setup cho ứng dụng chạy với babel

- Mô hình hoạt động:

- Chạy ở dev:
  B1: Coding (source1)
  B2: Dịch code sang source2 và lưu trong memory
  B3: chạy code từ source2 (ở đây, không tạo thêm source code mới)

- Chạy ở production:
  B1: Coding (source1)
  B2: Dịch code. từ source1 dịch code sang source2 (tạo ra source code mới)
  B3: chạy code source2 trên production

