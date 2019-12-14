
var express = require('express');
var app = express();

var WooCommerceAPI = require('woocommerce-api');
 
var WooCommerce = new WooCommerceAPI({
  url: 'http://veronica.codingkloud.com',
  consumerKey: 'ck_03e83242fdcbb62a01daebe9c4817741f4c18a36',
  consumerSecret: 'cs_069ce05d83a89152f983fcdd2d4460c213256009',
  wpAPI: true,
  version: 'wc/v1'
});


app.get('/', function (req, res) {
  WooCommerce.getAsync('products').then(function(result) {
	console.log(JSON.parse(result.toJSON().body));
    return JSON.parse(result.toJSON().body);
  });
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});