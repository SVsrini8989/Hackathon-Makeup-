//  var div = document.createElement("div");
//  div.style.textAlign = "center";

//  var input = document.createElement("input");
//  input.setAttribute("type", "text");
//  input.setAttribute("id", "product");

//  var button = document.createElement("button");
//  button.setAttribute("type", "button");
//  button.setAttribute("class", "btn btn-primary");
//  button.innerHTML = "search";
//  button.addEventListener("click", abc());

//  let brand = document.createElement("div");
//  brand.setAttribute("id", "brand");

//  div.append(input, button, brand);
//  document.body.brand.append(div);
var container = document.createElement("div");
container.setAttribute("class", "container mt-5");
container.setAttribute("id", "main-body");

var maindiv = document.createElement("div");
maindiv.setAttribute("class", "row");

let res;

async function fetchdata() {
    var url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
    let result = await fetch(url);
    res = await result.json();
    res.forEach(item => {

        var coldiv = document.createElement("div");
        coldiv.setAttribute("class", "col-sm-3");

        var div = document.createElement("div");
        div.setAttribute("class", "card");

        var image = document.createElement("IMG");
        image.setAttribute("src", item.image_link);
        image.setAttribute("alt", item.name);
        div.appendChild(image);

        var innerdiv = document.createElement("div");
        innerdiv.setAttribute("class", "card-body");

        var ancher = document.createElement("A");
        ancher.setAttribute("href", item.product_link);

        var product = document.createElement("h2");
        product.setAttribute("class", "card-title text-capitalize");
        product.textContent = item.brand + ' - ' + item.name;

        ancher.appendChild(product);

        innerdiv.appendChild(ancher);

        var price = document.createElement("h3");
        price.textContent = item.price + ' ' + item.price_sign;
        innerdiv.appendChild(price);

        var parah = document.createElement("P");
        parah.textContent = item.description;
        innerdiv.appendChild(parah);

        div.appendChild(innerdiv);

        coldiv.appendChild(div);

        maindiv.appendChild(coldiv);
    });
    container.appendChild(maindiv);
    document.body.appendChild(container);
}

fetchdata();

function searchData() {
    var searchValue = document.getElementById("sValue").value;

    var filterdata = [];
    res.map(item => {
        let brandValue = item.brand;
        if (brandValue && brandValue.toLowerCase().includes(searchValue.toLowerCase())) {
            filterdata.push(item);
        }
    });

    const element = document.getElementById("main-body");
    element.remove();

    var container = document.createElement("div");
    container.setAttribute("class", "container mt-5");
    container.setAttribute("id", "main-body");

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "row");

    filterdata.forEach(item => {

        var coldiv = document.createElement("div");
        coldiv.setAttribute("class", "col-sm-3");

        var div = document.createElement("div");
        div.setAttribute("class", "card");

        var image = document.createElement("IMG");
        image.setAttribute("src", item.image_link);
        image.setAttribute("alt", item.name);
        div.appendChild(image);

        var innerdiv = document.createElement("div");
        innerdiv.setAttribute("class", "card-body");

        var ancher = document.createElement("A");
        ancher.setAttribute("href", item.product_link);

        var product = document.createElement("h2");
        product.setAttribute("class", "card-title text-capitalize");
        product.textContent = item.brand + ' - ' + item.name;

        ancher.appendChild(product);

        innerdiv.appendChild(ancher);

        var price = document.createElement("h3");
        price.textContent = item.price + ' ' + item.price_sign;
        innerdiv.appendChild(price);

        var parah = document.createElement("P");
        parah.textContent = item.description;
        innerdiv.appendChild(parah);

        div.appendChild(innerdiv);

        coldiv.appendChild(div);

        maindiv.appendChild(coldiv);
    });
    container.appendChild(maindiv);
    document.body.appendChild(container);
}

