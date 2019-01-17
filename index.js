/* global $ */
'use strict';

$(function () {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();

    $('ul').append('<li>' + $('#shopping-list-entry').val() + '</li>');

    // and reference to all other bulbs const otherBulbs = $('.js-lightbulb').not(targetBulb);
    
    

    $('.shopping-item-toggle').on('click', function(event) {
      console.log('Test');
    $('button').closest('li').find('span').toggleClass('.shopping-item__checked');
    
    }
    
   

    );


  });
  $('ul').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
   });
});

// function main() {

// }


// $(main);