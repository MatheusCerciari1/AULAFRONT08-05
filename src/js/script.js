//declarando um array de imagens

let imagens =[
    'src/assets/imagem1.jpeg',
    'src/assets/imagem2.jpeg',
    'src/assets/imagem3.jpeg',
];

let index =0;
let tempo =3000;

function slideShow(){
    document.getElementById('image').src =imagens[index];
    index++;
    //verificar quantidade de imagens 
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)

}
slideShow();