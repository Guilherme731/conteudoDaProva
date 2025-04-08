let aCorMudou = false;

function mudarCorJS(){
    if(!aCorMudou){
        document.getElementById('conteudoJS').style.backgroundColor = 'rgb(76, 232, 107)';
        aCorMudou = true;
    }else{
        document.getElementById('conteudoJS').style.backgroundColor = 'rgb(76, 232, 232)';
        aCorMudou = false;
    }
}

function mudarTextoApresentacao(){
    document.getElementById('textoApresentacao').innerText = 'Esse site está sendo modificado dinâmicamente por JS!!!';
}

function mudarTitulo(){
    document.title = 'ECMAScript!!!';
}