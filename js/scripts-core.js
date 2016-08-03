// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].origin !== location.origin) {
      a[i].setAttribute('target', '_blank');
    }
  }

  var aboutDOM = document.querySelector('.about');
  var questionnaireDOM = document.querySelector('.questionnaire');

  window.addEventListener('scroll', function(e) {
    var aboutDOMTop = aboutDOM.getBoundingClientRect().top;
    if (window.innerHeight > aboutDOMTop) {
      questionnaireDOM.classList.remove('hidden');
    }
    else {
      questionnaireDOM.classList.add('hidden');
    }
  });
}());
