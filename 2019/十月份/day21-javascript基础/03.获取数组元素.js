//需求：定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
//步骤
//1.声明变量定义数组
var arr=[1,3,4,7,8]
//2.声明变量累加个数
var sum=0
//3.遍历数组
for(var a=0;a<arr.length;a++){
    //3.1判断数组元素，角标是否都为偶数
    if(a%2==0&&arr[a]%2==0){
        //3.2累加
        sum+=1
        //3.3打印数组中为偶数的元素
        console.log(arr[a])
    }
}
//4.打印个数
console.log(sum)
