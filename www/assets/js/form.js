
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

        // Redirecionar para o arquivo "obrigado.html"
        window.location.href = 'https://gerenciarmarketplace.com.br/contactus.html';
}

const switchAlertValidation = ()=> {
    const alertForm = document.getElementById('alertForm')
    alertForm.style.display = 'none'
}

// making API request

const getDataForm = () => {
    const name = document.getElementById('nomeInput').value
    const email = document.getElementById('emailInput').value
    const description = document.getElementById('msgInput').value

    const validData = formValidation(name, email, phone)
    if (validData.valid == true) {
        const data = {
            "name": name,
            "email": email,
            
            "partner_name": partner_name,
            "description": description,
            "team": "gestaoProcessos"
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
            url: 'https://damap.com.br:3001/call-btn',
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