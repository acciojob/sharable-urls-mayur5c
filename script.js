// your code here
function updateURL() {
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var url = document.getElementById("url").innerHTML;
  url += "?name=" + name;
  url += "&year=" + year;
  document.getElementById("url").innerHTML = url;
}