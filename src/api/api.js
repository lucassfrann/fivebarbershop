const products = [{
    title: 'Polvo magico',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/189/845/products/stardust11-f76ad74ebdc9f1b7d715871607905917-1024-1024.png',
    stock: 50,
    price: 950,
    id: 1,
},
{
    title: 'Desamarillador',
    image: 'https://farmacityar.vteximg.com.br/arquivos/ids/205573-1000-1000/219374_shampoo-alta-moda-e-desamarillador-x-300-ml_imagen-1.jpg?v=637419976472200000',
    stock: 50,
    price: 500,
    id: 2,
},
{
    title: 'Cera Hairstyle',
    image: 'https://http2.mlstatic.com/D_NQ_NP_918527-MLA31017144328_062019-O.webp',
    stock: 50,
    price: 930,
    id: 3,
},
]

const promesa = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})

function getItems() {
    return promesa
}

export {
    getItems, 
}