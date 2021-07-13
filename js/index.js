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
          productContainer.classList = 'col-md-4'
      
          const productImage = document.createElement('img')
          productImage.src = camera.imageUrl
          productContainer.appendChild(productImage)
      
          const productName = document.createElement('h3')
          productName.innerHTML = camera.name
          productContainer.appendChild(productName)

          productsContainer.appendChild(productContainer)
        }
      }