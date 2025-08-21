const myImage = document.querySelector("img");

myImage.onclick = function () {
  const mysrc = myImage.getAttribute("src");
  if (mysrc == "images/1717584265600.png")
    myImage.setAttribute("src", "images/1717584270939.png");
  else myImage.setAttribute("src", "images/1717584265600.png");
};

let mybutton = document.querySelector("button");
let myheading = document.querySelector("h1");

function setusername() {
  let myname = prompt("输入名字");
  if (!myname) myname = "默认名字";
  localStorage.setItem("name", myname);
  myheading.textContent = `首次测试中, ${myname}`;
}

if (!localStorage.getItem("name")) {
  setusername();
} else {
  const storedname = localStorage.getItem("name");
  myheading.textContent = `后续测试中, ${storedname}`;
}

mybutton.onclick = function () {
  setusername();
};
