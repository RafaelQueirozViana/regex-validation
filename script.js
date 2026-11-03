
const campos = [
    { id: "email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, ok: "Email válido!", erro: "E-mail inválido (ex: usuario@dominio.com)" },
    { id: "cep", regex: /^\d{5}-\d{3}$/, ok: "CEP válido!", erro: "cep inválido (use o formato 00000-000)" },
    { id: "celular", regex: /^\(\d{2}\) \d{5}-\d{4}$/, ok: "Celular válido!", erro: "Formato esperado: (00) 00000-0000" },
    { id: "numeros", regex: /^\d+$/, ok: "Apenas Números Detectados!", erro: "O campo deve conter apenas números inteiros." },
    { id: "nome", regex: /^[A-Za-zÀ-ÿ]+(\s[A-Za-zÀ-ÿ]+)*$/, ok: "Nome válido!", erro: "Apenas letras e espaços são permitidos." }
];

campos.forEach(function (campo) {
    const input = document.getElementById(campo.id);
    const msg = document.createElement("div");
    msg.className = "msg";
    input.parentNode.appendChild(msg);

    input.addEventListener("input", function () {
        const valor = input.value;

        if (valor === "") {
            input.className = "";
            msg.className = "msg";
            msg.textContent = "";
            return;
        }

        const valido = campo.regex.test(valor);
        const estado = valido ? "valido" : "invalido";
        input.className = estado;
        msg.className = "msg " + estado;
        msg.textContent = valido ? campo.ok : campo.erro;
    });
});
