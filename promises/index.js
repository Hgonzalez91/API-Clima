/* console.log(`Hola Mundo`);

setTimeout(() => {
    console.log(`Mi nombre es Héctor`);
}, 5000);

console.log(`Cómo están?`); */

//PROMISE

let dollar = 10;

setTimeout(() => {
    const newPromise = new Promise((resolve, reject) => {
        if (dollar > 0){
            resolve (`Gracias por esos dolares ${dollar}`)
        } else {
            reject(`No tengo dinero`);
        }
    })

    newPromise
    .then((resp) => {
        console.log(resp);
    })
    .catch(err => console.log(err));
}, 3000);

let galleta = `Canela`

setTimeout(() => {
    const galletas = new Promise((resolve, reject) => {
        if(galleta === `Canela`){
            resolve(`Si tiene sabor a canela`)
        }else{
            reject(`No tiene sabor a canelita`)
        }
    })

    galletas
    .then((resp)=>{
        console.log(resp);
    })
    .catch(err => console.log(err));
}, 5000);