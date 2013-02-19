"use strict";
var app = {
    initialize: function() {
      var loadurl = document.getElementById('loadurl');
      loadurl.form.addEventListener('submit', function (event) {
        event.preventDefault();
        app.load(sessionStorage.url = loadurl.value);
      }, false);

      document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    load: function (url) {
      if (url.indexOf('http') !== 0) {
          url = 'http://' + url;
      }

      window.location = url;
    },
    onDeviceReady: function() {
      if (sessionStorage.url) {
        app.load(sessionStorage.url);
      }
    }
};
app.initialize();