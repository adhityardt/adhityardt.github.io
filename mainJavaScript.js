let nodeList = document.getElementsByTagName("LI");
for (let i = 0; i < nodeList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "x";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

let x = document.getElementsByClassName("x");
for (let i = 0; i < x.length; i++) {
  x[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('selesai');
  }
}, false);

function firstElement() {
  let li = document.createElement("li");
  let inputThings = document.getElementById("Input").value;
  let thread = document.createTextNode(inputThings);
  li.appendChild(thread);
  if (inputThings === '') {
    alert("You have to write something to add things to your list :D");
  } else {
    document.getElementById("myLIST").appendChild(li);
  }
  document.getElementById("Input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "x";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < x.length; i++) {
    x[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
