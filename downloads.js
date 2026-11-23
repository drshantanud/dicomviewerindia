// Download links. Paste each installer's public URL between the quotes.
// While a link is empty, its button goes to the contact form instead.
var DOWNLOADS = {
  demo:   "",  // DicomViewer-Demo-Setup-<version>.exe
  basic:  "https://github.com/drshantanud/dicomviewer-downloads/releases/download/v0.1.0.58/DicomViewer-Basic-Setup-0.1.0.58.exe",  // DicomViewer-Basic-Setup-<version>.exe
  full:   "https://github.com/drshantanud/dicomviewer-downloads/releases/download/v0.1.0.58/DicomViewer-Setup-0.1.0.58.exe",  // DicomViewer-Setup-<version>.exe
  cathos: ""   // DicomViewer-CathOS-Setup-<version>.exe
};
var VERSION = "0.1.0.58";  // e.g. "0.1.0.58", shown under the buttons when set

document.querySelectorAll("[data-download]").forEach(function (a) {
  var url = DOWNLOADS[a.getAttribute("data-download")];
  if (url) {
    a.href = url;
    if (VERSION) {
      var m = document.createElement("span");
      m.className = "meta";
      m.textContent = "Version " + VERSION;
      a.insertAdjacentElement("afterend", m);
    }
  } else {
    a.textContent = "Request download";
  }
});
var y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
