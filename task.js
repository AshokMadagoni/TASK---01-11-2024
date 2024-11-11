const products = [
    { image: 'https://m.media-amazon.com/images/I/61TxgBPYiHL._AC_UF1000,1000_QL80_.jpg',name: 'Brand name: Fossil', price: 'rs.12,495.00', description: 'Fossil E2811' },
    { image:"https://img.tatacliq.com/images/i17//437Wx649H/MP000000022274014_437Wx649H_202405140108151.jpeg",name: 'Brand name:Fastrack', price: 'rs.5000', description: 'Fastrack' },
    { image:"https://rukminim1.flixcart.com/image/800/800/jvcp9jk0/watch/m/m/g/new-2019-analog-watch-for-boy-analog-watch-for-men-royal-time-original-imafg6zz4ttcghcu.jpeg?q=90",name: 'Brand name:Times', price: '$300', description: 'Frank Time watch' },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQv1JUnmA--P4sYbJ7Tk2LMEmkshpGlmZFbA&s",name: 'Brand name:Rolex', price: 'rs.2000', description: 'Rolex watch ' },
];
const cardContainer = document.getElementById('cardContainer');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    const title = document.createElement('h3');
    title.textContent = product.name;
    const description = document.createElement('p');
    description.textContent = product.description;
    const price = document.createElement('p');
    price.textContent = product.price;
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    card.append(img,title,description,price,button);
    cardContainer.appendChild(card);
}); 