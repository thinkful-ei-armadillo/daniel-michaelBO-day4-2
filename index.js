/* eslint-disable no-console */
/* global $ */
'use strict';

$(function () {
  $('#js-shopping-list-form').on('submit', function(event) {
    
    event.preventDefault();

    $('ul').append('<li>' + $('#shopping-list-entry').val() + '</li>');

  });
  $('.shopping-item-toggle').on('click', function(event) {
    event.preventDefault();
    console.log('Test');
    if ( $('.shopping-item').hasClass('shopping-item__checked') === false ) {  
      $('.shopping-item-toggle').closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }
    else {
      $('.shopping-item-toggle').closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    }
  }
  );
  $('ul').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    $(this).closest('li').remove();
  });
});

// function main() {

// }


// $(main);