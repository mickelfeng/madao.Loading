# Loading

---
####简介

JS实现的加载块

####使用

#####文本模式
在线预览：<http://htmlpreview.github.io/?https://github.com/smilingxinyi/madao.Loading/blob/master/Loading_Textmode/demo.html>

复制代码即可使用，无依赖，可以引用js文件

######Example：

```html
<span id="loading">LOADING</span>
<script type="text/javascript">
	loading(document.getElementById("loading"),"#fff","#000",150,function(){})
</script>
```

######使用方法

```javascript
function loading(element,lightColor,darkColor,speed,callback)
```

	element 		dom元素				必选参数
	lightColor 		突出亮色
	darkColor 		平常暗色
	speed 			速度
	callback		回调（在文本跑马灯结束后）
	
