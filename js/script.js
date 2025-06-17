// Pega os usuários do localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

function salvar() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Cadastro
function cadastrar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    alert("Preencha tudo!");
    return;
  }

  usuarios.push({ nome, email, senha });
  salvar();
  mostrar();
  alert("Cadastrado!");
}

// Listagem
function mostrar() {
  let lista = document.getElementById("lista");
  if (!lista) return;
  lista.innerHTML = "";
  usuarios.forEach((u, i) => {
    lista.innerHTML += `${u.nome} - ${u.email} <button onclick="excluir(${i})">Excluir</button><br>`;
  });
}

// Excluir
function excluir(i) {
  usuarios.splice(i, 1);
  salvar();
  mostrar();
}

// Login
function login() {
  let email = document.getElementById("loginEmail").value;
  let senha = document.getElementById("loginSenha").value;

  let achou = usuarios.find(u => u.email === email && u.senha === senha);
  if (achou) {
    alert("Bem-vindo, " + achou.nome + "!");
    window.location.href = "index.html";
  } else {
    alert("Login inválido!");
  }
}

// Chama listagem só se estiver na index
if (document.getElementById("lista")) {
  mostrar();
}
