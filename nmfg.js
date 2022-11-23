
let data = [];
let memberNames = {};
let memberId = 0;
let imageId = 1;
function save() {
  const files = document.getElementById("upload").files;
  let name = document.getElementById("names").value;
  let category = document.getElementById("category").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let phone = document.getElementById("phone").value;
  let myObject = {
    name: name,
    category: category,
    date: date,
    email: email,
    phone: phone
  };

  if (!files || files.length==0)
      return;
  const fileLoad = files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileLoad);
  reader.onload = () => {
    myObject['file'] = reader.result;
  };

  data.push(myObject);
  let p1 = document.createElement("p");
  let image = document.createElement("img");
  memberId += 1;
  let key = name; 
  memberNames[memberId] = name;
  p1.textContent = name;
  p1.setAttribute("id", memberId);
  image.setAttribute("id", key);
  p1.setAttribute("class", "tp");
  image.setAttribute("class", 'img-class');
  document.body.appendChild(p1);
  document.body.appendChild(image);
  let clicked = document.getElementsByTagName("p");
  for (let p of clicked) {
    p.addEventListener("click", getClicked);
  }
}

function getClicked(e) {
  let clicked = e.target.id;
  for (let k in memberNames) {
    if (k === clicked) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === memberNames[k]) {
          let imgId = data[i].name
          document.getElementById(k).innerHTML =
            "Name: "+
            data[i].name +
            "<br>" +
            "Category: " +
            data[i].category +
            "<br>" +
            "Email: " +
            data[i].email +
            "<br>" +
             "Date: " +
            data[i].date +
            "<br>" +
            "Phone: " +
            data[i].phone + "<br><br>" +
            "Product_picture: <br>" 
            let image = document.getElementById(imgId);
            image.src = data[i].file;
        }
      }
    }
  }
}
