(function() {
  var parent = document.querySelector(".range-slider");
  // если нет выходим
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

    //function reversed(a,b) {};

  // у коллекции есть forEach
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      //TODO reversed
      if (slide1 > slide2) {
        var tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);

      ////TODO reversed
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();


//MODAL
(function(){
  var modal, close;
  //фиксим задний слой
  function DOCUMENT_NOSCROLL() {
    document.body.classList.toggle("no-scroll");
  }
  //behavior ищем вызовы
  document.onclick = function(e) {
    if (!e.target.hasAttribute('data-modal')) return;
    e.preventDefault();
    var targetModal = e.target.getAttribute('data-modal');
    tglModal(targetModal);
  };
  function tglModal(targetModal) {
    if(targetModal) {
      modal = document.getElementById(targetModal),
      close = modal.querySelector(".close");
    }
    modal.hidden = !modal.hidden;
    DOCUMENT_NOSCROLL();
    modal.addEventListener("click", modalClose, false);
  }
  //close
  function modalClose(e) {
    var target = e.target;
    if (target != modal && target != close) return;
    tglModal();
  };
})();




//==========SLIDER
(function(){

	var box = document.querySelector('.slides');
  // если слайдера нет - выходим
  if(!box) return;


	var slides = box.querySelectorAll('img');
	var currentSlide = 0;
	//var counter = document.querySelector('.counter');
	slides[currentSlide].className = 'current';

  var dots = document.querySelector('.dots');
  var dots_item = '';
  for (var i = 0; i < slides.length; i++) {
    //dots_item += '<b>' + (i + 1) + '</b>';
    dots_item += '<img src="assets/img/big/' + (i + 1) + '.jpg"/>';
  }
  dots.innerHTML = dots_item;
  var buttons = dots.querySelectorAll('img');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (function(n) {
      return function() {
        goToSlide(n);
      };
    })(i);
  }

	var timerID = setInterval(function() {
		goToSlide(currentSlide + 1)
	}, 3000);

	function goToSlide(n) {
		slides[currentSlide].className = '';
    buttons[currentSlide].className = '';

		currentSlide = (n + slides.length) % slides.length;

		slides[currentSlide].className = 'current';
    buttons[currentSlide].className = 'current';


		//counter.innerHTML = currentSlide + 1;
	}
	clearInterval
	box.onmouseover = function() {
		clearInterval(timerID)
	};
	box.onmouseout = function() {
		timerID = setInterval(function() {
			goToSlide(currentSlide + 1)
		}, 2000)
	};

	//next & prev
	var next = document.querySelector('.next');
	var prev = document.querySelector('.prev');

	next.onclick = function() {
		//alert(1);
		goToSlide(currentSlide + 1)
	};
	prev.onclick = function() {
		goToSlide(currentSlide - 1)
	};

})();


//tabs
//http://webformyself.com/prostye-adaptivnye-vkladki-taby-dlya-sajta-na-javascript-i-css/
