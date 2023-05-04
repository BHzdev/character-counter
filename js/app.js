$('textarea').on('keyup', function () {
  let valueTextArea = $('textarea').val().length,
    words = $('textarea').val().split(' ').length;
  $('.caracteres').text(valueTextArea);
  $('.palavras').text(words);
});
