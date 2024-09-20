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

## git add 
=>thêm một file vào trong staging
## git add . 
=> thêm all các file ở trong THƯ MỤC hiện tại đang đứng trong staging tại thời điểm hiện tại
## git add -A 
=> thêm all các file ở trong DỰ ÁN dù bạn đag đứng đâu trong staging
## git add<đường dẫn file> 
=> chỉ thêm file CỤ THỂ vào trong staging

+ có 2 khu vực khi chạy git status
  - working directory(file màu đỏ) => ko đưa đc lên git
  - staging(file màu xanh) => đưa đc lên git

## config git (chạy duy nhất 1 lần)
git config --global user.name "anhbig"
git config --global user.email "nguyenanbi300303@gmail.com"

## git commit -m "message" (bắt buộc trc khi đưa file)
=> gắn đc những file đang nằm staging
=> dùng để gắn message(mô tả) vào trong những file đc phép đưa lên git
=> mỗi comit có 1 mã sha(id) phân biệt comit vs nhau

## git log
=> kiểm tra lịch sử commit

+ Đưa nooij dung lên GIT
## git push -u origin tên nhánh
=> đưa code lên git
=> từ lần push code t2: git push

<!-- ĐƯA FILE từ Staging về working -->
## git reset

## git restore -s. 
=> đưa all các file đg ở staging về working

## git restore -s <url file>
=> chỉ đưa duy nhất file về working

<!--  -->
## git checkout (url file)
=> 1. Đưa file đang đc chỉnh sửa về trc khi chỉnh sửa

## git checkout -b <tên nhánh>
=> tương đương 2 lệnh git branch + git switch

## git checkout <tên nhánh>
=> tương đương vs lệnh git switch
=> dùng để chuyển qua <tên nhánh>


<!-- Làm vc vs NHÓM -->
## branch
// dev => kthu QA và Dev (dev)
//staging => QA kthu 1 lần (staging)
//ptoduction => end user (main/release)

+ git branch <tên nhánh>
=> tạo ra 1 nhánh mới
=> nhánh mới sẽ chứa toàn bộ code của nhánh đang dùng

+ git branch -a or git branch
=> liệt kê all các branch đg có trong report (nhấn Q thoát khỏi ds branch)

+ git switch <tên nhánh>
=> chuyển qua nhanh <tên nhánh>

<!-- LẤY CODE -->
+ git pull
=> pull toàn bộ code ở git về source code

<!-- bị lõi khi dùng git pull -->
+ git pull --no-ff
=>

<!-- LẤY 1 SOURCE CODE TRÊN GIT -->
## git clone <url link>
=> Dùng để clone source code của 1 fit bất kì