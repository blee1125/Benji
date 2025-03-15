document.addEventListener("DOMContentLoaded", function () {
  let excuseText = document.getElementById("excuse-text");
  let copyBtn = document.getElementById("copy-btn");

  // Request an excuse from the background script
  chrome.runtime.sendMessage({ action: "getExcuse" }, function (response) {
    if (response && response.excuse) {
      excuseText.textContent = response.excuse;
    }
  });

  // Copy the excuse to clipboard when button is clicked
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(excuseText.textContent);
    alert("Excuse copied!");
  });
});
