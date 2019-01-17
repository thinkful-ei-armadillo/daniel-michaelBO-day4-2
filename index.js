/* eslint-disable no-console */
/* global $ */
'use strict';

$(function () {

  // adding to list functionality
  $('#js-shopping-list-form').on('submit', function(event) {
    
    event.preventDefault();

    $('ul').append('<li><span class="shopping-item">' +
                      $('#shopping-list-entry').val() + `</span>
                      <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                          <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                          <span class="button-label">delete</span>
                        </button>
                      </div>
                    </li>`
    );
  });

  // adding checking functionality
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

    $(event.currentTarget).parent('div').parent('li').children('.shopping-item').toggleClass('shopping-item__checked');

  });

  // adding delete item functionality
  $('ul').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    $(this).closest('li').remove();
  });
});
