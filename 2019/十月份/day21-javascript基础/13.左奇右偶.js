//左奇右偶10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
//步骤
//1.声明变量定义数组
var arr=[26,67,49,38,52,66,7,71,56,87]
//2.声明变量定义新数组存储
var arr1=[]
//3.遍历数组
for(var a=0;a<arr.length;a++){
    //3.1判断数组元素是否为偶数
    if(arr[a]%2==0){
        arr1.push(arr[a])
    }
    //3.2判断数组元素是否为奇数
    else if(arr[a]%2!=0){
        arr1.unshift(arr[a])
    }
}
//4.打印
console.log(arr1)