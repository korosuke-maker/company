//スライダーswiperのプラグイン
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//wowのライブラリアニメーション
new WOW().init();

//ハンバーガーメニュー
jQuery('.drawer-icon, .drawer-content__item a , .drawer-background ').on('click',function(e){
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  jQuery('html,body').toggleClass('is-fixed');
  return false;
});


//各リンクに対するスムーススクロール
jQuery('a[href^="#"]').on('click',function(){
  var header = jQuery('.header').innerHeight();
  var id =jQuery(this).attr('href');
  var position = 0;
  if(id !='#'){
    var position =jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop:position
    },
  300);
});



// totopをスクロール量によって表示させる
jQuery(window).on('scroll',function(){
  if(100 < jQuery(this).scrollTop()){
    jQuery('.to-top').addClass('is-show');
  }else{
    jQuery('.to-top').removeClass('is-show');
  }

});


//headerのセクションリンクの下線の表示
jQuery('.header-nav li a').on('click',function(){
  jQuery('.header-nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

//Q&Aのアコーディオン
jQuery('.qa-box__q').on('click',function(){
  //兄弟要素の中で次の要素にスライドトグル
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa_box__icon').toggleClass('is-open');
});


//モーダル画面

//プライバシーポリシーのボタンとバツボタン、閉じるボタンのクリックイベント処理

//プライバシーポリシーのモーダルが開くときの挙動
// modal-contactとmodal-contact-background(target-modalクラス)を表示状態blockにする
jQuery('.js-open-button').on('click',function(e){
  e.preventDefault();
  //'data-target'とついてるカスタムデータ属性の値を取得して変数に格納
  var target = jQuery(this).data('target');
  // display:block;にする
  jQuery(target).show();
  // 背景は固定
  jQuery('body , html').css("overflow","hidden");
});


//プライバシポリシーのモーダルを閉じるときの挙動
// modal-contactとmodal-contact-background（target-modalクラス）を非表示状態noneにする
jQuery('.js-close-button').on('click',function(e){
  e.preventDefault();
  //'data-target'とついてるカスタムデータ属性の値を取得して変数に格納
  var target = jQuery(this).data('target');
  // display:none;にする
  jQuery(target).hide();
  //body,htmlの要素にあたってるstyle属性を削除する
  $("body,html").removeAttr("style");
});

