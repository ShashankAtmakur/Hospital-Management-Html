function datefor(name,value=0,type='sub'){
    var date = new Date();
    if(type==='sub')
        date.setDate(date.getDate()-value);
    else
        date.setDate(date.getDate()+value);
    var container = document.querySelector(name);
    container.innerHTML = date.toLocaleString('default',{month:'long'}) + ' ' + date.getDate() + ', ' + date.getFullYear();
}

datefor("#blogdate");
datefor(".blogdate");
datefor("#blogdate2", 2);
datefor("#blogdate3", 7);
datefor("#blogdate4", 12);
