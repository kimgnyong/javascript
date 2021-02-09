var $slide = document.getElementsByClassName('slide-wrap');
var $prevBtn = document.getElementsByClassName('prev-btn');
var $nextBtn = document.getElementsByClassName('next-btn');
var slide = {
    init:function(){
        this.$slide1Fn();
        this.$slide2Fn();
        this.$slide3Fn();
        this.$slide4Fn();
    },
    $slide1Fn:function(){
        var cnt=0;

        function prev(){
            cnt--;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[0].style = ('left:'+cnt*-1200+'px;');
        };

        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[0].style = ('left:'+cnt*-1200+'px;');
        };

        $prevBtn[0].addEventListener('click',prev,false);
        $nextBtn[0].addEventListener('click',next,false);
    },
    $slide2Fn:function(){
        
    },
    $slide3Fn:function(){
        
    },
    $slide4Fn:function(){
        
    }
};
slide.init();