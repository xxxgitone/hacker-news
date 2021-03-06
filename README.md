# hacker-news

> 使用vue、vuex、vue-router、axios编写的一个简易版hackers-news。

## 前言
vue全家桶练手项目，并没有很复杂，毕竟本人也不是什么很厉害的人物，也是正努力学习前端知识的一枚学生。学习vue也有一段时间，但没有融汇知识，通过这个简单的应用，来巩固和加深对vue的理解。希望可以给正在学习vue的人一些参考，也希望有大神能够指点一二。代码谈不上优美，但是使用了很多vue基本常用的功能。

这个项目，实现基本数据展示，没有深入数据处理，有些数据是自己模拟出来的。懂得firebase可以直接使用官方API，hacker-news的官方api部署在[Firebase][1]上，详细api介绍在[github][2]上。

界面不同官网，是一个新的界面展示。


## 主目录信息

	─src
	│  │  App.vue
	│  │  main.js
	│  │  
	│  ├─api
	│  │      api.js     //数据操作
	│  │      
	│  ├─assets
	│  │      logo.png
	│  │      
	│  ├─components
	│  │      Comment.vue
	│  │      Item.vue
	│  │      Loading.vue
	│  │      
	│  ├─dataids         //模拟ids
	│  │      index.js
	│  │      topids.js
	│  │      
	│  ├─router        //路由
	│  │      index.js
	│  │      
	│  ├─store 
	│  │      actions.js
	│  │      getters.js
	│  │      mutations-type.js
	│  │      mutations.js
	│  │      store.js
	│  │      
	│  └─views
	│          Comments.vue
	│          Login.vue
	│          Newest.vue
	│          Top.vue
	│          User.vue



## 效果展示
![主界面][3]

![评论展示][4]

![简单登录][5]


## 运行

``` bash
 	git clone https://github.com/xxxgitone/hacker-news.git

	cd hacker-news

	npm install
	
	npm run dev
```

  [1]: https://firebase.google.com/
  [2]: https://github.com/HackerNews/API
  [3]: ./images/1.gif "1.gif"
  [4]: ./images/2.gif "2.gif"
  [5]: ./images/3.gif "3.gif"