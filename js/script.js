var app = new Vue(
    {
        el: '#root',
        
        data: {
            //Contatto attivo di Default
            contattoAttivo: 2,
            //variabile legata alla imput contenuta in => div con classe 'input-message' nell'HTML
            messaggioInputUtente: '',
            //variabile legata alla imput contenuta in => div con classe 'cerca' nell'HTML
            contenutoFiltro: '',
            //Variabile legata alla visibilità della dropdown => div con classe 'dropdown' nell'HTML
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropdownVisibility: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropdownVisibility: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            dropdownVisibility: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            dropdownVisibility: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropdownVisibility: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropdownVisibility: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            dropdownVisibility: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropdownVisibility: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            dropdownVisibility: false,
                        }
                    ],
                },
                {
                    name: 'Luiso',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropdownVisibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropdownVisibility: false,
                        }
                    ],
                },
            ]
            
        },
        methods: {
            //al click sull contatto cambia l'indice sul contatto attuale, cambiando a catena il resto del DOM con le info dell'utente
            cambiaContatto(index){
                this.contattoAttivo = index;
            },
            //Dopo aver premuto il tasto Enter il messaggio viene pushato all'interno dell'array di oggetti => messages e stampato di conseguenza
            //Dopo 1 secondo verra pushato nello stasso array un nuovo oggetto contenete una messaggio automatico di risposta
            inviaMessaggio(){
                if(this.messaggioInputUtente != ''){
                    this.contacts[this.contattoAttivo].messages.push({
                    date: dayjs().format('YYYY/MM/DD HH:MM:SS'),
                    text: this.messaggioInputUtente,
                    status: 'sent',
                    stileMessaggio: 'message-sent'});
                    this.messaggioInputUtente = '';
                    setTimeout(()=>{
                        this.contacts[this.contattoAttivo].messages.push({
                            date: dayjs().format('YYYY/MM/DD HH:MM:SS'),
                            text: 'ok',
                            status: 'received',
                            stileMessaggio: 'message-received'});
                    }, 1000);
                }
            }, 
            //Funzione che controlla ogni volta che viene premuto un tasto se la stringa è inclusa nel nome dell'oggetto e la rende visibile o meno => contacts.name
            //---aggiungi controlla fra stinghe minuscole---
            filtro(){
                this.contacts.forEach((element) => {
                    console.log(this.contacts);
                    if(element.name.toLowerCase().includes(this.contenutoFiltro.toLowerCase())){
                        element.visible=true;
                    }else{
                        element.visible=false;
                    }
                });
            }, 
            //Funzione che gestisce la visibilità della dropdwon, legata @clik a span con ID => icona-menu-tendina nell'HTML

            mostraDropdown(index){
                if(this.contacts[this.contattoAttivo].messages[index].dropdownVisibility == false){
                    this.contacts[this.contattoAttivo].messages[index].dropdownVisibility = true;
                }else{
                    this.contacts[this.contattoAttivo].messages[index].dropdownVisibility = false;
                }
            },
            //*Funzione che elimina il messaggio selezionato ( non riesco ad eliminare il primo )
            cancellaMessagio(index){
                this.contacts[this.contattoAttivo].messages.splice(index, 1);
            },
        }
    }
);
//puntini se messaggio troppo lungo 