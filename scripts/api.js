'use strict';
const api = function() {
<<<<<<< HEAD
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/parker'
    const getItems = function(callback){
        $.getJSON(`${BASE_URL}/items`, callback);
    }
    const createItem = function(name, callback){
        const newItem = JSON.stringify({
            name,
        })
        $.ajax({
        url: `${BASE_URL}/items`,
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: newItem,
        success: callback,
    })
}
    const updateItem = function(id, updateData, callback) {
        $.ajax({
            url: `${BASE_URL}/items/${id}`,
            method: 'PATCH',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(updateData),
            success: callback,
        })
    }
    return {
        getItems,
        createItem,
        updateItem,
    }
=======
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/parker';
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };
  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
    });
  };
  return {
    getItems,
    createItem,
  };
>>>>>>> b9c920809c20ab0da31bc1c58e82180d656a36a7
}();

