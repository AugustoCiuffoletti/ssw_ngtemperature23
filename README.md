# Realizziamo una scansione nel template con ngFor

Sostituiamo ogni elemento della lista delle città con un bottone che seleziona la città corrispondente, che verrà mostrata in una riga di notifica.
Per questo introduciamo dei bottoni collegati ad un metodo callback dichiarato nel componente.
Il metodo, attivato al "click" si chiama "seleziona", e prende come parametro il nome di città mostrato nel bottone.
Il metodo è inserito nel componente "root", quindi è una delle sue proprietà.
Il metodo copia il valore di città ricevuto nella proprietà "selezionata" del componente "root".
Il valore di questa proprietà è collegato nel template e visualizzato dinamicamente.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)
