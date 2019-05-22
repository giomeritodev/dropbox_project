class DropBoxController{

    constructor(){
        //atributos dos botões do html 
        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snackModalEl = document.querySelector('#react-snackbar-root');

        this.initEvents();
    }

    initEvents(){
        //evento click do btn envio de arquivos
        this.btnSendFileEl.addEventListener('click', event => {
            //Abre a janela para envio de arquivos
            this.inputFilesEl.click();

        });

        this.inputFilesEl.addEventListener('change', event => {
            //lista de arquivos para tranferencia
            this.uploadTask(event.target.files);

            //Mostra o snackbar arquivos selecionados para transferencia
            this.snackModalEl.style.display = 'block';
        });
    }

    //Array para permitir selecionar mais de um arquivo
    uploadTask(files){
        
        let promises = [];

        //Converte de uma colecao de dados para um array
        [...files].forEach(file =>{

            promises.push(new Promise((resolve, reject) => {

                let ajax = new XMLHttpRequest();

                ajax.open('POST', '/upload');

                ajax.onload = event => {
                    try {
                        resolve(JSON.parse(ajax.responseText));
                    } catch (error) {
                        reject(error);
                    }
                };

                ajax.onerror = event => {
                    reject(event);
                };

                let formData = new FormData();

                //junta os elementos
                formData.append('input-file', file);
                
                //envia a solicitacao
                ajax.send(formData);

            }));
        });

        return Promise.all(promises);
    }

}