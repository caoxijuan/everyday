//30.求200到300之间所有奇数的和
var sum=0
for (var a=200;a<300;a++)
{
    if(a%2!=0)
    {
        sum+=a
    }
}
console.log(sum)
//31.	 for循环嵌套打印5行5列的正方形，如图所示(拔高题)

 
//32.	for循环嵌套打印一个直角三角形,如果所示(拔高题)
//33.	for循环嵌套打印一个倒的直角三角形,如果所示(拔高题)
 
//34.	企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，用户定义变量，输入当月利润I，求应发放奖金总数？

//35.	找出1-99之间是7的倍数或者个位数字是7或者是十位数字是7的数字，在控制台打印输出
for (var c=1;c<100;c++)
{
    if(c%7==0 || c%10==7 || parseInt(c/10)==7 )
    {
        console.log(c)
    }
}
/*36.	利用JavaScript编写程序实现如下功能，五个小朋友排成一队。
问第一个多大了，第一个说比第二个大两岁，
  问第二个，第二个说比第三个大两岁，以此类推。
  问第五个小朋友几岁了，第五个小朋友说3岁了。
  问第一个小朋友几岁了？
要求：控制台输出第一个小朋友的年龄是几岁*/
var sum3=3
for (h=1;h<5;h++)
{
     sum3+=2
}
console.log(sum3)
//38.使用for循环语句计算3+6+9+12+……+99的结果
var f = 0
for ( var i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        f += i
    }
}
console.log(f)
//39.输出1加到100（去掉3的倍数）的和
var sum1=0
for ( var d=1;d<=100;d++)
{
    if(d%3!=0)
    {
        sum1+=d
    }
}
console.log(sum1)
//40.求1-100之间所有数的积
var sum2 = 1
for (var s = 1; s <= 100; s++) {
    sum2 *= s
}
console.log(sum2)
//二、简答题
//1. 转字符串类型的时候，有哪些限制？
//to String undefined和null不能用
//2. 关于变量命名的规则有哪些
//1. 变量名只能包含数字、字母、下划线（ _ ）。
// 2. 不能以数字开头
// 3. 不能是一些关键字 
//3. Console.log(true&&false||true)和console.log(false || true&&false)的结果分别是什么，并解释为什么
//Console.log(true&&false||true)结果是true
//&&是一假则假，||是一真则真
//true&&false是false  false||true是true
//console.log(false || true&&false)结果是false
//先且后非，true&&false是false false||false是false

//4. 将一行字符串分多行显示，有几种写法，分别是什么
//"\" 和 "`"

