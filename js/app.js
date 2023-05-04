$('textarea').on('keyup', function () {
  let valueTextArea = $('textarea').val().length;
  $('.caracteres').text(valueTextArea);
});
