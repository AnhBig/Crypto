## TẠO REPOSITORY (REPO)

git init
=> nhánh chính: master

+ tạo 1 nhánh cho trùng vs nhánh MAIN trên GIT 
## git init -b main
=> tạo repo local vs nhanh chính có tên main

+ KO may tạo 1 nhánh MASTER ròi thì
## git branch -M main
=> Quay lại đổi tên nhánh có tên là MAIN

+ liên kết repo local vs repo remote
## git remote add origin https://github.com/AnhBig/Crypto.git

+ ko đưa thư mục node_modules lên GIT
=> Node_modul chiếm dung lượng lớn
=> Node_muodule có thể cài lại thông qua : npm i

## Gitignore (nằm ngoài src)
=> quy định những thư mục hay file ko đc phép đẩy lên git

## git status
=> kiểm tra sự thay đổi của các file trong dự án

## git add =>thêm một file vào trong staging
## git add . => thêm all các file ở trong THƯ MỤC hiện tại trong staging
## git add -A => thêm all các file ở trong DỰ ÁN trong staging
## git add<đường dẫn file> => chỉ thêm file CỤ THỂ vào trong staging

+ có 2 khu vực khi chạy git status
  - working directory(file màu đỏ) => ko đưa đc lên git
  - staging(file màu xanh) => đưa đc lên git

## git comt