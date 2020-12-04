function lazyLoad() {
  var throttleTimeout;
  var lazyLoadElements = document.querySelectorAll(".lazy-load");   

if(throttleTimeout) {
    clearTimeout(throttleTimeout);
}    
  

  throttleTimeout = setTimeout(function() {
      lazyLoadElements.forEach(function(element) {
        var elementOffsetTop = element.getBoundingClientRect().top;
        
          if( elementOffsetTop - 500 < (window.innerHeight + window.pageYOffset)) {
            if(element.dataset.src) {
              element.src = element.dataset.src;
            } else if(element.dataset.srcset) {
              element.srcset = element.dataset.srcset;
            }
            
              element.classList.remove('lazy-load');
          }
      });
  }, 200);
}

document.addEventListener("DOMContentLoaded", function() {

  var lazyLoadElements = document.querySelectorAll(".lazy-load");
  var throttleTimeout;
    
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("click", lazyLoad);
  window.addEventListener("load", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationChange", lazyLoad);

});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});