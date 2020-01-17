const content = document.getElementById("product");

displayProduct();

function displayProduct() {
    //gets product out of url
    const url = window.location.href;
    var length = url.length;
    var toCut = length - 3;
    var res = url.slice(toCut);
    console.log(res);
    fetch("/api/products")
        .then(r => r.json())
        .then(products => products.forEach(products => {
            if (products.id == res) {
                content.innerHTML +=
                    `
                    <div class="card">
                    <h1 class="card-title">${products.productName}</h1>
                         <div class="card-body">
                         <img src="../assets/img/${products.imageName}" style="width: 30%">
                         <hr />
                         <ul class="list-group list-group-flush">
                         <li class="list-group-item"><h3>${products.description}</h3></li>
                         <hr />
                         <p style="font-size: 15px; color:red; text-decoration: line-through" >${products.normalPrice} CHF</p>
                         <p style="font-size: 15px; color:green;">${products.specialOffer} CHF</p>
                       </ul>
                       <hr />
                       <button class="btn btn-success" type="button" onclick="add()">In den Warenkorb legen</button>
                        </div>
                    </div>
                    `
            }
        }));
}

function add() {
    const url = window.location.href;
    var length = url.length;
    var toCut = length - 3;
    var res = url.slice(toCut);
    console.log(res);
    fetch(`/api/warenkorb/${res}`, { method: "POST" });
}