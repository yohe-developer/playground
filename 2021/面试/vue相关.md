事件：
1. 编译阶段区分  原生事件 和 自定义事件
原生事件 在自己的组件中  执行

而自定义事件，
子组件在执行emit的时候，
会寻找 当前实例的event数组中对应的函数执行
（event数组的形成，是在初始化子组件的时候，从父组件去获取的）
在初始化子组件的时候， 将事件传递进去，在子组件中调用

原生事件： addEventListener 直接监听
白话版本：(自定义事件)
首先一个组件 会进行一系列的数据初始化包括data、metheos等， 然后进行编译生成render函数

执行render函数

在执行的过程中 遇到 组件

此时又会进行 初始化（在初始化的过程中会从父组件 去获取事件 保存在自己的event中）

那在执行emit的时候， 会使用key去event中寻找事件， 然后执行它， 那父组件中的函数就会被执行


