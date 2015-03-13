/** Loading animation
 *  Created by 黑と白の印記 on 15/03/11.
 */

function loading(element,lightColor,darkColor,speed,callback){
	if(!element&&(!element.innerText||!element.textContent))return
	element = typeof element==="string"?document.getElementById(element):element
	lightColor = lightColor||"#fff",darkColor = darkColor||"#000",speed = speed||300

	var arr_spanEles = new Array()
	
	!function(arr_elementText){
		element.innerText=element.textContent=""
		for(var i=0;i<arr_elementText.length;i++){
			var span = document.createElement("span")
			element.innerText?span.innerText = arr_elementText[i]:span.textContent = arr_elementText[i]
			element.appendChild(span)
			arr_spanEles.push(span)
		}
	}((element.innerText||element.textContent).split(""))

	var index = -1,length = arr_spanEles.length
	var loadingTimer = setInterval(function(){
		arr_spanEles[Math.max(index,0)].style.color = darkColor
		if(index == length-1){
			index = -1
			callback&&callback()
		}
		++index
		arr_spanEles[index].style.color = lightColor
	},speed)
}