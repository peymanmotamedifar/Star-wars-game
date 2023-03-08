let span1 = document.querySelector('section>span>span:nth-of-type(1)')
let span2 = document.querySelector('section>span>span:nth-of-type(2)')
let span3 = document.querySelector('section>span>span:nth-of-type(3)')
let span4 = document.querySelector('section>span>span:nth-of-type(4)')
let span5 = document.querySelector('section>span>span:nth-of-type(5)')
let span6 = document.querySelector('section>span>span:nth-of-type(6)')
let span7 = document.querySelector('section>span>span:nth-of-type(7)')
let span8 = document.querySelector('section>span>span:nth-of-type(8)')
let span9 = document.querySelector('section>span>span:nth-of-type(9)')
let span10 = document.querySelector('section>span>span:nth-of-type(10)')
let span11 = document.querySelector('section>span>span:nth-of-type(11)')


let _s1 = document.querySelector('.d1>span:nth-of-type(1)')
let _s2 = document.querySelector('.d2>span:nth-of-type(1)')
let _s3 = document.querySelector('.d3>span:nth-of-type(1)')
let _s4 = document.querySelector('.d4>span:nth-of-type(1)')
let _s5 = document.querySelector('.d5>span:nth-of-type(1)')
let _s6 = document.querySelector('.d6>span:nth-of-type(1)')
let _s7 = document.querySelector('.d7>span:nth-of-type(1)')
let _s8 = document.querySelector('.d8>span:nth-of-type(1)')
let _s9 = document.querySelector('.d9>span:nth-of-type(1)')


let p1 = (parseInt(span1.computedStyleMap().get('bottom').value))
let p2 = (parseInt(span2.computedStyleMap().get('bottom').value))
let p3 = (parseInt(span3.computedStyleMap().get('bottom').value))
let p4 = (parseInt(span4.computedStyleMap().get('bottom').value))
let p5 = (parseInt(span5.computedStyleMap().get('bottom').value))
let p6 = (parseInt(span6.computedStyleMap().get('bottom').value))
let p7 = (parseInt(span7.computedStyleMap().get('bottom').value))
let p8 = (parseInt(span8.computedStyleMap().get('bottom').value))
let p9 = (parseInt(span9.computedStyleMap().get('bottom').value))
let p10 = (parseInt(span10.computedStyleMap().get('bottom').value))
let p11 = (parseInt(span11.computedStyleMap().get('bottom').value))


        let audio1 = document.getElementById('a1')
        let audio2 = document.getElementById('a2')
        let tir = document.getElementById('a3')
        let audio4 = document.getElementById('a4')
        let stay = document.getElementById('a5')
        let explosion = document.getElementById('a6')
        let arrow = document.getElementById('a7')
        let startWar = document.getElementById('a8')
        let haha = document.getElementById('a9')
        let _gameOver = document.getElementById('a10')


 // ******************Save Top Score in Local Storage******************
       let topPoint = 0

        let _topPoint = localStorage.getItem('data')


        setInterval(function(){
            localStorage.setItem('data', topPoint)
             
            if(topPoint>_topPoint){
                document.getElementById('topScore').innerHTML = topPoint
            } else{
                document.getElementById('topScore').innerHTML = _topPoint
            }
            
        },500)
   
        

// ********************************************************************



    document.getElementById('retry').addEventListener('click' , function(){
    document.getElementById('gameOver').style.transform = 'translate(-50%,-60%) scale(0)'
    document.location.reload();
})

let gameover1 = 0
let sw = 0
let point = 0
let _bomb = ['img/bomb/b2.png','img/bomb/b3.png','img/bomb/b4.png','img/bomb/b1.png','img/bomb/b5.png']
let _rock = ['img/racket/roc1.png ','img/racket/roc2.png', 'img/racket/roc3.png', 'img/racket/roc4.png', 'img/racket/roc5.png']
let _galaxy = ['img/bac/2.gif','img/bac/3.gif','img/bac/4.gif','img/bac/5.webp','img/bac/6.webp','img/bac/7.gif']
let i = 0
let b = 0

