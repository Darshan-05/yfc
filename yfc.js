(function () {
      var words = [
            'CHANGE', 'CREATOR', 'FUTURE'
      ], i = 0;
      setInterval(function () {
            $('#changingword').fadeOut(function () {
                  $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
      }, 1000);
})();
