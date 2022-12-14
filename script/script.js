
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.


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
    let rigaCont = eleId("riga");
    let membroIesimo = listaMembri[index];
    // 2.2 aggiungo le classi al container 
    let col = creaEle("div")
    addClass(col,"col")
    addClass(col,"ms_card")
    rigaCont.append(col)
    let containerFoto = creaEle("div");
    let containerTesto = creaEle("div");
    addClass(containerTesto, "ms_testo")

  
    // 1.2: creaiamo un ciclo che ripercorre le caratteristiche degli oggetti 
    for (let info in membroIesimo) {

      // 2.3 creo gli elementi
      let contenuto = membroIesimo[info];



      // 2.4 aggiungo le classi al container 

      // BONUS 1:
      // Trasformare la stringa foto in una immagine effettiva

      // B1.1: se sto analizzando le foto le sostituisco con un imagine effettiva
      if (info == "foto") {
        // creo il container per le foto 
        
        let foto = creaEle("img");
        foto.src = "img/" + membroIesimo[info];
        membroIesimo[info] = foto;
        // B1.2 metto le foto in un container diverso per averle sopra al resto 
        containerFoto.append(foto);

        
      } else {

      // 2.5 appendo il contenuto restante  al container e alla colonna 
      let containerFiglio =creaEle("div")
      containerFiglio.append(contenuto)
      containerTesto.append(containerFiglio);


      }



      
    }

    col.append(containerFoto);
    addClass(containerFoto,"foto")
    col.append(containerTesto);
  }

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe














  

