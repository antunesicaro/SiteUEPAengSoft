/*efito de digitação*/
    const digitandoVazio = document.querySelector('[data-js="digitando"]')

    const arrayMensagens = ['Engenharia de Software','Engenharia de Software'];

    let messageIndex = 0;
    let caractereIndex = 0;
    let currentMessage = '';
    let currentCaractere = '';

    const digitadora = function(){

        if(messageIndex === arrayMensagens.length){ //não pode ser superior a 1, pois n tem um terceiro array com 'engenharia de sotw' pra ficar dando acrescimo e indo pra ele
            messageIndex = 0; //volta pro array de index 0 que contém 'Engenharia de Software', ai depois vai pro [1], dai quando chega no tamnho, volta pro 0
        }

        currentMessage = arrayMensagens[messageIndex];
        currentCaractere = currentMessage.slice(0,caractereIndex++)//aqui no caracterIndex vai se na primeira execuçãi 0, 0, dai depois 0,1, 0,2..ai vai varreando os caracteres que estão no array[0]
        digitandoVazio.textContent = currentCaractere; //conteudo de texto que selecionamos do html vai ser preenchido pelos caracteres
    
        if(currentCaractere.length === currentMessage.length){ //se o tamanho de caracterer for irgual ao tamanho da mensagem, é pq tudo já foi varrido
            messageIndex++;//era 0, agora vai ser 1 pra ir pra segunda mensagem
            caractereIndex = 0; //zera também os caracteres pra ler o segundo array desde o começo
        }   
    }

    setInterval(digitadora,200);//setInterval vai executar a função digitadora a cada x tempo
/*fim efito de digitação*/ 




/*menu-mobile*/
function initMenuMobile(){

    const menuMobileButton = document.querySelector('[data-menu="button"]');
    const menuUl = document.querySelector('[data-menu="list"]');

    function openMenuMobile(event){
        menuUl.classList.toggle('ativo');
        menuMobileButton.classList.toggle('ativo');
    }

    menuMobileButton.addEventListener('click',openMenuMobile);
}
/*fim menu-mobile*/

/*scroll suave*/
function initScrollSuave(){
    const sectionsComDataScroll = document.querySelectorAll('[data-scroll="scroll"]');

    if(sectionsComDataScroll.length){

        const telaUsuarioMetade = window.innerHeight;
        //console.log(telaUsuarioMetade)
        function animaScroll(){
            sectionsComDataScroll.forEach((sectionComDataScroll) => {
                const sectionTop = sectionComDataScroll.getBoundingClientRect().top;//distancia até o topo da tela
                const sectionVisivel = (sectionTop - telaUsuarioMetade ) < 0; //sectiontop - teladousuario...feito essa conta pra não ter que chegar no zero e sim um pouco antes para q a animação seja ativada

                if(sectionVisivel){
                    sectionComDataScroll.classList.add('aparece');
                }else{
                    sectionComDataScroll.classList.remove('aparece');
                }
            })
        }
        
        window.addEventListener('scroll',animaScroll);
        animaScroll();
    }


}

/*scroll suave*/


initMenuMobile();
initScrollSuave();