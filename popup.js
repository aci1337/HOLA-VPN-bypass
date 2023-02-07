document.getElementById("bypass-btn").addEventListener("click", function() {
  chrome.tabs.executeScript({
    code: `
      setTimeout(function() {
        let iframe = document.getElementById("_hola_popup_iframe__");
        let overlay = document.querySelector("[style*='background-color: rgba(0, 0, 0, 0.25) !important']");

        if (iframe) {
          iframe.parentNode.removeChild(iframe);
        }

        if (overlay) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 1000);
    `
  });
});