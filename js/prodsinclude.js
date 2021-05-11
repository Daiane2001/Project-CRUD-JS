//Referências do DOM - HTML

const inpNome = document.getElementById('inpNome');
const inpDesc = document.getElementById('inpDesc');
const inpQtda = document.getElementById('inpQtda');
const inpFab = document.getElementById('inpFab');


const btnInclude = document.getElementById('btnInclude');


//Código

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
});

document.querySelector('form').addEventListener('submit', event /*parâmetro de uma função*/ =>{
    event.preventDefault();
});

btnInclude.onclick = ()=>{
    let nome = inpNome.value;
    let desc = inpDesc.value;
    let qtda = inpQtda.value;
    let fab = inpFab.value;

    //dados do banco de dados
    data = {
        'nome': nome,
        'descri': desc,
        'qtda': qtda,
        'fabricante': fab,
    };

    //acesso a api
    api.post('produto/', data).then/*promisse*/(res=>{
        limparCampos();
        Swal.fire('Cadastro Realizado!!');
    }).catch(err => console.log('Erro ao realizar cadastro!!'));

};

function limparCampos(){
    inpNome.value = '';
    inpDesc.value = '';
    inpQtda.value = '';
    inpFab.value = '';
};