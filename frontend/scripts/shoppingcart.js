  
const cart = document.getElementById('cart');

getItem();

function getItem() {
    fetch("/api/warenkorb/get")
        .then(r => r.json())
        .then(r => {
            console.log(r.allProducts[0])
            console.log(r.allProducts.length)

            let productId = []
            for (let i = 0; i < r.allProducts.length; i++) {
                console.log(r.allProducts[i])
                if (!productId.includes(r.allProducts[i].id)) {
                    productId.push(r.allProducts[i].id)
                }
            }
            productId.forEach(id => {
                console.log(id)
                console.log(r.allProducts[Number(id)].productName)
                cart.innerHTML += `
                <img src="../assets/img/${r.allProducts[Number(id)].imageName}">
                ${r.allProducts[Number(id)].productName}
                <br>
                ${r.allProducts[Number(id)].specialOffer} CHF`
            });
            console.log(productId)

        });
}