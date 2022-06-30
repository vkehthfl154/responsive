//위로가는 버튼
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll>500){
      $('.to-top').fadeIn();
    }else{
			$('.to-top').fadeOut();
		}
});

$('.to-top').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},700);
});




// 모바일 햄버거버튼
$('.toggle-side-bar-btn').click(function(){
	var $this = $(this);

	if($this.hasClass('active')){
		$('.left-side-bar-box').removeClass('active');
	}else{
		$('.left-side-bar-box').addClass('active');
	}

	$this.toggleClass('active');
});

$('.left-side-bar .menu-1 ul li').click(function(e){
	var $clicked = $(this);
	if($clicked.hasClass('active')){
		$clicked.find('ul').stop().slideUp();
		$clicked.removeClass('active');
	}else {
		$clicked.find('ul').stop().slideDown().parent('li').siblings().find('ul').slideUp();
		//메소드체이닝(method chaining):메소드가 체인처럼 연결됨
		//.parent():부모요소를 부름
		//.siblings():나를 제외한 형제요소를 부름
		$clicked.siblings().removeClass('active');
		$clicked.addClass('active');
	}
	e.stopPropagation(); //부모의 이벤트가 자식에게 전파(Propagation)되는 것을 막아줌(자식 클릭해도 메뉴 안 올라감)
});

$('.left-side-bar-box').click(function(){
	$('.toggle-side-bar-btn').click();
});

$('.left-side-bar').click(function(e){
	e.stopPropagation();
});