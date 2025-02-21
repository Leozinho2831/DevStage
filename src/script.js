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

const getUser = (userData) => {
    return users.find((user) => {
        return user.email == userData.email;
    });
  }
  
  const getTotalSubscribers = (userData) => {
    const subs = users.filter((user) => {
        return user.refBy == userData.ref
    });

    return subs.length;
  }

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


const formAction = () => {
    const form = document.querySelector("#form");
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const userData = {
            email: formData.get("email"),
            phone: formData.get("phone"),
        }

        const user = getUser(userData);
        if (user) {
            showInvite(user);
        } else {
            const newUser = saveUser(userData);
            showInvite(newUser);
        }
    }
}

const startApp = () => {
    const content = `
    <form action="#" id="form" class="space-y-3">
        <div class="relative">
            <img class="absolute top-[18px] left-4 w-5 h-5" src="src/images/icons/email.svg" alt="E-mail">
            <input 
                class="input" 
                type="email"
                name="email"
                placeholder="E-mail" 
                required
            >
        </div>
        <div class="relative">
            <img class="absolute top-[18px] left-4 w-5 h-5" src="src/images/icons/phone.svg" alt="Telefone">
            <input 
                class="input" 
                type="tel"
                name="phone"
                placeholder="Telefone"
                required
            >
        </div>
        <button class="btn !mt-6 flex justify-between gap-4" type="submit">
            Confirmar
            <img class="w-6 h-6" src="src/images/icons/arrow-right.svg" alt="seta para direita">
        </button>
    </form>`;
    app.innerHTML = content;

    formAction();
}

startApp();

// document.querySelector("#logo").onclick = () => startApp();
