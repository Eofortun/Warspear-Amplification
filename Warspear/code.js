/*-=-=-=-=-=-=-=-=-=RANDOMIZAÇÃO=-=-=-=-=-=-=-=-=-=*/
function ObterNumeroRandon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
function Block(){
    console.log("=-=-=-=-=-=-=-=-=-=-=-=")
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
//GET PAGAMENTO DA AMPLIFICAÇÃO
let Price0,Price1,Price2
let Pay = [Price0,Price1,Price2]

for(let alpha = 0;alpha < Pay.length; alpha++){
    Pay[alpha] = document.getElementsByName("payment")[alpha]
}

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
//GET IMAGENS DAS ESTRELAS 
let Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9
let Images = [Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9]

for(let x = 0; x < Images.length;x++){
    Images[x] = document.querySelectorAll(".Images_get")[x]
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let AmpliButton = document.getElementById("botão")
let Click_count = document.getElementById("counter")
let Nivel = document.getElementById("Amplifier_nivel")
let Selos = document.getElementById("Sing_counter")
let Micoin = document.getElementById("Micoin")
let Ouro = document.getElementById("Ouro") //Meu ouro
let Custo = document.getElementById("Custo") //Custo do ampli

//AmpliButton.addEventListener("click", Valor_calculo)

AmpliButton.addEventListener("mouseenter", Luck)
AmpliButton.addEventListener("mouseenter", Coin)
AmpliButton.addEventListener("mouseenter", Sing)

let Contador_cliks = 0
let Sing_num = 0
let Multiplicador = 2

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let Ampli_Level = 0
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
//VALORES DO PLAYER

let Gold = 500
let Quantidade_Micoin = 0
let Valor = 200//15*10

Ouro.innerText = `Ouro:${Gold}`
let Calculo = Gold-(Multiplicador+Valor)

function Valor_calculo(){
    if(Calculo < 0){
        alert("Gold insulficiente!")
    }else{
        Ouro.innerText = `Ouro:${Calculo}`
        Custo.innerText = `Custo:${Multiplicador+Valor}`        
    }
    Contador_cliks++
    Calculo -= Multiplicador+Valor
    Click_count.innerText = `Clicks: ${Contador_cliks}`
    
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
function All(Valor_num,verificador = true){
    if(Valor_num == 1 && verificador == true){
        Ampli_Level++
        Multiplicador++
        console.log(`Item amplificado para +${Ampli_Level}!`)
        Nivel.innerText = `${Ampli_Level}`
    }else if(Valor_num == 2){
        if(Valor_num == 2 && verificador == true){
            Ampli_Level++
            Multiplicador++
            Quantidade_Micoin += 59
            console.log(`Item amplificado para +${Ampli_Level}!`)
            Nivel.innerText = `${Ampli_Level}`
            Micoin.innerText = `Micoin:${Quantidade_Micoin}`
        }else{
            Quantidade_Micoin += 59
            Micoin.innerText = `Micoin:${Quantidade_Micoin}`
        }
        
    }else if(Valor_num == 3){
        if(Valor_num == 3 && verificador == true){
            Ampli_Level++
            Multiplicador++
            Sing_num++
            console.log(`Item amplificado para +${Ampli_Level}!`)
            Nivel.innerText = `${Ampli_Level}`
        }else{
            Sing_num++
            Selos.innerText = `Selos:${Sing_num}`
        }
    }
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
function Luck(){
    if(Pay[0].checked){//Sem sing ou coin
        if(Ampli_Level == 0){
            Images[0].src = "imgs/star_yellow.png"
            All(1)
            Valor_calculo()
        }else{ 
            Try = ObterNumeroRandon(0,2*Multiplicador)
            Block()
            if(Try == Ampli_Level && Ampli_Level < 10){
                Images[Ampli_Level].src = "imgs/star_yellow.png"
                All(1)
                Valor_calculo()
            }else if(Try != Ampli_Level && Ampli_Level < 10){
                alert("Item perdido!")
            }else if(Ampli_Level >= 10){
                alert("MAXIMO")
            }
        }
    }
}
function Coin(){
    if(Pay[1].checked){
        
        if(Ampli_Level == 0){
            Images[0].src = "imgs/star_yellow.png"
            All(2)
            Valor_calculo()
        }else{ 
            Try = ObterNumeroRandon(0,2*Multiplicador)
            console.log(`Tentativa: 0 a ${2*Multiplicador}`)
            console.log(`Numero esperado: ${Ampli_Level}, Numero Obtido: ${Try}`)
            if(Try == Ampli_Level && Ampli_Level < 10){
                Images[Ampli_Level].src = "imgs/star_yellow.png"
                All(2)
                Valor_calculo()
            }else if(Try != Ampli_Level && Ampli_Level < 10){
                All(2,false)
                Valor_calculo()
            }else if(Ampli_Level >= 10){
                alert("MAXIMO")
            }
        }
    }
}
function Sing(){ 
    if(Pay[2].checked){//selos
        if(Ampli_Level == 0){
            Images[0].src = "imgs/star_yellow.png"
            All(3)
            Valor_calculo()
        }else{ 
            Try = ObterNumeroRandon(0,2*Multiplicador)
            console.log(`Tentativa: 0 a ${2*Multiplicador}`)
            console.log(`Numero esperado: ${Ampli_Level}, Numero Obtido: ${Try}`)
            if(Try == Ampli_Level && Ampli_Level < 10){
                Images[Ampli_Level].src = "imgs/star_yellow.png"
                All(3)
                Valor_calculo()
            }else if(Try != Ampli_Level && Ampli_Level < 10){
                console.log("Item Não Amplificado!")
                All(3,false)
                Valor_calculo()
            }else if(Ampli_Level >= 10){
                alert("MAXIMO")
            }
        }
    }
}