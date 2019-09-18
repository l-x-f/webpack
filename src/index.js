import _ from "lodash";
import "./style.css";
import Icon from "./assets/images/favicon.ico";
import data from "./assets/test.csv";
import xml from "./assets/xml.xml";
import printMe from "./print";
function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["1", "w"], " ");

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(data);
  console.log(xml);
  printMe();
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
