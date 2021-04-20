//Referências do DOM HTML

const tbodyList = document.getElementById('tbodyList');

//Código

const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
})

function listAll(){
    console.log('consulta de dados...');
    api.get('produtos').then(res=>{
        console.log('Realizando a consulta...');
        const data = res.data;
        let i, tr;

        for(i=0; i < data.length; i++){
            tr = '<tr>' +
                    '<td>' + data[i].cod /*o data é um vetor de objetos*/ + '</td>' +
                    '<td>' + data[i].nome /*o data é um vetor de objetos*/ + '</td>' +
                    '<td>' + data[i].descri /*o data é um vetor de objetos*/ + '</td>' +
                    '<td>' + data[i].qtda /*o data é um vetor de objetos*/ + '</td>' +
                    '<td>' + data[i].fabricante /*o data é um vetor de objetos*/ + '</td>' +
                    '<td>' + data[i].datahora /*o data é um vetor de objetos*/ + '</td>' +
                 '</tr>';
            tbodyList.innerHTML += tr;
            tr = tbodyList.childNodes;
        }
    });
}

listAll();