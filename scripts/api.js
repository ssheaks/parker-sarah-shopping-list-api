'use strict';
// eslint-disable-next-line no-unused-vars
const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/parker';
  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, 
      callback
    );}; 
  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name
    });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: newItem,
      success: callback,
    });
  };
  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(updateData),
      success: callback,
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      success: callback,
    });
  };
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}();
