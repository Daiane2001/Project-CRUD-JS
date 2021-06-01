const btnExclusao = document.getElementById('btnExclusao');
const inpCodExclusao = document.getElementById('inpCodExclusao');

//código
const api = axios.create({
    baseURL: 'http://18.224.8.119:3334/'
});

btnExclusao.onclick = ()=>{
    let cod = inpCodExclusao.value;
    try {
        api.delete('produto/' + cod).then(
            resp=>{
                console.log('Registo deletado!!!!!!!')
            }
        );
    } catch(error){
        console.log('error: ' + error);
    }
};