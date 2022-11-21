
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const img1 = create
const listaMembri = [

  {
    "nome" : "Wayne Barnett",
    "ruolo" : "Founder & CEO",
    "foto" : "wayne-barnett-founder-ceo.jpg"
  },
  {
    "nome" : "Angela Caroll",
    "ruolo" : "Chief Editor",
    "foto" : "angela-caroll-chief-editor.jpg"
  },
  {
    "nome" : "Walter Gordon",
    "ruolo" : "Office Manager",
    "foto" : "walter-gordon-office-manager.jpg"
  },
  {
    "nome" : "Angela Lopez",
    "ruolo" : "Social Media Manager",
    "foto" : "angela-lopez-social-media-manager.jpg"
  },
  {
    "nome" : "Scott Estrada",
    "ruolo" : "Developer",
    "foto" : "scott-estrada-developer.jpg"
  },
  {
    "nome" : "Barbara Ramos",
    "ruolo" : "Graphic Designer",
    "foto" : "barbara-ramos-graphic-designer.jpg"
  }
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
  // 1.1: creiamo un ciclo che ripercorre l'array 
  for (let index = 0; index < listaMembri.length; index++) {
    // 2.1:dichiaro le varibili
    let col = eleId("obj"+(index+1));
    let membroIesimo = listaMembri[index];
    // 2.2 aggiungo le classi al container 
    addClass(col,"ms_card")
  
    // 1.2: creaiamo un ciclo che ripercorre le caratteristiche degli oggetti 
    for (let info in membroIesimo) {
      // 2.3 creo gli elementi
        let contenuto = membroIesimo[info];
        let container = creaEle("div");
        // 2.4 aggiungo le classi al container 
        addClass(container,"ms_card_obj");
        // 2.5 appendo il contenuto al container e alla colonna 
        container.append(contenuto);
        col.append(container) ;
      
    }
  }

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe




// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva








  

