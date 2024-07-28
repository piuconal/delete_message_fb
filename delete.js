function getElementsByText(str, tag = "a") {
  return Array.prototype.slice
    .call(document.getElementsByTagName(tag))
    .filter((el) => el.textContent.trim() === str.trim());
}
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function doIt() {
  console.log("1");
  getElementsByText = function getElementsByText(str, tag = "a") {
    return Array.prototype.slice
      .call(document.getElementsByTagName(tag))
      .filter((el) => el.textContent.trim() === str.trim());
  };
  getElementByXpath = function getElementByXpath(path) {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  };

  document.querySelectorAll('[aria-label="Menu"]')[1].click();

  setTimeout(function () {
    getElementByXpath(
      '//span[text()="Delete Chat" or text()="Delete chat"]'
    ).click();
  }, 1500);

  setTimeout(function () {
    getElementByXpath(
      '//div[(@aria-label="Delete Chat" and @tabindex="0")or(@aria-label="Delete chat" and @tabindex="0")]'
    ).click();
  }, 1000);
}

var myInt = setInterval(function () {
  doIt();
}, 2000);
