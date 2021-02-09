var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $subBtn  = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

        $mainBtn[0].addEventListener('mouseover',function(e){
            e.preventDefault();
            $mainBtn[0].classList.add('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[2].classList.remove('on');
            $mainBtn[3].classList.remove('on');
            $subBtn[0].classList.add('on');
            $subBtn[1].classList.remove('on');
            $subBtn[2].classList.remove('on');
            $subBtn[3].classList.remove('on');
        }, false)
        $mainBtn[1].addEventListener('mouseover',function(e){
            e.preventDefault();
            $mainBtn[1].classList.add('on');
            $mainBtn[0].classList.remove('on');
            $mainBtn[2].classList.remove('on');
            $mainBtn[3].classList.remove('on');
            $subBtn[1].classList.add('on');
            $subBtn[0].classList.remove('on');
            $subBtn[2].classList.remove('on');
            $subBtn[3].classList.remove('on');
        }, false)
        $mainBtn[2].addEventListener('mouseover',function(e){
            e.preventDefault();
            $mainBtn[2].classList.add('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[0].classList.remove('on');
            $mainBtn[3].classList.remove('on');
            $subBtn[2].classList.add('on');
            $subBtn[1].classList.remove('on');
            $subBtn[0].classList.remove('on');
            $subBtn[3].classList.remove('on');
        }, false)
        $mainBtn[3].addEventListener('mouseover',function(e){
            e.preventDefault();
            $mainBtn[3].classList.add('on');
            $mainBtn[1].classList.remove('on');
            $mainBtn[2].classList.remove('on');
            $mainBtn[0].classList.remove('on');
            $subBtn[3].classList.add('on');
            $subBtn[1].classList.remove('on');
            $subBtn[2].classList.remove('on');
            $subBtn[0].classList.remove('on');
        }, false)

        $navArea[0].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainBtn[0].classList.remove('on');
            $subBtn[0].classList.remove('on');
        }, false)
        $navArea[1].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainBtn[1].classList.remove('on');
            $subBtn[1].classList.remove('on');
        }, false)
        $navArea[2].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainBtn[2].classList.remove('on');
            $subBtn[2].classList.remove('on');
        }, false)
        $navArea[3].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainBtn[3].classList.remove('on');
            $subBtn[3].classList.remove('on');
        }, false)
    },

};
nav.init();