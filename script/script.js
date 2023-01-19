new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000
    },
    effect: 'fade',
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 50,
      shadowScale: 1,

    },
    speed: 800,
    pagination: {
        el:'.swiper-pagination',
        clickable:true,
    }
})
function addClass() {
   setTimeout(()=> {
    window.addEventListener('scroll', function() {
        let headerNav = document.querySelector('.header-wrap');
        if(window.pageYOffset > 0) {
            headerNav.classList.add('move')
        }
        else {
            headerNav.classList.remove('move')
        }
    })
   },300)
}
addClass()


var scrollAccess = 1;
        window.addEventListener('scroll', function() {
            if((window.pageYOffset + (window.screen.height) / 2) > content.offsetTop && scrollAccess == 1){
                scrollAccess = 0;
                startAnimation();
            }
        })

        var texts =
                [
                    'Из пластика',
                    'Сложных форм',
                    'Из металла',
                ];
            var brain = [0, 0, 0];
            function startAnimation() {
                let arr_k = brain[0];
                let text_k = brain[1];
                setTimeout(() => {
                    if (texts[arr_k][text_k] == ' ') brain[2] = 1
                    if (brain[2] && texts[arr_k][text_k] != ' ') {
                        content.innerText += ' ' + texts[arr_k][text_k]
                        brain[2] = 0
                    } else
                        content.innerText += texts[arr_k][text_k];
                    brain[1]++
                    if (brain[1] < texts[arr_k].length)
                        startAnimation()
                    else {
                        setTimeout(() => {
                            clearAnimation()
                        }, 1000)
                    }
                }, 200)
            }
            function clearAnimation() {
                let text = content.innerText
                if(text == ''){
                    brain[0]++
                    brain[1] = 0
                    if(brain[0] >= texts.length)
                        brain[0] = 0
                    startAnimation()
                } else {
                    setTimeout(()=> {
                        content.innerText = text.slice(0,text.length - 1)
                        clearAnimation()
                    },100)
                }
                
            }


const time = 2000;
let step = 2;
function makeCounter (num,elem) {
    let id = document.querySelector('#' + elem);
    n = 0;

    let math = Math.round(time / (num * step))
    let interval = setInterval(() => {
        n = n + step;
        id.innerHTML = n
        if (n == num) {
            clearInterval(interval)
        }
    }, math)
}

    makeCounter(16, 'out-1');

  setTimeout(()=> {
    let a = makeCounter;
    a(150, 'out-2')
  },900)
  let b = makeCounter;
  setTimeout(()=> {
    b(46, 'out-3')
  },2500)
  let c = makeCounter;
  setTimeout(()=> {
    c(3000,'out-4')
  },4000)
  


const spin = document.getElementById('spin');
const frezer = document.getElementById('frezer');
const toka = document.getElementById('toka');
const eroz = document.getElementById('eroz');
const [...allLink] = document.querySelectorAll('.gallery__wrap-box');
const link = document.querySelector('.tap')



let arr = [spin,frezer,toka,eroz]

arr.forEach((el)=> {
    el.onmouseover = function() {
        el.play()
    }
    el.onmouseleave = function() {
        el.pause()
    }
})
const showBlock = document.querySelector('.header__nav-show')
const posic = document.querySelector('.posic');
posic.addEventListener('click',function(){
    let el = showBlock;
    if(posic.classList.contains('active')) {
        posic.classList.remove('active')
    }
    else {
        posic.classList.add('active')
    }
    if(el.classList.contains('_active')) {
        el.classList.remove('_active')
    }
    else {
        el.classList.add('_active')
    }
})