let c = document.querySelectorAll('.bomb1')
document.getElementById('left1').addEventListener('click' , function(){
    arrow.currentTime = 0
    arrow.play()
    i++  
     if(i > 4){
        i= 0
    }
    document.getElementById('rock').children[0].setAttribute('src' , _rock[i] )
    document.getElementById('st').children[0].setAttribute('src' , _rock[i] )

})

document.getElementById('right1').addEventListener('click' , function(){
    arrow.currentTime = 0
    arrow.play()
    i--
    if(i < 0){
        i= 4
    }
    document.getElementById('rock').children[0].setAttribute('src' , _rock[i] )
  document.getElementById('st').children[0].setAttribute('src' , _rock[i] )
})

document.getElementById('left2').addEventListener('click' , function(){
    arrow.currentTime = 0
    arrow.play()
    b++  
     if(b > 5){
        b= 0
    }
    document.getElementById('_galaxy').children[0].setAttribute('src' , _galaxy[b] )
    document.querySelector('main>section>span').style.backgroundImage =  `url(${_galaxy[b]})`
})

document.getElementById('right2').addEventListener('click' , function(){
    arrow.currentTime = 0
    arrow.play()
    b--
    if(b < 0){
        b= 5
    }
    document.getElementById('_galaxy').children[0].setAttribute('src' , _galaxy[b] )
    document.querySelector('main>section>span').style.backgroundImage =  `url(${_galaxy[b]})` 
})

setInterval(function(){
    for(let k=1;k<= 27;k++){
       document.getElementById(`bomb${k}`) .style.backgroundImage = `url(${_bomb[i]})`
  }
},500)

        function _select1(){
            document.getElementById('galaxy').style.transform = 'translate(-50%,-60%) scale(1)'
        }

        function _select4(){
            document.getElementById('pop').style.transform = 'translate(-50%,-60%) scale(1)'
            document.getElementById('st').children[0].setAttribute('src' , _rock[i] )
        }

document.getElementById('_select2').addEventListener('click' , function(){
    audio4.currentTime = 0
    audio4.play()
    setTimeout(function(){
        stay.play()
    },1800)
    stay.loop = true
    document.getElementById('pop').style.transform = 'translate(-50%,-60%) scale(0)'
    document.querySelector('body>section').remove()
})

document.getElementById('_select3').addEventListener('click' , function(){
    audio4.play()

    document.getElementById('galaxy').style.transform = 'translate(-50%,-60%) scale(0)'
    document.querySelector('main>section>span').style.backgroundImage =  `url(${_galaxy[b]})`
    
    setTimeout(function(){
        _select4()
    },500)
})


