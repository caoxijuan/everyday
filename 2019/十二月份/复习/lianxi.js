// 1.定义一个长度为5的数组，之后生成5个随机数存入数组，随机数范围为10到100（包含10和100），遍历数组，将数组中小于50的元素替换成0，之后打印修改后的数组
// var arr = []
// for (var i = 0; i < 5; i++) {
//     var random = Math.random() * (100 - 10 + 1) + 10
//     arr.push(random)
//     if (arr[i] < 50) {
//         arr[i] = 0
//     }
// }
// console.log(arr)


// // .将数组var arr = [1,2,1,2,3,4,5,6]里面重复的元素去除

// var  arr  =   [1, 2, 1, 2, 3, 4, 5, 6]

// var arr = new Set(arr)
// console.log(Array.from(arr))

// 2.获取地址里面的用户名和年龄和邮箱 https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,并且控制台输出对象的格式{username:'lisi',age:28,email:120122@qq.com}

// var str = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com"
// var obj = {}

// str = str.split("?")
// str = str[1].split("&")
// for (var i = 0; i < str.length; i++) {
//     var arr = str[i].split("=")
//     obj[arr[0]] = arr[1]
// }
// console.log(obj)



// 4.统计数组var arr = [1,2,3,4,5,1,1,2,3,2]里面元素出现的次数
// var  arr  =   [1, 2, 3, 4, 5, 1, 1, 2, 3, 2]
// var obj = {}
// for (var i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//         obj[arr[i]]++
//     } else {
//         obj[arr[i]] = 1
//     }
// }
// console.log(obj)