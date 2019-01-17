/* global $ */
'use strict';

$(function () {
  $('button').on( 'click', function(event) {
    event.preventDefault();

    $('ul').append('<li>' + $('#shopping-list-entry') + '</li>' + '<span> .shopping-item-toggle' + '.shopping-item-delete' );

  });
  // $('ul').on('click', '.shopping-item-delete', function(event) {
  //   this.remove();
  // });
});

// function main() {

// }


// $(main);