window.addEventListener('load', function () {
  $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
    const amenIds = {};
    $('input[type=checkbox]').click(function () {
      if ($(this).prop('checked')) {
        amenIds[$(this).attr('data-id')] = $(this).attr('data-name');
      } else if (!$(this).prop('checked')) {
        delete amenIds[$(this).attr('data-id')];
      }
      if (Object.keys(amenIds).length === 0) {
        $('div.amenities h4').html('&nbsp');
      } else {
        $('div.amenities h4').text(Object.values(amenIds).join(', '));
    }
  });
});
