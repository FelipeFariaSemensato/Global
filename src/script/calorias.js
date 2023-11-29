// Homens = (13,75 x peso em quilos) + (5 x altura em centímetros) – (6,76 x idade em anos) + 66,5.
// Mulheres = (9,56 x peso em quilos) + (1,85 x altura em centímetros) – (4,68 x idade em anos) + 66,5.

document.querySelector('.showResult').style.display = "none"

document.querySelector('.calcBtn').addEventListener('click', () => {
    const gender = document.querySelector("select[name='format']").value
    const weight = document.querySelector("input[name='weight']").value
    const height = document.querySelector("input[name='height']").value
    const age = document.querySelector("input[name='age']").value

    let result = Math.round(calcKcal(gender, weight, height, age))

    showData(result, gender)
})


document.getElementById('close-result').addEventListener('click', () => {
    let elementos = document.getElementsByClassName('value');
    document.querySelector('.calcBtn').style.display = 'block'
    document.querySelector('.select').style.display = 'flex'
    
    
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.display = 'flex'
    }

    document.querySelector('.showResult').style.display = "none"
})



function calcKcal(gender, weight, height, age){

    document.querySelector('.select').style.display = 'none'
    let elementos = document.getElementsByClassName('value');
    document.querySelector('.calcBtn').style.display = 'none'

    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.display = 'none'
    }

    document.querySelector("select[name='format']").value = ''
    document.querySelector("input[name='weight']").value = ''
    document.querySelector("input[name='height']").value = ''
    document.querySelector("input[name='age']").value = ''




    if(gender === 'men'){
        return (13.75 * weight) + (5 * height) - (6.76 * age) + 66.5
    } else {
        return (9.56 * weight) + (1.85 * height) - (4.68 * age) + 66.5 
    }
}

function showData(result, gender){
    document.querySelector('.showResult').style.display = "flex"
    const genderValue = document.querySelector('.gender-value')
    const resultValue = document.querySelector('.result-value')

    if(gender === 'woman'){
        genderValue.innerText = `Você é uma Mulher`
    } else {
        genderValue.innerText = `Você é um Homem`
    }

    resultValue.innerText = `Portanto, sua taxa metabólica basal é de aproximadamente: ${result} kcal`
}
