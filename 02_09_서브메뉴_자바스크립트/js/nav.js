//네비게이션(Navigation) GNB(메인메뉴) & LNB(서브메뉴)
//마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타납니다.
// 1, 메인메뉴를 클릭하면 해당 메인메뉴에 on클래스가 추가된다. addClass
//    그리고 해당 클래스를 제외한 모든 버튼의 클래스를 삭제한다 removeClass
// 2, 해당 아래 서브메뉴에도 on클래스가 추가된다.
//    해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제된다.
// 3, 해당 메인메뉴와 서브메뉴의 영역을 떠나면(mouseleave(권장) == mouseout)
//    메인메뉴와 서브메뉴 모두 초기화 모든 클래스 삭제
var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
        var $mainMenu = document.getElementsByClassName('main-btn');
        var $subMenu  = document.getElementsByClassName('sub');
        var $navArea  = document.getElementsByClassName('nav-area');

        //메인0 버튼 클릭 추가 이벤트 리스너 등록
        $mainMenu[0].addEventListener('mouseover', function(e){
            e.preventDefault();
            this.classList.add('on');   //addClass('on')
            $mainMenu[1].classList.remove('on');
            $mainMenu[2].classList.remove('on');
            $mainMenu[3].classList.remove('on');
            // 서브메뉴 등록
            $subMenu[0].classList.add('on');
            $subMenu[1].classList.remove('on');
            $subMenu[2].classList.remove('on');
            $subMenu[3].classList.remove('on');
        }, false);

        $mainMenu[1].addEventListener('mouseover', function(e){
            e.preventDefault();
            this.classList.add('on');   //addClass('on')
            $mainMenu[0].classList.remove('on');
            $mainMenu[2].classList.remove('on');
            $mainMenu[3].classList.remove('on');
            $subMenu[1].classList.add('on');
            $subMenu[0].classList.remove('on');
            $subMenu[2].classList.remove('on');
            $subMenu[3].classList.remove('on');
        }, false);

        $mainMenu[2].addEventListener('mouseover', function(e){
            e.preventDefault();
            this.classList.add('on');   //addClass('on')
            $mainMenu[1].classList.remove('on');
            $mainMenu[0].classList.remove('on');
            $mainMenu[3].classList.remove('on');
            $subMenu[2].classList.add('on');
            $subMenu[1].classList.remove('on');
            $subMenu[0].classList.remove('on');
            $subMenu[3].classList.remove('on');
        }, false);

        $mainMenu[3].addEventListener('mouseover', function(e){
            e.preventDefault();
            this.classList.add('on');   //addClass('on')
            $mainMenu[1].classList.remove('on');
            $mainMenu[2].classList.remove('on');
            $mainMenu[0].classList.remove('on');
            $subMenu[3].classList.add('on');
            $subMenu[1].classList.remove('on');
            $subMenu[2].classList.remove('on');
            $subMenu[0].classList.remove('on');
        }, false);


        //$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스 삭제
        $navArea[0].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainMenu[0].classList.remove('on');
            $subMenu[0].classList.remove('on');
        },false);
        $navArea[1].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainMenu[1].classList.remove('on');
            $subMenu[1].classList.remove('on');
        },false);
        $navArea[2].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainMenu[2].classList.remove('on');
            $subMenu[2].classList.remove('on');
        },false);
        $navArea[3].addEventListener('mouseleave',function(e){
            e.preventDefault();
            $mainMenu[3].classList.remove('on');
            $subMenu[3].classList.remove('on');
        },false);
        
    }
};
nav.init();