setInterval(function(){
    document.getElementById('score').innerHTML = point
},500)
        
      let flag = 0
           document.getElementById('bd').addEventListener('keypress',function(e){

             _s1 = document.querySelector('.d1>span:nth-of-type(1)')
             _s2 = document.querySelector('.d2>span:nth-of-type(1)')
             _s3 = document.querySelector('.d3>span:nth-of-type(1)')
             _s4 = document.querySelector('.d4>span:nth-of-type(1)')
             _s5 = document.querySelector('.d5>span:nth-of-type(1)')
             _s6 = document.querySelector('.d6>span:nth-of-type(1)')
             _s7 = document.querySelector('.d7>span:nth-of-type(1)')
             _s8 = document.querySelector('.d8>span:nth-of-type(1)')
             _s9 = document.querySelector('.d9>span:nth-of-type(1)')

            if(e.keyCode == 32){
                tir.currentTime = 0;
                tir.play()
                if( flag == 0){
                    flag = 1
                    _s1.style.bottom = '1000px'             
                    document.querySelector('.d1>span:nth-of-type(2)').style.bottom = '1000px'             
                    document.querySelector('.d1>span:nth-of-type(3)').style.bottom = '1000px'             
                _s1.style.transform = 'translateX(-60px)'
                document.querySelector('.d1>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd1')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb1')
                   s2.setAttribute('id' , 'bomb2')
                   s3.setAttribute('id' , 'bomb3')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)
                },150)

                setTimeout(function(){
                    document.querySelector('.d1').remove()
                },1000)
                }else if(flag==1){
                    flag = 2
                    _s2.style.bottom = '1000px'            
                    document.querySelector('.d2>span:nth-of-type(2)').style.bottom = '1000px'            
                    document.querySelector('.d2>span:nth-of-type(3)').style.bottom = '1000px'            
                _s2.style.transform = 'translateX(-60px)'
                document.querySelector('.d2>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd2')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb4')
                   s2.setAttribute('id' , 'bomb5')
                   s3.setAttribute('id' , 'bomb6')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){            
                    document.querySelector('.d2').remove()

                },1000)
                }else if(flag==2){
                    flag = 3
                    _s3.style.bottom = '1000px'             
                    document.querySelector('.d3>span:nth-of-type(2)').style.bottom = '1000px'             
                    document.querySelector('.d3>span:nth-of-type(3)').style.bottom = '1000px'             
                _s3.style.transform = 'translateX(-60px)'
                document.querySelector('.d3>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div') 
                   x.setAttribute('class' , 'd3')                
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb7')
                   s2.setAttribute('id' , 'bomb8')
                   s3.setAttribute('id' , 'bomb9')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    
                    document.querySelector('.d3').remove()

                },1000)
                }else if(flag==3){
                    flag = 4
                    _s4.style.bottom = '1000px'             
                    document.querySelector('.d4>span:nth-of-type(2)').style.bottom = '1000px'             
                    document.querySelector('.d4>span:nth-of-type(3)').style.bottom = '1000px'             
                _s4.style.transform = 'translateX(-60px)'
                document.querySelector('.d4>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd4')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb10')
                   s2.setAttribute('id' , 'bomb11')
                   s3.setAttribute('id' , 'bomb12')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    document.querySelector('.d4').remove()

                },1000)
                }else if(flag==4){
                    flag = 5
                    _s5.style.bottom = '1000px'            
                    document.querySelector('.d5>span:nth-of-type(2)').style.bottom = '1000px'            
                    document.querySelector('.d5>span:nth-of-type(3)').style.bottom = '1000px'            
                _s5.style.transform = 'translateX(-60px)'
                document.querySelector('.d5>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd5')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb13')
                   s2.setAttribute('id' , 'bomb14')
                   s3.setAttribute('id' , 'bomb15')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    document.querySelector('.d5').remove()

                },1000)
                }else if(flag==5){
                    flag = 6
                    _s6.style.bottom = '1000px'           
                    document.querySelector('.d6>span:nth-of-type(2)').style.bottom = '1000px'           
                    document.querySelector('.d6>span:nth-of-type(3)').style.bottom = '1000px'           
                _s6.style.transform = 'translateX(-60px)'
                document.querySelector('.d6>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd6')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb16')
                   s2.setAttribute('id' , 'bomb17')
                   s3.setAttribute('id' , 'bomb18')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    
                    document.querySelector('.d6').remove()

                },1000)
                }else if(flag==6){
                    flag = 7
                    _s7.style.bottom = '1000px'             
                    document.querySelector('.d7>span:nth-of-type(2)').style.bottom = '1000px'             
                    document.querySelector('.d7>span:nth-of-type(3)').style.bottom = '1000px'             
                _s7.style.transform = 'translateX(-60px)'
                document.querySelector('.d7>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd7')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb19')
                   s2.setAttribute('id' , 'bomb20')
                   s3.setAttribute('id' , 'bomb21')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    
                    document.querySelector('.d7').remove()

                },1000)
                }else if(flag==7){
                    flag = 8
                    _s8.style.bottom = '1000px'            
                    document.querySelector('.d8>span:nth-of-type(2)').style.bottom = '1000px'            
                    document.querySelector('.d8>span:nth-of-type(3)').style.bottom = '1000px'            
                _s8.style.transform = 'translateX(-60px)'
                document.querySelector('.d8>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd8')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb22')
                   s2.setAttribute('id' , 'bomb23')
                   s3.setAttribute('id' , 'bomb24')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    
                    document.querySelector('.d8').remove()

                },1000)
                }else if(flag==8){
                    flag = 0
                    _s9.style.bottom = '1000px'             
                    document.querySelector('.d9>span:nth-of-type(2)').style.bottom = '1000px'             
                    document.querySelector('.d9>span:nth-of-type(3)').style.bottom = '1000px'             
                _s9.style.transform = 'translateX(-60px)'
                document.querySelector('.d9>span:nth-of-type(3)').style.transform = 'translateX(60px)'
                setTimeout(function(){
                   let x = document.createElement('div')
                   x.setAttribute('class' , 'd9')
                   let s1 =document.createElement('span')
                   let s2 =document.createElement('span')
                   let s3 =document.createElement('span')
                   s1.setAttribute('id' , 'bomb25')
                   s2.setAttribute('id' , 'bomb26')
                   s3.setAttribute('id' , 'bomb27')
                   x.appendChild(s1)
                   x.appendChild(s2)
                   x.appendChild(s3)
                    document.querySelector('main>section>div').appendChild(x)

                },150)
                setTimeout(function(){
                    
                    document.querySelector('.d9').remove()

                },1000)
                }
                
            }
        })


 //Moving Rocket*************************

    let jet = document.getElementById('st')
   
    let xl 
    let xr 
     document.getElementById('bd').addEventListener('keydown', function(e){

        setInterval(function(){
            xl =  (document.querySelector('section>div').computedStyleMap().get('left').value)
            if(xl<=-5){
                document.querySelector('section>div').style.transition = '0s'
                document.querySelector('section>div').style.left = -4 + 'px'
            }
            if(!(xl<=-5)){
                document.querySelector('section>div').style.transition = '3s'
            }
        },10)
        setInterval(function(){
            xr =  (document.querySelector('section>div').computedStyleMap().get('left').value)
            if(700<=xr){
                document.querySelector('section>div').style.transition = '0s'
                document.querySelector('section>div').style.left = 699 + 'px'
            }
            if(!(700<=xr)){
                document.querySelector('section>div').style.transition = '3s'
            }

        },10)

      if(e.keyCode == 37){
        setInterval(function(){
            xl =  (document.querySelector('section>div').computedStyleMap().get('left').value)
        },1)
            if(xl>-5){
                   document.querySelector('section>div').style.left = -600 + 'px'
        document.querySelector('section>div>strong').style.transform = 'perspective(600px)  rotateY(-35deg)'
    }else{
        document.querySelector('section>div').style.left = -5 + 'px'
    }
        
        

       
    }
      if(e.keyCode == 39){
      
        setInterval(function(){
            xr =  (document.querySelector('section>div').computedStyleMap().get('left').value)
        },1)
            if(xr<700){
                   document.querySelector('section>div').style.left = 1000 + 'px'
        document.querySelector('section>div>strong').style.transform = 'perspective(600px)  rotateY(35deg)'
    }else{
        document.querySelector('section>div').style.left = 700 + 'px'
    }
       
    }
 
 })

 document.getElementById('bd').addEventListener('keyup', function(e){
    if(e.keyCode == 37){
        document.querySelector('section>div').style.left = xl + 'px'
        document.querySelector('section>div>strong').style.transform = ' perspective(800px) rotateY(0deg)'
      
    }
    if(e.keyCode == 39){
        document.querySelector('section>div').style.left = xr + 'px'
        document.querySelector('section>div>strong').style.transform = ' perspective(800px) rotateY(0deg)'
       
    }

 })


    //Enemy***********************

          span1.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span1.style.bottom = Math.floor(Math.random() * 200)+700 + "px";
          span2.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span2.style.bottom = Math.floor(Math.random() * 300)+900 + "px";
          span3.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span3.style.bottom = Math.floor(Math.random() * 400)+1200 + "px";
          span4.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span4.style.bottom = Math.floor(Math.random() * 400)+2000 + "px";
          span5.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span5.style.bottom = Math.floor(Math.random() * 500)+2500 + "px";
          span6.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span6.style.bottom = Math.floor(Math.random() * 500)+3000 + "px";
          span7.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span7.style.bottom = Math.floor(Math.random() * 500)+3500 + "px";
          span8.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span8.style.bottom = Math.floor(Math.random() * 500)+4100 + "px";
          span9.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span9.style.bottom = Math.floor(Math.random() * 500)+4600 + "px";
          span10.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span10.style.bottom = Math.floor(Math.random() * 500)+4900 + "px";
          span11.style.left = Math.floor(Math.random() * 730)+30 + "px";
          span11.style.bottom = Math.floor(Math.random() * 500)+5300 + "px";



    document.getElementById('clc').addEventListener('click' , function(){
       if(sw == 0){
        startWar.play()
        audio2.play()
       }
        sw = 1
        span1.style.transition = '140s'
        span1.style.bottom = '-6100px'
        span2.style.transition = '140s'
        span2.style.bottom = '-6100px'
        span3.style.transition = '140s'
        span3.style.bottom = '-6100px'
        span4.style.transition = '140s'
        span4.style.bottom = '-6100px'
        span5.style.transition = '140s'
        span5.style.bottom = '-6100px'
        span6.style.transition = '140s'
        span6.style.bottom = '-6100px'
        span7.style.transition = '140s'
        span7.style.bottom = '-6100px'
        span8.style.transition = '140s'
        span8.style.bottom = '-6100px'
        span9.style.transition = '140s'
        span9.style.bottom = '-6100px'
        span10.style.transition = '140s'
        span10.style.bottom = '-6100px'
        span11.style.transition = '140s'
        span11.style.bottom = '-6100px'

    })

   let i1 = setInterval(function(){

 span1 = document.querySelector('section>span>span:nth-of-type(1)')
 span2 = document.querySelector('section>span>span:nth-of-type(2)')
 span3 = document.querySelector('section>span>span:nth-of-type(3)')
 span4 = document.querySelector('section>span>span:nth-of-type(4)')
 span5 = document.querySelector('section>span>span:nth-of-type(5)')
 span6 = document.querySelector('section>span>span:nth-of-type(6)')
 span7 = document.querySelector('section>span>span:nth-of-type(7)')
 span8 = document.querySelector('section>span>span:nth-of-type(8)')
 span9 = document.querySelector('section>span>span:nth-of-type(9)')
 span10 = document.querySelector('section>span>span:nth-of-type(10)')
 span11 = document.querySelector('section>span>span:nth-of-type(11)')

_s1 = document.querySelector('.d1>span:nth-of-type(1)')
_s2 = document.querySelector('.d2>span:nth-of-type(1)')
_s3 = document.querySelector('.d3>span:nth-of-type(1)')
_s4 = document.querySelector('.d4>span:nth-of-type(1)')
_s5 = document.querySelector('.d5>span:nth-of-type(1)')
_s6 = document.querySelector('.d6>span:nth-of-type(1)')
_s7 = document.querySelector('.d7>span:nth-of-type(1)')
_s8 = document.querySelector('.d8>span:nth-of-type(1)')
_s9 = document.querySelector('.d9>span:nth-of-type(1)')

 p1 = (parseInt(span1.computedStyleMap().get('bottom').value))
 p2 = (parseInt(span2.computedStyleMap().get('bottom').value))
 p3 = (parseInt(span3.computedStyleMap().get('bottom').value))
 p4 = (parseInt(span4.computedStyleMap().get('bottom').value))
 p5 = (parseInt(span5.computedStyleMap().get('bottom').value))
 p6 = (parseInt(span6.computedStyleMap().get('bottom').value))
 p7 = (parseInt(span7.computedStyleMap().get('bottom').value))
 p8 = (parseInt(span8.computedStyleMap().get('bottom').value))
 p9 = (parseInt(span9.computedStyleMap().get('bottom').value))
 p10 = (parseInt(span10.computedStyleMap().get('bottom').value))
 p11 = (parseInt(span11.computedStyleMap().get('bottom').value))


if(
    (((p1 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p1+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p1 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p1+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))))  
    && (p1 ) > 132
    && (parseInt(span1.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span1.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span1.style.transition = '0s'
    span1.style.bottom = '3000px'
    span1.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span1.style.transition = '140s'
    span1.style.bottom = '-6100px'
    },200)
}

//Hit Bottom********************************************

let i2 = setInterval(function(){
    if(_rng.value == 0){
        if(gameover1 == 0){
            audio1.pause()
            haha.play()
        _gameOver.play()
        }
        gameover1 = 1
       document.getElementById('gameOver').style.transform = 'translate(-50%,-60%) scale(1)'
       document.querySelector('main').remove()
       document.querySelector('body').style.backgroundColor = 'black'
       clearInterval(i1)
       clearInterval(i2)
    }

},50)
let _rng = document.getElementById('rng')
if((p1 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span1.style.transition = '0s'
    span1.style.bottom = '3000px'
    span1.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span1.style.transition = '140s'
    span1.style.bottom = '-6100px'
        
        
    },100)
}
if((p2 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span2.style.transition = '0s'
    span2.style.bottom = '3000px'
    span2.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span2.style.transition = '140s'
    span2.style.bottom = '-6100px'
    },100)
}
if((p3 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span3.style.transition = '0s'
    span3.style.bottom = '3000px'
    span3.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span3.style.transition = '140s'
    span3.style.bottom = '-6100px'
    },100)
}
if((p4 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span4.style.transition = '0s'
    span4.style.bottom = '3000px'
    document.querySelector('section>span>span:nth-of-type(14').style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span4.style.transition = '140s'
    span4.style.bottom = '-6100px'
    },100)
}
if((p5 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span5.style.transition = '0s'
    span5.style.bottom = '3000px'
    span5.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span5.style.transition = '140s'
    span5.style.bottom = '-6100px'
    },100)
}
if((p6 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span6.style.transition = '0s'
    span6.style.bottom = '3000px'
    span6.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span6.style.transition = '140s'
    span6.style.bottom = '-6100px'
    },100)
}
if((p7 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span7.style.transition = '0s'
    span7.style.bottom = '3000px'
    span7.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span7.style.transition = '140s'
    span7.style.bottom = '-6100px'
    },100)
}
if((p8 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span8.style.transition = '0s'
    span8.style.bottom = '3000px'
    span8.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span8.style.transition = '140s'
    span8.style.bottom = '-6100px'
    },100)
}
if((p9 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span9.style.transition = '0s'
    span9.style.bottom = '3000px'
    span9.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span9.style.transition = '140s'
    span9.style.bottom = '-6100px'
    },100)
}
if((p10 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span10.style.transition = '0s'
    span10.style.bottom = '3000px'
    span10.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span10.style.transition = '140s'
    span10.style.bottom = '-6100px'
    },100)
}
if((p11 ) < 1){
    audio1.currentTime = 0
    audio1.play()
    span11.style.transition = '0s'
    span11.style.bottom = '3000px'
    span11.style.left = Math.floor(Math.random() * 730)+30 + "px";
    _rng.stepDown()
    setTimeout(function(){
        span11.style.transition = '140s'
    span11.style.bottom = '-6100px'
    },100)
}

