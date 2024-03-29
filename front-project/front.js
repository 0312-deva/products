const containerDiv =document.getElementById("container")
containerDiv.classList.add('containerStyle')

const getbyFrom = document.getElementById('getbyId')
const addNewform =document.getElementById('addNew')

fetch(`http://localhost:3000/products`)
.then(res =>res.json())
.then(products=> generateUI(products))

function generateUI (products){
    products.map((product) => {

    const card = document.createElement('div')
    card.classList="card"

    const image = document.createElement('img');
    image.classList.add('productImage')
    image.src = product.thumbnail

    const heading = document.createElement('h2')
    heading.innerHTML=product.title

    const brand = document.createElement('h4')
    brand.innerHTML=product.brand

    const price = document.createElement('h3')
    price.innerHTML=product.price

    const description = document.createElement('p')
    description.innerHTML=product.description

    card.appendChild(image)
    card.appendChild(heading)
    card.appendChild(brand)
    card.appendChild(price)
    card.appendChild(description)
     
     containerDiv.appendChild(card)
    })
}


