//需求：已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
//步骤：
//1.声明一个变量定义数组
var arr=[1, 3, 5, 8, 10, 11, 16]
//2.遍历数组
for (a=0;a<arr.length;a++){
    //2.1判断数组中元素是否为奇数
    if(arr[a]%2!=0){
        arr[a]=arr[a]+1
    }
    //2.2判断数组中元素是否为偶数
    else if(arr[a]%2==0){
        arr[a]=arr[a]-1
    }
}
//3.打印
console.log(arr)