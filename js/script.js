 /* ----------------- FUNCTIONs ----------------  */

// condition for screen changing. 
//    Trying something else later. 
function changeBGsize() {
  var sliderBGsWidth = sliderBackground.style.width;

  if (  document.body.offsetWidth < 1100 ) {
    // sliderBGsWidth = screen.availWidth + 'px';
    sliderBGsWidth = '1100px';
  } else {
    sliderBGsWidth = document.body.scrollWidth + 'px'; // max size of screen
  }
  return sliderBGsWidth;
}


//   ---------------- create a base for next developing ------------------

/* -------------------- Slider ------------------*/

var sliderStyle, sliderBackground, btnSlider ;

var imgList = document.getElementById('imgList');
var slider = document.getElementById('slider');
sliderStyle = slider.style;

btnSlider = document.getElementById('btnSlider');

// ----------- size of bleary part 
sliderBackground = document.body.getElementsByClassName('slider-background')[0];

sliderBackground.style.width = changeBGsize();
sliderBackground.style.height = screen.availHeight + 'px';

/*  ---------------- Slider Position along the screen ---------------   */
// horizontal align
if (document.body.offsetWidth < 1100 ) {
  sliderStyle.left = 0 ;
} else {
  sliderStyle.left = ( (  (document.body.offsetWidth - 1090 )/2 ) + 20 ) + 'px';
}
// vertical align
if ( outerHeight < screen.availHeight) {
  sliderStyle.top = '100px';
}  else {
  sliderStyle.top = ((screen.availHeight - 516)/2 ) + 'px';
}


// -------------- show our slider --------------
btnSlider.onclick = function() {
  sliderStyle.display = 'block';
  sliderBackground.style.display = 'block';  
}

var position = 0;

slider.onclick = function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;


  // if I want to see what's happening
  console.log(target.className);


  // conditions for close button
  if (target.className == "btn-close" || target.innerText == "x") {
    sliderStyle.display = 'none';
    sliderBackground.style.display = 'none';  
  }

  var imgWidth = imgList.getElementsByTagName('img')[0];
  imgWidth = imgWidth.getBoundingClientRect().width;
  // to move image
  // NEXT button
  if (target.className == "arrow arrow-right" ) {
    if ( position == -(imgWidth*2) ) return false;
    position = position - imgWidth;
    imgList.style.marginLeft = position + 'px';
  }
  // PREV button
  if (target.className == "arrow arrow-left" ) {
    if ( position == 0 ) return false;
    position = position + imgWidth;
    imgList.style.marginLeft = position + 'px';
  }
}

// -----------------------------------  END  --------------------

// 
// turn on slider 
/*sliderBackground.style.display = 'block';  
sliderStyle.display = 'block';*/