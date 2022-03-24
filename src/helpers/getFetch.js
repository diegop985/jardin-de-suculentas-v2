
const productos = [
    {id: '1',name: 'Suculenta-1', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 10, price: 10, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '2',name: 'Suculenta-2', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 8, price: 13, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '3',name: 'Suculenta-3', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 4, price: 9, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '4',name: 'Suculenta-4', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 1, price: 15, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '5',name: 'Suculenta-5', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 20, price: 19, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '6',name: 'Suculenta-6', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 15, price: 20, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '7',name: 'Suculenta-7', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 15, price: 12, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '8',name: 'Suculenta-8', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 9, price: 4, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
    {id: '9',name: 'Suculenta-9', categoria: 'planta', description: "lorem ipsum dolor sit amet bla bla bla bla bla bla", stock: 18, price: 14, foto: 'https://i.imgur.com/sIMr8mr.jpg'},
   
]


const getFetch = new Promise (( resolve , reject) => {
    //acciones
    let condition = true

    if(condition) {
        setTimeout(()=> {
            resolve(productos)
        },3000)
    } else {
        reject("404 not found")
    }
})

export default getFetch