if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};



$(document).ready(() => {
    const $div = $('<div>')
    console.log($div)

    $('body').append($div)
    $($div).addClass('meat')
    const $h3 = $('<h3>')
    $h3.text('Ostrich')
    $div.append($h3)

    // add another div with a food class and an h3 element with text of the food item

    const $foodDiv = $('<div>')
    $foodDiv.addClass('vegetable')
    const $foodh3 = $('<h3>')
    $($foodDiv).append($foodh3)
    $foodh3.text('Tapas')
    $('body').append($foodDiv)

    //array of all the divs
    const $divs = $('div')
    //$divs.hide('slow')
    const $meat = $('.meat')
    console.log($meat)

    const $foodImg = $('<img src=https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="some food pictured">')
    $('body').prepend($foodImg)

    console.log($divs[2])
    console.log($divs.eq(2))

    $divs.eq(2).children().text('Carrots')
    console.log($divs.eq(2).children().eq(2))

    //typical api query ==> another way to add images, rather than in HTML
    // Response.imageArray.forEach((link) => {
    //     const $img = $(`<img src="${link}"`)
    //     $gallery.append($img)
    // })
})