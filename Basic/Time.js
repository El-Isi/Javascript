function GetFormatDate(){
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear() ;
    return day + '-' + month + '-' + year;
}

console.log('Today is ' + GetFormatDate());