if(
    (((p2 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p2+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p2 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p2+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))))  
    && (p2 ) > 132
    && (parseInt(span2.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span2.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span2.style.transition = '0s'
    span2.style.bottom = '3000px'
    span2.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span2.style.transition = '140s'
    span2.style.bottom = '-6100px'
    },200)
}

if(
    (((p3 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p3+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p3 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p3+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value)))) 
    && (p3 ) > 132
    && (parseInt(span3.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span3.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span3.style.transition = '0s'
    span3.style.bottom = '3000px'
    span3.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span3.style.transition = '140s'
    span3.style.bottom = '-6100px'
    },200)
}

if(
    (((p4 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p4+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p4 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p4+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))))  
    && (p4 ) > 132
    && (parseInt(span4.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span4.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span4.style.transition = '0s'
    span4.style.bottom = '3000px'
    span4.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span4.style.transition = '140s'
    span4.style.bottom = '-6100px'
    },200)
}

if(
    (((p5 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p5+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p5 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p5+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))))  
    && (p5 ) > 132
    && (parseInt(span5.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span5.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span5.style.transition = '0s'
    span5.style.bottom = '3000px'
    span5.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span5.style.transition = '140s'
    span5.style.bottom = '-6100px'
    },200)
}

if(
    (((p6 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p6+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p6 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p6+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value)))) 
    && (p6 ) > 132
    && (parseInt(span6.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span6.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span6.style.transition = '0s'
    span6.style.bottom = '3000px'
    span6.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span6.style.transition = '140s'
    span6.style.bottom = '-6100px'
    },200)
}

