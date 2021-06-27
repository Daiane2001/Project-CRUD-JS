//Referências do DOM HTML

const tbodyList = document.getElementById('tbodyList');

const btnFirst = document.getElementById('btnFirst');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const lbtPage = document.getElementById('lbtPage');

//Código

let data, numberEL;

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

function listAll(){
    console.log('consulta de dados...');
    api.get('produtos').then(res=>{
        console.log('Realizando a consulta...');
        data = res.data;
        numberEL = data.length;
        console.log(numberEL);
        state.totalPage = Math.ceil(numberEL / 5);
        console.log(state.totalPage);
        populateList();
    });
}

function populateList(){ //preenchendo a tabela

    tbodyList.innerHTML = '';
    let i, tr;

        let iniPage = state.page -1;
        let  = iniPage * 5;
        let endCorte = startCorte + 5;

        console.log('Valor do startCorte = ' + startCorte);
        console.log('Valor do endCorte = ' + endCorte);

        const paginateItens = data.slice(startCorte,endCorte)

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
        lblPage.innerHTML = state.page;
};

listAll(); 

let state = {
    page:1,
    totalPage:10
};

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
    goto(numPage){
        if(numPage < 1){
            numPage = 1;
        }
        //total de paginação
        state.page = numPage;
        if(numPage > state.totalPage){
            state.page = state.totalPage;
        }
    }
}

console.log(state.page);

btnFirst.onclick = ()=>{
    controls.goto(1);
    populateList();
    console.log(state.page);
}

btnNext.onclick = ()=>{
    controls.next();
    populateList();
    console.log(state.page);
}

btnPrev.onclick = ()=>{
    controls.prev();
    populateList();
    console.log(state.page);
}

btnLast.onclick = ()=>{
    controls.goto(state.totalPage);
    populateList();
    console.log(state.page);
}