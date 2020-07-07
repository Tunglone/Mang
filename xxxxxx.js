var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
/*
a-- = 10, biến a thành 9
b++ = 18, biến b thành 19
++b = 20 vì ++19 = 20
++a = 10 vì ++9 = 10
Và KQ là : 10 + 18 - 20 - 10 = -2
*/