if(
    (((p7 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p7+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p7 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p7+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value)))) 
    && (p7 ) > 132
    && (parseInt(span7.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span7.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span7.style.transition = '0s'
    span7.style.bottom = '3000px'
    span7.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span7.style.transition = '140s'
    span7.style.bottom = '-6100px'
    },200)
}

if(
    (((p8 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p8+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p8 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p8+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value)))) 
    && (p8 ) > 132
    && (parseInt(span8.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span8.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span8.style.transition = '0s'
    span8.style.bottom = '3000px'
    span8.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span8.style.transition = '140s'
    span8.style.bottom = '-6100px'
    },200)
}

if(
    (((p9 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p9+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p9 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p9+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))))  
    && (p9 ) > 132
    && (parseInt(span9.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span9.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span9.style.transition = '0s'
    span9.style.bottom = '3000px'
    span9.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span9.style.transition = '140s'
    span9.style.bottom = '-6100px'
    },200)
}

if(
    (((p10 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p10+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p10 ) < (parseInt(_s9.computedStyleMap().get('bottom').value))&& (p10+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value)))) 
    && (p10 ) > 132
    && (parseInt(span10.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span10.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span10.style.transition = '0s'
    span10.style.bottom = '3000px'
    span10.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span10.style.transition = '140s'
    span10.style.bottom = '-6100px'
    },200)
}

if(
    (((p11 ) < (parseInt(_s1.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s1.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s2.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s2.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s3.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s3.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s4.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s4.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s5.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s5.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s6.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s6.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s7.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s7.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s8.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s8.computedStyleMap().get('bottom').value)))
    ||  ((p11 ) < (parseInt(_s9.computedStyleMap().get('bottom').value)) && (p11+50 ) > (parseInt(_s9.computedStyleMap().get('bottom').value))) ) 
    && (p11 ) > 132
    && (parseInt(span11.computedStyleMap().get('left').value)) >(parseInt(document.querySelector('#div1').computedStyleMap().get('left').value)-60)
    && (parseInt(span11.computedStyleMap().get('left').value)) < ((parseInt(document.querySelector('#div1').computedStyleMap().get('left').value))+90)
){
    point++
    if(topPoint<point){
        topPoint = point
    }
    explosion.currentTime = 0
    explosion.play()
    span11.style.transition = '0s'
    span11.style.bottom = '3000px'
    span11.style.left = Math.floor(Math.random() * 730)+30 + "px";
    setTimeout(function(){
        span11.style.transition = '140s'
    span11.style.bottom = '-6100px'
    },200)
}

},10)

