# DOM是什么

DOM(document object model) 文档对象模型 主要的作用: 改变网页的内容 样式 结构  

### 基本概念

DOM树: 就是根据网页来进行抽象出来的一种树状结构
文档: document  一个页面就是一个文档
元素: element <标签>内容</标签> 任何一个标签都是一个元素
节点: node
      标签节点(一个标签就是一个节点 <p></p>)
      文本节点(标签里面的内容就是文本节点 <p>1111</p>这里的1111就是文本节点)
      属性节点(<p title="aaa"></p> title="aaa"这就是属性节点)
      注释

### 元素获取

* #### 通过ID获取元素

  方法: document.getElementById('id名')
    返回值: 元素对象
    参数: id名
    兼容性: 没任何兼容性

* #### 通过标签名获取元素

  方法: element.getElementsByTagName('标签名')  注意: element可以是任何元素 也可以是document
    功能: 通过标签名来获取元素
    参数: 标签名
    返回值: 元素对象集合(伪数组)
    兼容性: 在任何浏览器都可以

* #### 通过类名获取元素

    方法: document.getElementsByClassName('类名');
    功能: 通过类名来获取元素
    参数: 类名名
    返回值: 元素对象集合(伪数组)
    兼容性: 兼容性没有id和标签名好 但是在现代(新)浏览器中都可以用

    注意: \<div class="a b c"></div> 你可以用a获取 也可以用b获取

