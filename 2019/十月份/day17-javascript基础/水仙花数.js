//利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。

//分析：水仙花数是三位数，范围100~999
//取出三位数的每一位数
//每位数的立方和等于该数本身

for (var d=100;d<1000;d++){
    var a=d%10
    var b=(d-a)/10%10
    var c=(d-b*10-a)/100
    if (d==a*a*a+b*b*b+c*c*c){
        console.log(d)
    }
    
}
