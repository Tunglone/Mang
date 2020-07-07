var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
/*
Mảng là object.
Khi gán a = [1, 2]; b = [1, 2]; là đang gán a và b đến 2 đối tượng khác nhau (được đặt ở các vùng nhớ khác nhau trong bộ nhớ, mặc dù hai đối tượng này có cùng giá trị).
Phép === xảy ra nếu cho a = b;
*/
