## js简答题

 1. 网页的三种弹出框分别是什么？作用分别是什么？
 
 1.警告框 alert
   弹出文本框，只有确定按钮
 2.提示框 prompt
   弹出输入框，让用户输入数据
 3.确认框 confirm
   弹出确认框，有确定(true)、取消(false)两个按钮

 2. 用户输入框，获取到值的数据类型是什么？

- 字符串


## js编程题
1. 打开网页时弹出：全栈牛逼！！！(只有确定键)

    ```html
    alert('全栈牛逼！！！');
    ```

2. 让用户可以在网页输入年龄

    ```html
    prompt('请输入您的年龄');
    ```

3. 打开网页弹出：您打开了一个网页，是否继续？（有确定键和取消键）

    ```html
    confirm('您打开了一个网页，是否继续？')
    ```

4. 让用户输入一个数字，实现判断该数字是小数还是整数并告诉用户

    ```js
    var num=+prompt("请您输入数字")
    if (num%1==0){
        alert("该数字是整数")
    }else{
        alert("该数字是小数")
    }
    ```