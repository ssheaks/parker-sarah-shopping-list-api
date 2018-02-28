'use strict';

/* global shoppingList, store, api, $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  'use strict';

  function handleResponse(response){
    store.items = response;
    shoppingList.render();
  }
  
  api.getItems(handleResponse);

});
