//需求： 打印1-100中前三个是17的整数倍的数。
//分析： 先循环 找出来1-100的数，如果这个数是17的整数倍的数就打印出来
// 步骤
// 1.初始化表达式
var i=1 
var a=0
while (i<=100){
    if(a==3){
        break
    }
    if(i%17==0){
        console.log(i)
        a++
    }
    i++
}
