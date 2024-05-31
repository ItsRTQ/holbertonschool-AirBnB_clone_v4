window.addEventListener('load', function () {
    const amenIds = {};
    $('input[type=checkbox]').change(function () {
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