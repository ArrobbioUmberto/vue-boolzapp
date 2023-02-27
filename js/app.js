console.log('ciao')

const contacts = [
  {
    name: 'Michele',
    avatar: './img/elonmusk_afp.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Hai portato a spasso il cane?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Ricordati di stendere i panni',
        status: 'sent'
      },
      {
        date: '10/01/2020 16:15:22',
        message: 'Tutto fatto!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Fabio',
    avatar: './img/warren-buffett.jpeg',
    visible: true,
    messages: [
      {
        date: '20/03/2020 16:30:00',
        message: 'Ciao come stai?',
        status: 'sent'
      },
      {
        date: '20/03/2020 16:30:55',
        message: 'Bene grazie! Stasera ci vediamo?',
        status: 'received'
      },
      {
        date: '20/03/2020 16:35:00',
        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
        status: 'sent'
      }
    ],
  },
  {
    name: 'Samuele',
    avatar: './img/zuckerberg-scaled.jpeg',
    visible: true,
    messages: [
      {
        date: '28/03/2020 10:10:40',
        message: 'La Marianna va in campagna',
        status: 'received'
      },
      {
        date: '28/03/2020 10:20:10',
        message: 'Sicuro di non aver sbagliato chat?',
        status: 'sent'
      },
      {
        date: '28/03/2020 16:15:22',
        message: 'Ah scusa!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Alessandro B.',
    avatar: './img/gates.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Lo sai che ha aperto una nuova pizzeria?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Si, ma preferirei andare al cinema',
        status: 'received'
      }
    ],
  },
  {
    name: 'Alessandro L.',
    avatar: './img/zuckerberg-scaled.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ricordati di chiamare la nonna',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Va bene, stasera la sento',
        status: 'received'
      }
    ],
  },
  {
    name: 'Claudia',
    avatar: './img/Steve_Jobs_Headshot_2010-CROP2.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'received'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'sent'
      }
    ],
  },
  {
    name: 'Federico',
    avatar: './img/gates.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che è il suo compleanno!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Davide',
    avatar: './img/warren-buffett.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Claudia',
    avatar: './img/Steve_Jobs_Headshot_2010-CROP2.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao Claudia, hai novità?',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Non ancora',
        status: 'received'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'Nessuna nuova, buona nuova',
        status: 'sent'
      }
    ],
  },
  {
    name: 'Federico',
    avatar: './img/gates.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Fai gli auguri a Martina che è il suo compleanno!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'Grazie per avermelo ricordato, le scrivo subito!',
        status: 'received'
      }
    ],
  },
  {
    name: 'Davide',
    avatar: './img/warren-buffett.jpeg',
    visible: true,
    messages: [
      {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
      },
      {
        date: '10/01/2020 15:50:00',
        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
        status: 'sent'
      },
      {
        date: '10/01/2020 15:51:00',
        message: 'OK!!',
        status: 'received'
      }
    ],
  }
]

const arrayMessaggi = contacts.map((el)=>{
  return el.messages.length-1
})
console.log(arrayMessaggi)



const {createApp} = Vue


// const {DateTime} = luxon




createApp({
  data() {
    return {
      currentUser: 0,
      contacts: [
        {
          name: 'Michele',
          avatar: './img/elonmusk_afp.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/warren-buffett.jpeg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/zuckerberg-scaled.jpeg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/gates.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/zuckerberg-scaled.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare il nonno',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/Steve_Jobs_Headshot_2010-CROP2.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/gates.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/warren-buffett.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/Steve_Jobs_Headshot_2010-CROP2.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/gates.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/warren-buffett.jpeg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      lastMessage: arrayMessaggi,
      firstMessage: 0,
      inputValue: '',
      response: 'ok!',
      searchTerm: '',
      
      
    }
},
computed: {
  filteredContacts() {
    if (this.searchTerm) {
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().startsWith(searchTermLowerCase)
      )
      this.searchTerm = ''
    } else {
      return this.contacts;
    }
  }
},
  methods: {
    // isHidden(contact) {
		// 	const name = contact.name.toLowerCase()
		// 	const search = this.searchTerm.trim().toLowerCase()

		// 	const result = name.includes(search)
		// 	console.log(name, search, result)

		// 	return result
		// 	// return true || false
		// },
    setCurrentUser(current) {
      this.currentUser = current
      this.inputValue = ''
      // in questo modo ogni volta che cambio chat e ho lasciato qualcosa scritto nella chat qiest'utlima si resetta e non me lo porto ingiro 
      // console.log(this.setCurrentUser)
    },
    addMessage() {
      // let chiscrive = this.setCurrentUser
      let messaggioInserito = this.inputValue.trim()
      if (messaggioInserito === '') {
        return
      }
      const date = this.getDateAsString('dd/LL/yyyy HH:mm:ss')
      let newMessage = {
        date: '10/01/2020 16:15:22',
        message: this.inputValue,
        status: 'sent',
      }
      // console.log(newMessage)
        this.contacts[this.currentUser].messages.push(newMessage)
      this.inputValue = ''
      // console.log('messaggio inviato:', messaggioInserito)
      // console.log(this.contacts)
    },
    responseMessage() {
      console.log('funzione risposta partita')
      setTimeout(() => {
        let messaggio = this.response
        let standardMessage = {
          date: '10/01/2020 16:15:22',
          message: messaggio,
          status: 'received',
        }
        // console.log(standardMessage)
          this.contacts[this.currentUser].messages.push(standardMessage)
        
      }, 1000)

    },
    // getDateAsString(format) {
    //   const now = DateTime.now()
    //   if(!format){
    //     format = 'dd/LL/yyyy'
    //   }
    //   return now.toFormat(format)
    // }
    // removeMessage(){
    //   let messaggioEliminare =
    // }
    
  },
}).mount('#app')