//  async function abcd() {
//      try {
//          resultarea.innerHTML = `<h2 class="header1">Brands</h2>`;
//          let data = await fetch(url);
//          let data1 = await data.json();
//          let arr = [];
//          data1.forEach(ele => {
//              arr.push(ele.brand);
//          });
//          let array = [...new Set(arr)].sort();
//          array.forEach(ele => {
//              resultarea.innerHTML += `<h2 class="brands" onclick="getData('${ele}')">${ele}</h2><br>`;
//          });
//      } catch (error) {
//          resultarea.innerHTML += `<div class="catch">There is some problem in loading the brands...Please try again laterr<h2>`;
//      }
//  }
//abcd();

//  async function abc() {
//      let price = document.getElementById("brand");
//      var url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
//      let result = await fetch(url);
//      let res = await result.json();

//      let arr = [];
//      res.forEach(ele => {
//          arr.push(ele.brand);
//      });
//  let array = [...new Set(arr)].sort();
//  array.forEach(ele => {
//      resultarea.innerHTML += `<h2 class="brands" onclick="getData('${ele}')">${ele}</h2><br>`;
//  });
//  console.log(res);

// }

async function getData(ele) {
    resultarea.innerHTML = `<button id="btn" onclick="getBrands()">Back</button>`;
    try {
        let data = await fetch(url + `?brand=${ele}`);
        let data1 = await data.json();
        data1.forEach(element => {
            resultarea.innerHTML += `            
            <div class="container">
            <h3>Brand :${element.brand}</h3>
             <h3>Name :${element.name}</h3>
             <h3>Price :${element.price}</h3>
             <h3>Image :${element.image_link}</h3>
            <img src="${element.image_link} alt="image" width="100" heigth="100">
             <h3>Product Link :${element.product_link}</h3>
             <h3>Description :${element.description}</h3>
             </div>
              `;
        })
    } catch (error) {
        resultarea.innerHTML += `<div class="catch">There is some problem...Please try again later<h2>`;
    }
    console.log(data1);
};

//         })
//     } catch (error) {
//         resultarea.innerHTML += `<div class="catch">There is some problem...Please try again later<h2>`;
//     }



//     var index = result1.length - 1;
//     console.log(result1[index].product);
//     product.innerHTML = "THE BRAND AND THE NAME OF THE PRODUCT"
//     $(result1[index].product);
// }

// document.body.innerHTML = `<div class="header">
// <h4 id="title">Makeup API</h4>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBhg9HFW2YBD0-OLoHiEWvCmCQPZfqpls9w&usqp=CAU" width="75px" height="75px">
// </div>
// <div id="resultarea"></div>`;
// const url = "https://makeup-api.herokuapp.com/api/v1/products.json";

// async function getBrands() {
//     try {
//         resultarea.innerHTML = `<h2 class="header1">Brands</h2>`;
//         let data = await fetch(url);
//         let data1 = await data.json();
//         let arr = [];
//         data1.forEach(ele => {
//             arr.push(ele.brand);
//         });
//         let array = [...new Set(arr)].sort();
//         array.forEach(ele => {
//             resultarea.innerHTML += `<h2 class="brands" onclick="getData('${ele}')">${ele}</h2><br>`;
//         });
//     } catch (error) {
//         resultarea.innerHTML += `<div class="catch">There is some problem in loading the brands...Please try again laterr<h2>`;
//     }
// }
// getBrands();

// async function getData(ele) {
//     resultarea.innerHTML = `<button id="btn" onclick="getBrands()">Back</button>`;
//     try {
//         let data = await fetch(url + `?brand=${ele}`);
//         let data1 = await data.json();
//         data1.forEach(element => {
//             resultarea.innerHTML += `            
//             <div class="container">
//             <h3>Brand :${element.brand}</h3>
//             <h3>Name :${element.name}</h3>
//             <h3>Price :${element.price}</h3>
//             <h3>Image :${element.image_link}</h3>
//             <img src="${element.image_link} alt="image" width="100" heigth="100">
//             <h3>Product Link :${element.product_link}</h3>
//             <h3>Description :${element.description}</h3>
//             </div>
//             `;
//         })
//     } catch (error) {
//         resultarea.innerHTML += `<div class="catch">There is some problem...Please try again later<h2>`;
//     }
// };