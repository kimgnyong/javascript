        //전역변수
        var $slide = document.getElementsByClassName('slide-wrap');
        var $nextBtn = document.getElementsByClassName('next-btn');
        var $prevBtn = document.getElementsByClassName('prev-btn');

        // console.log($slide.length);
        // console.log($slide);

        // //반복문

        // for(var i = 0; i<$slide.length ; i++){
        //     console.log(i);
        // }



var slide ={
    init:function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },
    slide1Fn:function(){
        //DOM
        //요소선택
        //document.querySelector('#아이디');
        //document.querySelector('.클래스');
        //document.querySelector('태그');

        //아이디 #section1 요소 선택 방법
        // var $section1 = document.getElementById('section1');
        // console.log($section1);
        // $section1.onclick = function(){
        //     alert('$section1 클릭 선택');
        // }

        //클래스 .slide-wrap 요소 선택 방법
        // var $slideWrap = document.getElementsByClassName('slide-wrap');
        // console.log($slideWrap);
        // console.log($slideWrap[0]);
        // $slideWrap[0].onclick = function(){
        //     alert(' 0번방의 클래스 클릭')
        // }
        // $slideWrap[1].onclick = function(){
        //     alert(' 1번방의 클래스 클릭')
        // }
        // $slideWrap[2].onclick = function(){
        //     alert(' 2번방의 클래스 클릭')
        // }
        // $slideWrap[3].onclick = function(){
        //     alert(' 3번방의 클래스 클릭')
        // }

        // //태그 div 요소 선택 방법
        // var $div = document.getElementsByTagName('div');
        // console.log($div);
        // console.log($div[2]);

        // $div[1].onclick = function(){
        //     alert('두번째요소')
        // }
        
        var cnt = 0;

        function prev(){
            cnt--
            cnt < 0 ? cnt = 3 : cnt;
            $slide[0].style = 'left:'+-1200*cnt+'px;';
        }
        
        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[0].style = 'left:'+-1200*cnt+'px;';
        }

        //버튼등록
        // $prevBtn[0].onclick = function() {
        //     event.preventDefault(); //원래의 기능을 상실시키고 선언한 함수만 활성화시켜라 > href='#'을 해놔도 이벤트후 홈페이지 새로고침이 안됨
        //     prev();
        // }

        // $nextBtn[0].onclick = function() {
        //     next();
        // }

        // 버튼 등록2 : 버튼추가(add) 이벤트(Event) 리스너(Listener)
        $prevBtn[0].addEventListener('click', function(){
            prev();
        }, false);

        $nextBtn[0].addEventListener('click', next, false);

        //버튼 전파 차단

    },


    slide2Fn:function(){
        var cnt = 0;

        function prev(){
            cnt--;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[1].style = 'left:'+-400*cnt+'px;';
        }
        
        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[1].style = 'left:'+-400*cnt+'px;';
        }

        // $prevBtn[1].onclick = function() {
        //     prev();
        // }
        // $nextBtn[1].onclick = function() {
        //     next();
        // }
        
        //버튼 추가(add) 이벤트(event) 리스너(listener) 등록
        $prevBtn[1].addEventListener('click', prev, false);
        $nextBtn[1].addEventListener('click',function(){
            next();
        }, false);
    },


    slide3Fn:function(){
        var cnt = 0;

        function prev(){
            cnt--;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[3].style = 'top:'+-200*cnt+'px;';
        }
        
        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[3].style = 'top:'+-200*cnt+'px;';
        }

        // $prevBtn[3].onclick = function(e) {
        //     console.log(e);
        //     e.preventDefault();
        //     prev();
        // }
        // $nextBtn[3].onclick = function(event) {
        //     console.log(event);
        //     event.preventDefault();
        //     next();
        // }
        
        $prevBtn[3].addEventListener('click',prev,false);
        $nextBtn[3].addEventListener('click',next,false);

    },


    slide4Fn:function(){
        var cnt = 0;

        function prev(){
            cnt--;
            cnt < 0 ? cnt = 3 : cnt;
            $slide[2].style = 'left:'+-400*cnt+'px;';
        }
        
        function next(){
            cnt++;
            cnt > 3 ? cnt = 0 : cnt;
            $slide[2].style = 'left:'+-400*cnt+'px;';
        }

        // $prevBtn[2].onclick = function() {
        //     prev();
        // }
        // $nextBtn[2].onclick = function() {
        //     next();
        // }
        $prevBtn[2].addEventListener('click',function(){
            prev();
        }, false)
        $nextBtn[2].addEventListener('click',function(){
            next();
        }, false)
    }
};

slide.init();