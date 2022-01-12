var piedra = document.getElementById('piedra').value
var papel = document.getElementById('papel').value
var tijera = document.getElementById('tijera').value


document.getElementById('piedra').addEventListener("click", (e) => {
    console.log('la piedra', piedra)
    Computadora()
    document.getElementById("Seleccion").innerHTML = `
    <img style="width: 300px;" src="./img/2.png" class="card-img-top" alt="Elegiste Piedra" >
    `
    ;  
})

document.getElementById('papel').addEventListener("click", (e) => {
   
    console.log('la papel', papel) 
    Computadora() 
    document.getElementById("Seleccion").innerHTML = `
    <img style="width: 300px;" src="./img/3.png" class="card-img-top" alt="Elegiste Papel" >
    `
    
})

document.getElementById('tijera').addEventListener("click", (e) => {  
    console.log('la tijera', tijera)
    Computadora()
    document.getElementById("Seleccion").innerHTML = `
    <img style="width: 300px;" src="./img/1.png" class="card-img-top" alt="Elegiste Tijera" >
    `   
})




function Computadora() {
    const eleccion = ["Piedra", "Papel", "Tijera"];
    const aleatorio = Math.floor(Math.random() * 3);
    const resultComputer = eleccion[aleatorio];
    if (resultComputer=== "Piedra" ){
        document.getElementById("resultado").innerHTML = `
    <img style="width: 300px;" src="./img/2.png" class="card-img-top" alt="Elegiste Tijera" >
    `    
    }else if (resultComputer=== "Papel" ){
        
        document.getElementById("resultado").innerHTML = `
    <img style="width: 300px;" src="./img/3.png" class="card-img-top" alt="Elegiste Tijera" >
    `    
    }else{
        document.getElementById("resultado").innerHTML = `
    <img style="width: 300px;" src="./img/1.png" class="card-img-top" alt="Elegiste Tijera" >
    `   
    }


      
    console.log('EL RESULTADO' , resultComputer)

    return resultComputer
} 