//斐波那契数列(亲两个数的和等于后一个)
//1 1 2 3 5 8 13 21 34 55 89 144
//分析：
//第一个月：1
//第二个月：1
//第三个月：2 未知数（第三个月的小兔子是第一个月+第二个月的）
//要声明三个变量
//第三个月的兔子的数量=前两个月的兔子数量+前一个月的兔子数量



//步骤：
//1.声明一个变量 代表第一个月兔子的对数
var m1=1
//2.声明一个变量 表示第二个月兔子的对数
var m2=1
//3.声明一个变量 表示第三个月兔子的对数
var m3=0
//4.循环 计算兔子的数量
for(var i=2;i<12;i++){
//4.1因为知道了日历中的1月和2月的兔子数量，必须要求出3月的兔子数量
m3=m1+m2
//4.2进行值的传递：m1=m2
m1=m2
//4.3进行值的传递:m2=m3
m2=m3
}
//4.4打印m3
console.log(m3)