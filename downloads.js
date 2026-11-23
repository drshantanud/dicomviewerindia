// Download links. Paste each installer's public URL between the quotes.
// While a link is empty, its button goes to the contact form instead.
// The version shown under each button is read from the file name.
var BASE = "https://github.com/drshantanud/dicomviewer-downloads/releases/download/v0.1.0.58/";
var DOWNLOADS = {
  demo:   BASE + "DicomViewer-Demo-Setup-0.1.0.61.exe",
  basic:  BASE + "DicomViewer-Basic-Setup-0.1.0.58.exe",
  full:   BASE + "DicomViewer-Setup-0.1.0.58.exe",
  cathos: ""   // DicomViewer-CathOS-Setup-<version>.exe
};

document.querySelectorAll("[data-download]").forEach(function (a) {
  var url = DOWNLOADS[a.getAttribute("data-download")];
  if (url) {
    a.href = url;
    var v = url.match(/-(\d+(?:\.\d+)+)\.exe$/);
    if (v) {
      var m = document.createElement("span");
      m.className = "meta";
      m.textContent = "Version " + v[1];
      a.insertAdjacentElement("afterend", m);
    }
  } else {
    a.textContent = "Request download";
  }
});
var y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
