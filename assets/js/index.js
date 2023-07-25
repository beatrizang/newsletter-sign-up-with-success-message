let btnSend = document.getElementById('main__form__button');
let btnDismiss = document.getElementById('end__button');
let emailEnd = document.getElementById('end__email');
let error = document.getElementById('main__form__error');
let email = document.getElementById('main__form__email');
let main = document.getElementById('main');
let end = document.getElementById('end');


btnSend.addEventListener('click',()=>{
    
    if(!esEmail(email.value)){
        error.style.display = 'flex';
        email.style.background = 'var(--light-orange)';
        email.style.color = 'var(--tomato)';
        email.style.border = '1px solid var(--tomato)';
    }
    else{
        error.style.display = 'none';
        email.style.background = 'transparent';
        email.style.color = 'var(--dark-slate-grey)';
        email.style.border = '1px solid var(--dark-slate-grey)';
        emailEnd.innerHTML = email.value;
        main.style.display = 'none';
        end.style.display = 'flex';
    }
});

btnDismiss.addEventListener('click',()=>{
        main.style.display = 'flex';
        end.style.display = 'none';
})


function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}