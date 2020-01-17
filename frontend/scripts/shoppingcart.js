const cart = document.getElementById('cart');
const price = document.getElementById('price');
var sum = 0;

getItem();

function getItem() {
    fetch("/api/warenkorb/get")
        .then(r => r.json())
        .then(r => {
            let productId = []
            for (let i = 0; i < r.allProducts.length; i++) {
                productId.push(r.allProducts[i].id)
                sum = sum + r.allProducts[i].specialOffer
                if (!productId.includes(i)) {
                    cart.innerHTML += `             
                <tr>
                <td> 1x </td>                
                <td>${r.allProducts[Number(i)].productName}</td>
                <td><p style="color: red; text-decoration: line-through">${r.allProducts[Number(i)].normalPrice} CHF</p></td>
                <td><p style="color: green">${r.allProducts[Number(i)].specialOffer} CHF </p></td>
              </tr>
              <br>`
                }
                console.log(productId)

            }
            displayCheckout();

        });
}

function displayCheckout() {

    document.getElementById("checkout").innerHTML = `Ihre Summe: ${sum.toFixed(2)} CHF`;
    document.getElementById("pay").innerHTML = `Bezahlen`;

}