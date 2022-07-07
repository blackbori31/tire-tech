$('.navbar_gnb').on('mouseenter mouseleave',(function(aa){
    if($(window).width() > 1169 ){  // pc(데스크탑) 상태

            if( aa.type == 'mouseenter' ){  // 데스크탑상태에서 마우스를 올려놨을때
                $('.sub').stop().slideDown();
                $('.sub_shadow').stop().fadeIn();
            } else {
                $('.sub').stop().slideUp(250, function(){
                    $('.sub').removeAttr('style'); // slideUp실행뒤(콜백함수) 남아있는 style을 없애준다 
                });
                $('.sub_shadow').stop().fadeOut(250, function(){
                    $(this).removeAttr('style');
                });
            }
        } else {                    // 모바일 상태
            
        };
    })
);


/*화면이 큰 웹페이지 메인메뉴바 마우스올려두면 서브메뉴 나오게 하기 모바일 상태랑 같이 나열하는게 위에꺼!!
    
    $('.navbar_gnb').mouseenter(function(){
        $('.sub').stop().slideDown();
        $('.sub_shadow').stop().fadeIn();
    })
    $('.navbar_gnb,.sub_shadow').mouseleave(function(){
        $('.sub').stop().slideUp(250);
        $('.sub_shadow').stop().fadeOut(250);
    })
*/



const $mainBtn = $(".navbar .navbar_gnb > li > a"); // $mainBtn 라는 이름으로 메인 메뉴 설정


// 서브메뉴슬라이드 나오게 하는데 조금 골치아프게 도전
$mainBtn.click(function(){ // 클릭하면 발생한다
    if($(window).width() < 1170 ){ // 모바일 상태에서만 실행-서브메뉴 슬라이드
        if( !$(this).parents('li').hasClass('on') ){  // 클릭한 a의 부모li에 on클라스가 없을 때
            $('.sub').slideUp(100); // 빠르게 올라온다
            $('.navbar .navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown();
            $(this).parents('li').addClass('on');
        } 
        else { // 클릭한 부분 sub가 열려있을 때
            $(this).siblings('.sub').slideUp(100);
            $(this).parents('li').removeClass('on');
        }
    }
/* parents - 바로 위에 있는 부모요소 .slideToggle 열었다 닫았다 반복가능
    $(this).siblings('.sub').slideToggle();
    $(this).parents('li').addClass('on');
    mainBtn으로 설정한 this를 클릭하면 .sub메뉴를 열고 닫기 가능하고 this의 바로 위에 있는 부모요소 li가 css에 .on 설정해논 상태로 나온다
*/
});

// 모바일 상태에서 햄버거 버튼을 누르면 사이트바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},500); //animate - 옆으로 움직임
        $('header').animate({left:-250},500);
    } else {
        $('.gnb').animate({right:-250},300);
        $('header').animate({left:0},300);
    }
});


//모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그대로 보이고,li에 on 클라스가 계속 있는 상태 해결
$(window).resize(function(){
    if($(window).width() > 1169 ){
        $('.sub').removeAttr('style');
        $(".navbar .navbar_gnb > li").removeClass('on');
    }
});





// 팝업 닫기버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}