
var prev=$('.leftbtn');
var next=$('.rightbtn');
var ul_=$('.cutimg')
var li_ =$('.cutimg').find('li');
var img_=$('.cutimg li').find('img')
var timer=0;
var index = 0;
var step =10;
var imgWhidth=$('.cutimg li').find('img').width()
timer = setInterval(function ( ) {
    if (index>img_.length) {
        index=0; 
    }
    
   index++;
  // $('.cutimg').animate({'left':""+img_[index]+""})
   console.log(imgWhidth); 
   // img_[index].css=('left',+step)
  //  console.log( img_[index].css=({"display":'block',"left":+step});
},5000);
//prev.on('click',function ( ) {
    
//})