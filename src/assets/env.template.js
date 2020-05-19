(function (window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["apiBaseUrl"] = "${API_BASE_URL}";
})(this);