
$('.js-slider-wrap').each(function (index, sliderWrap) {
  let slider = $(sliderWrap).find('.js-slider');
  let btnPrev = $(sliderWrap).find('.js-btn-prev');
  let btnNext = $(sliderWrap).find('.js-btn-next');

  $('.js-slider').slick({
    autoplay: true,
    dots: true,
    prevArrow: btnPrev,
    nextArrow: btnNext,
  });

  console.log(index);
  console.log(sliderWrap);
});


$('.js-load-more').on('click', function () {

  $.ajax({
    type: 'POST',
    url: 'json/locations.json',
    success: function (dataResponse) {
      let a = createLocations(dataResponse.locations);
      console.log(a);

      addElements(a);
    }
  });

});

let productString = '';

function addElements(stringElements) {
  $('.locations_block').append(stringElements);

  locationsString = '';
}

function createProducts(dataLocations) {
  // forEach - метод обхода массива на чистом JS
  dataLocations.forEach(function (locations) {

    locationsString += `<div class="locations-item">
      <a href="${locations.link}" class="locations-link">
        <img src="${locations.imageUrl}" alt="" class="locations-pic">
        <p class="location-ttl-img">
          ${locations.title}
        </p>
      </a>
    </div>`;

  });

  return productString;
}

});
