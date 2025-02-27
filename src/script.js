const app = document.querySelector("#app");

const users = [
    {
        email: "test@test.com",
        phone: "99999999999",
        ref: 100,
        refBy: null
    },
    {
        email: "tust@tust.com",
        phone: "99999999999",
        ref: 200,
        refBy: 100
    },
    {
        email: 'tost@tost.com',
        phone: '99999999999',
        ref: 300,
        refBy: 200
    },
];

// pega o usuário
const getUser = (userData) => {
    return users.find((user) => {
        return user.email == userData.email;
    });
}

// mostra total de inscritos no link
const getTotalSubscribers = (userData) => {
    const subs = users.filter((user) => {
        return user.refBy == userData.ref
    });

    return subs.length;
}

// mostra nova página
const showInvite = (userData) => {
    app.innerHTML = `
    <div class="relative">
        <img class="absolute top-[18px] left-4 w-5 h-5" src="src/images/icons/link.svg" alt="link">
        <input 
            class="input"
            type="text"
            id="link" 
            value="https://evento.com?ref=${userData.ref}" 
            disabled
        >
    </div>
    
    <div id="stats" class="relative bg-gray-700 border border-gray-600 px-6 pt-7 pb-5 rounded-xl max-w-[368px]">
        <img class="absolute top-3 left-3 w-5 h-5" src="src/images/icons/check.svg" alt="selo de verificado">
        <h1 class="font-oxanium text-oxa-md text-gray-200 text-center">${getTotalSubscribers(userData)}</h1>
        <p class="font-montserrat text-mont-sm text-gray-300 text-center">Inscrições feitas!</p>
    </div>`;
}

// salva o usuário
const saveUser = (userData) => {
    const newUser = {
        // os ... faz o javascript compreender que é a mesma ideia do objeto com email e phone, não sendo necessário repetir
        ...userData,
        ref: Math.round(Math.random() * 4000),
        refBy: 100,
    }

    users.push(newUser);
    return newUser;
}

// cria um usuário
const formAction = () => {
    
    // valida o form
    const email = document.querySelector('#inputEmail');
    const phone = document.querySelector('#inputPhone');
    const form = document.querySelector('#form');

    // Validação para o email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Validação para o telefone
    const phoneRegex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;

    const classError = 'input-invalid';

    function verifyInput(){

        if (!emailRegex.test(email.value)){
            email.classList.add(classError);
        } else {
            email.classList.remove(classError);
        }

        if (!phoneRegex.test(phone.value)){
            phone.classList.add(classError);
        } else {
            phone.classList.remove(classError);
        }
    }

    const removeClassError = (element) => {
        if(element.classList.contains(classError)){
            element.classList.remove(classError);
        }
    }

    email.onclick = () => removeClassError(email);
    phone.onclick = () => removeClassError(phone);

    // complete valor do input phone
    function completeValueInput() {
        phone.value = phone.value.replace(/\D/g, '');

        let valueArrayPhone = [];

        // o replace é para não deixar digitar letras
        valueArrayPhone = phone.value.split('');

        if (valueArrayPhone.length === 11){
            phone.value = `(${valueArrayPhone.slice(0, 2).join('')}) ${valueArrayPhone.slice(2, 7).join('')}-${valueArrayPhone.slice(7, 11).join('')}`;
        }
    }

    phone.addEventListener('input', completeValueInput);

    form.onsubmit = (event) => {
        event.preventDefault();

        if(email.value === ''){
            email.classList.add(classError);
            verifyInput();

        } else if(phone.value === ''){
            phone.classList.add(classError);
            verifyInput();

        } else {
            const formData = new FormData(form);
            const userData = {
                email: formData.get("email"),
                phone: formData.get("phone"),
            }
        
            const user = getUser(userData);
        
            if (user){
                showInvite(user);
            } else {
                const newUser = saveUser(userData);
                showInvite(newUser);
            }
        }
    }
}

// começa a página
const startApp = () => {
    const content = `
        <section class="max-w-96 w-full">
            <header class="grid gap-8">
                <figure class="grid place-items-center cursor-pointer">
                    <img id="logo" class="w-28 h-8" src="src/images/logo.svg" alt="devStage">
                </figure>
                <h1 class="text-oxa-lg font-oxanium text-gray-100 text-center">
                    <span class="block text-blue">CodeCraft</span>
                    Summit 2025
                </h1>
            </header>
            <section class="mt-12 space-y-5">
                <div class="bg-gray-700 p-6 rounded-2xl">
                    <header class="flex justify-between gap-6">
                        <h2 class="text-oxa-sm font-oxanium text-gray-200">Sobre o evento</h2>
                        <figure class="flex gap-1">
                            <img src="src/images/icons/radio.svg" alt="Ao vivo">
                            <span class="text-purple text-mont-xs uppercase">Ao vivo</span>
                        </figure>
                    </header>
                    <div class="text-mont-sm text-gray-300 mt-6">
                        <p>
                            Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
                        </p>
                        <span class="block mt-6">Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito</span>
                    </div>
                </div>
                <form action="#" novalidate id="form" class="space-y-3 bg-gray-700 p-6 rounded-2xl">
                    <h3 class="text-gray-200 text-oxa-sm font-oxanium">Inscrição</h3>
                    <div class="relative !mt-6">
                        <img class="absolute top-[18px] left-4 w-5 h-5" src="src/images/icons/email.svg" alt="E-mail">
                        <input
                            id="inputEmail"
                            class="input" 
                            type="email"
                            name="email"
                            placeholder="E-mail" 
                        >
                        <p class="hidden">Error message</p>
                    </div>
                    <div class="relative">
                        <img class="absolute top-[18px] left-4 w-5 h-5" src="src/images/icons/phone.svg" alt="Telefone">
                        <input
                            id="inputPhone"
                            class="input" 
                            type="tel"
                            name="phone"
                            placeholder="Telefone"
                        >
                        <p class="hidden">Error message</p>
                    </div>
                    <button class="btn !mt-6 flex justify-between gap-4" type="submit">
                        Confirmar
                        <span class="icon-arrow"></span>
                    </button>
                </form>
            </section>
        </section>
    `;
    app.innerHTML = content;

    formAction();
}

startApp();

document.querySelector("#logo").onclick = () => startApp();
