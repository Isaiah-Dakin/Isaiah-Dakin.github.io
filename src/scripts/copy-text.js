const copyButton = document.getElementById("copy-button");
const tooltip = document.getElementById("copy-tooltip");

copyText = function(text)
{
  navigator.clipboard.writeText(text);
  console.log("copied " + text);
}