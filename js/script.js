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
                            stileMessaggio: 'message-sent' //--chiave aggiunta per assegnare la classe dinamica ai messaggi con chiave corrispondente
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            stileMessaggio: 'message-received' //--chiave aggiunta per assegnare la classe dinamica ai messaggi con chiave corrispondente
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
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            stileMessaggio: 'message-received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
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
                            stileMessaggio: 'message-received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            stileMessaggio: 'message-received'
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
                            stileMessaggio: 'message-sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            stileMessaggio: 'message-received'
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
            }   

            
        },
    }
);
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)