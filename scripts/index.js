'use strict';

/* global shoppingList, store, api, $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
<<<<<<< HEAD
});
=======
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});
>>>>>>> b9c920809c20ab0da31bc1c58e82180d656a36a7
