// Referências do DOM HTML

const tbodyList = document.getElementById('tbodyList');

const bntFirst = document.getElementById('btnFirst');
const bntPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnLast = document.getElementById('btnLast');

const lblPage = document.getElementById('lblPage');


// Código

let data, numberEl;
let state = {
    page:1,
    totalPage:1
}

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

function listAll(){
    console.log('Consulta de dados....');
    
    api.get('produtos').then(res=>{
        console.log('Realizando a consulta ....');
        data = res.data;
        numberEl = data.length;
        console.log(numberEl);
        state.totalPage = Math.ceil(numberEl / 5);
        console.log(state.totalPage);
        populateList();
    });
}

function populateList(){ //preenchendo a tabela

        tbodyList.innerHTML = '';

        let i, tr;

        let iniPage = state.page - 1;
        let startCorte = iniPage * 5;
        let endCorte = startCorte + 5;

        console.log('Valor do startCorte = ' + startCorte);
        console.log('Valor do endCorte = ' + endCorte);

        const paginateItens = data.slice(startCorte, endCorte);
              
        for(i=0; i < paginateItens.length; i++){
            tr = '<tr>' +
                    '<td>' + paginateItens[i].cod /*o paginateItens é um vetor de objetos*/ + '</td>' +
                    '<td>' + paginateItens[i].nome /*o paginateItens é um vetor de objetos*/ + '</td>' +
                    '<td>' + paginateItens[i].descri /*o paginateItens é um vetor de objetos*/ + '</td>' +
                    '<td>' + paginateItens[i].qtda /*o paginateItens é um vetor de objetos*/ + '</td>' +
                    '<td>' + paginateItens[i].fabricante /*o paginateItens é um vetor de objetos*/ + '</td>' +
                    '<td>' + paginateItens[i].datahora /*o paginateItens é um vetor de objetos*/ + '</td>' +
                 '</tr>';
            tbodyList.innerHTML += tr;
            tr = tbodyList.childNodes;
        }
        lblPage.innerHTML= state.page;
};

listAll();

controls ={
    next(){
        state.page++;
        if(state.page > state.totalPage){
            state.page--;
        }
    },
    prev(){
        state.page--;
        if(state.page < 1){
            state.page++;
        }
    },
    goTo(numPage){
        if(numPage < 1){
            numPage = 1;
        }
        state.page = numPage;
        if(numPage > state.totalPage){
            state.page = state.totalPage;
        }
    }
}

console.log(state.page);

bntFirst.onclick = ()=>{
    controls.goTo(1);
    populateList();
    console.log(state.page);
}

bntPrev.onclick = ()=>{
    controls.prev();
    populateList();
    console.log(state.page);
};

btnNext.onclick = ()=>{
    controls.next();
    populateList();
    console.log(state.page);
};

btnLast.onclick = ()=>{
    controls.goTo(state.totalPage);
    populateList();
    console.log(state.page);
};

