const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('hey!');
        } else {
            reject('whooops!');
        }
    });
}

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('True!');
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then( response => {
        console.log('array ' , response);
    }).catch( err => {
    console.error(err);
})
