fetch('http://localhost:3000/api/cameras')
    .then(reponse => reponse.json())
    .then(response => {
        getProducts(response)
    })
    .catch(error => alert('Erreur : ' + error))

    const getProducts = cameras => {
        const productsContainer = document.getElementById('products')
      
        for (const camera of cameras) {
          const productContainer = document.createElement('div')
          productContainer.classList = 'col-md-4 shadow-lg'
      
          const productImage = document.createElement('img')
          productImage.src = camera.imageUrl
          productContainer.appendChild(productImage)
      
          const productName = document.createElement('h2')
          productName.textContent = camera.name
          productContainer.appendChild(productName)

          const productDescription = document.createElement('p')
          productDescription.textContent = camera.description
          productContainer.appendChild(productDescription)

          const productPrice = document.createElement('span')
          productPrice.textContent = `${camera.price / 100}.00 €`
          productContainer.appendChild(productPrice)

          productsContainer.appendChild(productContainer)
        }
      }

      