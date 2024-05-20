// setting dynamic copyright text

const d = new Date()
const currentDate = d.toString()
const currentYear = currentDate.split(' ')[3]

copyright = document.getElementById('copyright-text')
copyright.innerHTML = `Copyright © ${currentYear} Lymtech. All rights reserved.`

// setting testimonies slider

const firstTestimony = {
    img: './imgs/dep-icons/Dauber-300x300.jpg',
    name: 'Alejandra Dauber',
    role: 'Diretora Dauber y Asociados',
    testimony: 'Estamos adaptando processos robotizados e padronizados em nossas conciliações bancárias. Conseguimos gerar tempo humano para avaliação e o fortalecimento humano dentro do nosso escritório, liberando nosso pessoal de tarefas mecânicas'
}

const secondTestimony = {
    img: './imgs/dep-icons/Mauricio-Cerrutti-300x300.jpg',
    name: 'Maurício Cerrutti',
    role: 'Administrador, Barraca Deambrosi',
    testimony: 'O software nos permitiu automatizar processos de conciliação alcançando uma excelente eficiência e controle de nossas contas'
}

const thirdTestimony = {
    img: './imgs/dep-icons/Alvaro-Chebi-150x150.jpg',
    name: 'Álvaro Chebi',
    role: 'Gerente financeiro, SistarBank',
    testimony: 'O utilizamos há anos. Estamos muito satisfeitos, já que foi uma grande ajuda. Muito claro, muito moderno e um grande avanço para os sistemas contábeis'
}

let testimonies = [firstTestimony, secondTestimony, thirdTestimony]

const btnDep0 = document.getElementById('btn-next-dep-0')
const btnDep1 = document.getElementById('btn-next-dep-1')
const btnDep2 = document.getElementById('btn-next-dep-2')

const changeSelectedButtonColor = (button) => {
    button.style.backgroundColor = '#F8F8F8'
}

const changeUnselectedButtonColor = (button) => {
    button.style.backgroundColor = '#fbfbfb10'
}

const changeCardInfo = (index) => {
    const testimonyObj = testimonies[index]
    const name = testimonyObj.name
    const role = testimonyObj.role
    const text = testimonyObj.testimony
    const img = testimonyObj.img

    document.getElementById('depoimento-name').innerText = name
    document.getElementById('depoimento-role').innerText = role
    document.getElementById('depoimento-text').innerText = `"${text}"`
    document.getElementById('depoimento-img').src = img
}

const changeSelectedButtonSlider = (button) => {
    if (button == btnDep0) {
        changeSelectedButtonColor(btnDep0)
        changeUnselectedButtonColor(btnDep1)
        changeUnselectedButtonColor(btnDep2)
        changeCardInfo(0)
    } else if (button == btnDep1) {
        changeSelectedButtonColor(btnDep1)
        changeUnselectedButtonColor(btnDep0)
        changeUnselectedButtonColor(btnDep2)
        changeCardInfo(1)
    } else if (button == btnDep2) {
        changeSelectedButtonColor(btnDep2)
        changeUnselectedButtonColor(btnDep0)
        changeUnselectedButtonColor(btnDep1)
        changeCardInfo(2)
    }
}

changeSelectedButtonSlider(btnDep0)

btnDep0.addEventListener('click', (e) => {
    e.preventDefault()
    changeSelectedButtonSlider(btnDep0)
})

btnDep1.addEventListener('click', (e) => {
    e.preventDefault()
    changeSelectedButtonSlider(btnDep1)
})

btnDep2.addEventListener('click', (e) => {
    e.preventDefault()
    changeSelectedButtonSlider(btnDep2)
})

// establishing forms validation

const emailValidation = (email)=> {
    const regex =/\S+@\S+\.\S+/;
    return regex.test(email)
}

function phoneValidation(telefone){
    var retorno = false;
    //cast para string
    if(typeof telefone != "string"){
    telefone = telefone.toString();
    }
    //limpa string para validacao
    telefone = telefone.replace(/\D/g,"");
    //aplica ER
    var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
    if(valida){
    //prefixo e sufixo já é um telefone
        if(valida[5] && valida[6]){
        retorno = fone = valida[5]+"-"+valida[6];
        //caso celular
        if(valida[4]){
             retorno = valida[4]+fone;
        }
        if(valida[2] && valida[3] || valida[3]){
                    retorno = valida[2]+"("+valida[3]+")"+fone;
            //caso celular
            if(valida[4]){
                 retorno = valida[2]+"("+valida[3]+")"+valida[4]+fone;
            }
             if(!valida[2]){
                            retorno = "("+valida[3]+")"+fone;
                //caso celular
                if(valida[4]){
                    retorno = "("+valida[3]+")"+valida[4]+fone;
                            }
                    }
                }
        }
    }
    return retorno;
}

const formValidation = (name, email, phone)=> {
    if (name.length < 3) {
        const response = {
            "valid": false,
            "msg": "O nome inserido deve ser maior do que 3 caracteres"
        }
        return response
    } else if (email.length < 3 || emailValidation(email) == false) {
        const response = {
            "valid": false,
            "msg": "O e-mail inserido é inválido"
        }
        return response
    } else if (phone.length < 3 || phoneValidation(phone) == false) { 
        const response = {
            "valid": false,
            "msg": "O número de telefone inserido é inválido"
        }
        return response
    } else {
        const response = {
            "valid": true,
            "msg": "form data is valid"
        }
        return response
    }
}

const alertValidation = (msg)=> {
    const alertForm = document.getElementById('alertForm')
    alertForm.style.display = 'block'
    const alertText = document.getElementById('alertText')
    alertText.innerText = msg
}

const handleFormSuccess = ()=> {
    const formContato = document.getElementById('formContato')
    formContato.reset()
    const alertSucc = document.getElementById('alertFormSuccess')
    alertSucc.style.display = 'block'
}

const switchAlertValidation = ()=> {
    const alertForm = document.getElementById('alertForm')
    alertForm.style.display = 'none'
}

// making API request

const getDataForm = () => {
    const name = document.getElementById('nomeInput').value
    const email = document.getElementById('emailInput').value
    const phone = document.getElementById('telInput').value

    const validData = formValidation(name, email, phone)
    if (validData.valid == true) {
        const data = {
            "name": name,
            "email": email,
            "phone": phone,
            "team": "daMap"
        }
    
        return data
    } else {
        const error = {
            "error": true,
            "msg": validData.msg
        }

        return error
    }
}

const postLead = () => {
    let data = getDataForm()
    if (data.error == true) {
        alertValidation(data.msg)
    } else {
        axios({
            method: 'post',
            url: 'http://38.242.251.219:3000/call-btn',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                handleFormSuccess()
            })
            .catch((err) => { 
                if (err.response) {
                    const txt = 'Não foi possível realizar a ação agora, tente novamente mais tarde'
                    alertValidation(txt)
                } else if (err.request) {
                    const txt = 'Não foi possível realizar a ação agora, tente novamente mais tarde'
                    alertValidation(txt)
                }
                console.error(err) });

        switchAlertValidation()
    }
}

//botão
const btnKnowMore = document.querySelector('#knowMoreBtn');

btnKnowMore.addEventListener("click", (e) => {
    e.preventDefault();
    postLead();
});