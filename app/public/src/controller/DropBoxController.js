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

        this.inputFilesEl.addEventListener('change', event =>{
            console.log(event.target.files);
            this.snackModalEl.style.display = 'block';
        });
    }

}