* #### 通过css选择器获取元素

  * 方法: document.querySelector('css选择器')
     参数: 符合css选择器的 (#id名  .class名  标签名)
     返回值: 元素对象
     兼容性: 不能用在低版本浏览器中
     注意点: 如果符合css选择器规则的元素有多个 只获取第一个

   如果你想要获取多个 还想用querySelector 你可以选择querySelectorAll

  * 方法: document.querySelectorAll(); // 选择器到符合css选择器规则的所有元素
     参数: 符合css选择器的 (#id名  .class名  标签名)
     返回值: 元素对象集合(伪数组)
     兼容性: 低版本浏览器中不行

* #### 获取特殊元素

  * 如何获取body标签

    方法: document.body

    返回: body元素

    参数: 无参数

    兼容性: 无兼容性

  * 如何获取html标签

    document.documentElement

    返回: html元素

    参数: 没有

    兼容性: 无兼容性

  

### 事件基础

* #### 事件的概念

   事件: 事件就是一个信号 它可能是用户或者电脑发生的，在本阶段 主要用户的点击  按键盘 鼠标划过了

* #### 事件三要素

  1. 事件源: 事件发生在谁身上
  2. 事件类型: 浏览器给我们规定好的一些事件类型 click(点击) moseover(鼠标移入)
  3. 事件处理程序: 当事件在事件源发生的时候 要干啥

* #### 事件的执行步骤

  1.获取事件源
  2.绑定事件
  3.书写事件处理程序

  ~~~js
   let 元素 = 获取元素的方法
   元素.on+事件类型 = function (){
     // 让程序做啥 写在这里
   }
  ~~~

  

  

  

  

* #### 常见的事件类型

### 操作元素

  操作元素内容(innerHTML innerText) 增(添加内容)删(清除内容)改(修改内容)查(获取内容)

  * 功能: 都可以设置内容和获取内容
  * 区别:
    *  innerHTML: W3C标准  识别标签(会解析标签 换行等等)       获取内容的时候 包括标签和内容
    * innerText: 非标准    不识别标签(只会把标签当作文本 不识别换行)  获取内容的时候 不包括标签
    * 注意: 如果想要清空标签里的内容
      元素.innerHTML = null; 元素.innerText = null; inner*** = ""

* #### 操作元素的常见属性

  ~~~js
  title
  id
  src
  alt
  href
  
  // 元素.title =值
  // 元素.id =值
  // 元素.src =值
  // 元素.alt =值
  
  style 样式
  
    如何改变元素的样式
    元素.style.样式的名字 = 值
    注意: 用js操作的所有的样式都是行内样式
    // 如果可能 请不要直接用js操作样式 
  ~~~

  

  #### 操作元素的类名

  * 添加类名

    * 元素.className = "值1 值2 值3";

    * 元素.classList.add('类的名字')

      返回值: 无
      参数: 起的类的名字
      兼容性: 不能在低版本浏览器使用

  * 移除类名

    * 元素.className = "值1 值2"

    * 元素.classList.remove('要删除的类的名字')

      返回值: 无
      参数: 要删除的类的名字
      兼容性: 不能在低版本浏览器使用
    
  * 切换类名

    * 元素.classList.toggle('要切换的类的名字')

      返回值: 无
      参数: 要切换的类的名字(切换的意思是有则删除 无则添加)
      兼容性: 不能在低版本浏览器使用

  * 判断是否包含某类名

    * 元素.classList.contains('要判断的类的名字')

      返回值: 布尔值 true代表有  false代表没有
      参数:要判断的类的名字
      兼容性: 不能在低版本浏览器使用


* #### 操作表单的常用属性

  * 表单的value属性

    语法: 元素.value = "值"

  * 表单的type属性

    语法: 元素.type = "值" (值必须是html规定的)

  * checked属性

    语法: 元素.checked = boolean true代表选中 false代表不选中 (只要不是空字符串都是可以转换成true)

  * disabled属性

    语法: 元素.disabled = boolean true代表不能点(禁用)  false代表能点(可用)

  * selected属性

    语法: 元素.selected = boolean true代表选中

### 排他思想

有一组元素，如果你只想在某一时刻只有一个元素被设置上样式，就需要用到排他思想
  1.清除其他所有元素的样式
  2.设置自己的样式
  3.一定要注意顺序: 先清除其他再设置

### 自定义属性(存储数据)

* #### 传统的自定义属性(兼容性好,操作麻烦)

  * 语法

    ~~~js
     <标签 自定义属性的名字="值"></标签>
    
     <li index="1" cc="bca"  family="xiaowang" family-name="zss"></li>
    ~~~

  * 添加自定义属性

    语法: 元素.setAttribute("自定义属性的名字","自定义属性的值")
    参数: 自定义属性的名 自定义属性的值
    返回值: 无返回值

  * 删除自定义属性

    语法: 元素.removeAttribute("自定义属性的名字")
    参数: 自定义属性的名字
    返回值: 无   

  * 获取自定义属性

    语法: 元素.getAttribute("自定义属性的名字")
    参数: 自定义属性的名字
    返回值: 自定义属性的值

* #### h5中的自定义属性(兼容性不好,操作简单)
  * 语法

    ~~~js
     <标签 data-自定义属性的名字="值"></标签>

     <li data-index="1" data-cc="bca"  data-family="xiaowang" data-family-name="zss"></li>
    ~~~

  * 添加自定义属性

    语法: 元素.dataset.自定义属性的名字 =值

  * 删除自定义属性

    语法: delete 元素.dataset.自定义属性的名字

  * 修改自定义属性

    语法: 元素.dataset.自定义属性的名字 =值

  * 获取自定义属性

    语法: let 变量 = 元素.dataset.自定义属性的名字

### 节点操作

为什么要进行节点操作
   前面的获取节点(元素)的方法是对它自己进行获取 如果不知道这个元素的id 标签名 选择器
   通过关系来操作元素

* #### 节点概述

  * 节点的概念

    节点: 在网页中(除了<!DOCTYPE html>)任何内容都是节点

    1.元素节点 其实就是标签
    2.属性节点 其实就是标签中的属性
    3.文本节点 其实就是文本
    4.注释节点 其实就是注释

  * 节点的三个属性

    1.文本节点  节点类型: 3  节点名称: #text  节点的值: 文本的内容
    2.(记住)标签节点  节点类型: 1  节点名称: 标签的名字 节点的值: null
    3.注释节点  节点类型: 8  节点名称:  #comment 节点的值: 注释内容

* #### 节点创建

  * 方法1: 元素.innerHTML

      语法: 元素.innerHTML =`元素`
      特点: 可以在任何元素中添加节点
            包括创建和插入节点
            插入节点会把元素的内容清空

  * 方法2: document.write()

      语法: document.write()
      特点: 只能在body中插入元素
           包括来创建和插入节点
           插入body中会把body的内容清空

  * 方法3: document.createElement()

      语法: let 元素对象 = document.createElement()
      参数: 标签名
      返回值: 创建的元素对象(只会把元素创建出来放在内存中)
      注意: 只能创建元素 不能插入元素

* #### 节点插入

  * 父元素.appendChild()

     功能: 把元素插入到父元素内部的最后
      参数: 新创建的元素对象(节点)
      返回值: 添加进去的元素

  * 父元素.insertBefore(newChild,refChild)

    功能: 把元素插入到父元素内部的某个元素的前面
     参数: 要插入的新元素,基准元素
     返回值: 插入失败false 成功的返回那个元素

* #### 节点删除

  功能: 通过父节点删除子节点
   语法: 父元素.removeChild(子节点)
   参数: 子节点
   返回: 被删除掉的那个元素对象

* #### 节点查找

  * 查找父节点

    * 方法1: 元素.parentElement
    * 方法2: 元素.parentNode(推荐用这个 因为节点包括元素)

  * 查找子节点

    * 查找所有子节点
      * 方法1: 元素.childNodes  获取元素的所有节点
      * 方法2: 元素.children   获取元素节点(推荐用这个)
    * 查找第一个子节点
      * 方法1: 元素.firstChild          获取所有节点
      * 方法2: 元素.firstElementChild   (获取元素节点)
      * 方法3: 元素.children[0]         (推荐)
    * 查找最后一个子节点
      * 方法1: 元素.lastChild           获取所有节点
      * 方法2: 元素.lastElementChild   (获取元素节点)
      * 方法3: 元素.children[元素.children.length-1] (推荐使用)

  * 查找兄弟节点

    * 查找上一个兄弟节点
      * 方法1: 元素.previousElementSibling(推荐)
      * 方法2: 元素.previouSibing
    * 查找下一个兄弟节点
      * 方法1: 元素.nextElementSibling(推荐)
      * 方法2: 元素.nextSibling;

  * 节点替换

    方法: 父元素.replaceChild(新元素,旧元素);
    参数: 新元素 旧元素

  * 节点复制

    方法: 自身元素.cloneNode()
    参数: true代表深拷贝 false代表浅拷贝 注意⚠️:false可以不写

### 事件高级

事件注册三部曲:
    1.获取事件源
    2.给事件源绑定事件
    3.书写处理程序
  给元素绑定事件
    事件源.on+事件名= function (){}

#### 事件监听

* #### 为什么要学习事件监听

  前面学习的on+事件类型绑定事件的方式 不能给一个元素添加多个相同事件，即使加上也不能用的问题

* #### 事件监听注册和移除

  * 使用事件监听注册事件的方法(绑定事件)

    * 方法1: 传统方法

        语法: 事件源.on+事件类型 = function (){}
        注意: 只能给元素添加不同的事件 如果是相同的事件那么会被覆盖

    * 方法2: ie9以上浏览器注册事件的方法

        语法: 事件源.addEventListener(事件类型, 事件处理程序, 是否冒泡[可选的])
        说明: add添加 Event事件 listener监听器  给元素添加事件监听器
        注意: 这个方法可以添加相同类型的事件多个 
              这个方法可以控制事件是冒泡还是捕获
        是否冒泡: 如果不写 为false(冒泡) 如果写true true代表捕获

    * 方法3: ie9及以下浏览器注册事件的方法

       语法: 事件源.attachEvent('on+事件类型', 事件处理程序);
        注意: 事件类型务必带on

  * 使用事件监听移除事件的方法(解绑事件)

    * 方法1: 传统方法移除

       语法: 事件源.on+事件类型 = null;
        注意: 理解为把function给覆盖掉了 变成 null

    * 方法2: ie9以上浏览器移除事件的方法

      语法: 事件源.removeEventListener(事件类型,事件处理函数(名字))
        说明: remove移除 Event事件 Listener监听器
        注意: 事件处理函数 得写名字

    * 方法3: ie9及以下浏览器注册事件的方法

      语法: 事件源.detachEvent('on+事件类型', 事件处理程序(名字));
        注意: 事件类型务必带on

* #### 事件的监听

  方法一: 元素.on+事件类型= function () {}

  方法二: 元素.addEventListener(事件类型, 事件处理方法, 是否冒泡)   ie9+

  方法三: 元素.attachEvent("on"+事件类型, 事件处理方法)        ie9-

### 事件流

* #### 什么是事件流

  所谓的事件流就是描述从页面中接收事件的顺序
    事件的发生是有顺序的，这个就是DOM事件流

* #### 事件流的三个阶段

  第一阶段: 捕获阶段
  第二阶段: 目标阶段
  第三阶段: 冒泡阶段

* #### 注意点

  1.在js执行过程中，只能执行冒泡或者捕获的其中一个(网景  微软  为了让js执行出现最大的兼容 既有捕获又有冒泡 )
    2.xxx.onclick 和attachEvent只有冒泡没有捕获
    3.不是所有的事件都有冒泡和捕获，有些事件没有冒泡 onblur onfocus onmouseenter onmouseleave
    4.冒泡也不全是问题 有些工作还需要冒泡来做(事件委托)

### 事件对象

* #### 什么是事件对象

  * 概念: 在事件触发后，在事件处理程序中，所获取并操作的对象，用这个对象代表事件的状态
      比如: 鼠标的位置，鼠标的按钮，说的直白点就是事件对象里面存的是一系列跟事件相关的信息
      点击鼠标 存鼠标的信息 点击事件的信息
  * 语法: 
        事件源.on+事件类型 = function (e) { // 第一个形参e就是事件对象 不需要你创建，这是事件中js自动给我弄好的 }
        事件源.addEventListener('事件类型', function(e){})

* #### 事件对象的常用属性

  ~~~js
  e.target 返回触发事件的对象(比较好用没有兼容性)
  e.srcElement 返回触发事件的对象
  e.type 事件类型
  e.which点的哪个键(查一下)
  
  e.cancelBubble 取消泡泡(阻止冒泡) (非标准)
  e.stopPropagation() 阻止冒泡的(标准)
  
  e.returnValue =false;  阻止浏览器默认行为
  e.preventDefault(); 阻止浏览器默认行为(推荐)
  <a href="javascript:;"></>
  return false
  ~~~

* #### 鼠标事件(mouseEvent)对象的属性

    1.client系列 -- 在可视区内获取鼠标的位置
      1.1 clientX 鼠标相距离 可视区的是水平坐标
      1.2 clientY 鼠标相距离 可视区的是竖直坐标
    2.page系列  -- 在页面内获取鼠标的位置
      2.1 pageX 在页面内获取鼠标的位置的水平坐标
      2.2 pageY 在页面内获取鼠标的位置的竖直坐标
    3.screen系列 -- 获取电脑屏幕中鼠标的位置
      3.1 screenX
      3.2 screenY

* #### 键盘事件(keybordEvent)的属性

  1.keydown 按键按下的时候触发
    2.keypress 按键按下的时候触发  不能识别ctrl shift 左右箭头的
    3.keyup 按键弹起来的时候触发

    事件执行顺序 1 --> 2 --> 3

* #### 键盘事件的keyCode

  为了让计算机知道你按下的到底是哪个键 键盘上的键都有一个唯一的键码(ASCII码)
    // 大写的A 码: 65
    // 小写的a 码: 97
    // 小写的b 码: 98

    获取键值: e.keyCode

  

### 事件委托

* #### 如何实现事件委托

  1.找到子孙元素的上级 并且给上级注册事件
  2.在事件处理程序中，通过e.target找到触发事件的元素
  3.通过事件对象的nodeName判断是不是你想要的那个元素

* #### 通过事件委托注册事件好处

  1.可以减少事件的绑定 节省了内存
  2.上级元素可以代理未来新动态增加的元素的事件

* #### 事件委托的原理

  1.事件冒泡
  2.e.target