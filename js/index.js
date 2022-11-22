//  创建一个匿名自执行函数避免污染全局


(function(){
  // 程序入口
  var firstCheck = document.querySelector('#checkAll')
  var allCheck = document.querySelectorAll('tbody input')
  var tbodyOne = document.querySelector("tbody")
  var allTh = document.querySelectorAll("th")
  var allTr = document.querySelectorAll('tbody tr')
  function exit(){
    console.log("程序进入")
    onEvents()
  }

  //  绑定事件的函数 所有的事件都在这里绑定

  function onEvents(){
    firstCheck.addEventListener('click',allCheckbox)
    
    // 给tbody下的每一个多选框绑定事件 


    // 事件委托
      tbodyOne.addEventListener('click',checkedInput)


    // 给表头添加绑定事件

    for(var i=0;i<allTh.length;i++){
      (function(i){
        allTh[i].addEventListener('click',function(){
          thSort(allTh[i],i);
      })
      })(i)
      
    }

      




    /*  自己写的
    for(var i =0;i<allCheck.length;i++){
      (function(i){
        allCheck[i].addEventListener('click',function(){
          var count = 0;
          for(var n=0;i<allCheck.length;n++){
            if(allCheck[n].checked === true){
              count++;
              console.log(count)
               if(count === 4){
              firstCheck.checked = true
            }
            else{
              firstCheck.checked = false
            }
              
            }
           
            
          }
        })
        
      })(i)
      // allCheck[i].addEventListener('click',function(){
      //   console.log(this)
      // })
    } */
  }

 
// 
function thSort(aTh,index){
  if(index === 0){
    return
  }
  var arr = Array.prototype.slice.call(allTr).sort(function(a,b){
    if(index===2 || index === 4){
      return a.querySelectorAll('td')[index].innerHTML.localeCompare(b.querySelectorAll('td')[index].innerHTML)
    }
    else{
      return a.querySelectorAll('td')[index].innerHTML - b.querySelectorAll('td')[index].innerHTML
    }

    
  })
  for(var i =0;i<arr.length;i++){
  tbodyOne.appendChild(arr[i]) 
  }
}


  function checkedInput(e){
    if(e.target.tagName !== 'INPUT'){
      return
    }
    var curIndex = 0;
    for(var i =0;i<allCheck.length;i++){
      allCheck[i].checked && curIndex++
    }
    firstCheck.checked = (curIndex === allCheck.length)


  }


  // 多选框的关联效果
  function allCheckbox(){
    
      for(var i =0;i<allCheck.length;i++){
        allCheck[i].checked = this.checked
      }    
  }
  exit()
})()