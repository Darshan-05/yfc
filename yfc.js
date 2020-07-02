(function () {
      var words = [
            'CHANGE', 'CREATOR', 'FUTURE','SPARK'
      ], i = 0;
      setInterval(function () {
            $('#changingword').fadeOut(function () {
                  $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
      }, 1000);

})();