# Visualizziamo la temperatura associata ad una città

Vogliamo visualizzare la temperatura accanto alla nome della città nella riga di notifica.
Per fare questo sostituiamo la stringa "selezionata" con un oggetto "selezione" della classe TempCity. Come la stringa, anche questo sarà condiviso tra View e Controller.
Per selezionare l'oggetto nell'array utilizziamo una ricerca associativa, evitando l'uso di costrutti iterativi. Utilizziamo quindi il metodo "filter" applicato all'array "cities". Il metodo "seleziona" copia nella variabile "selezione" l'elemento TempCity che corrisponde al nome di città. 
Nella view verrà inserita una notifica che visualizza le due proprietà dell'oggetto TempCity.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)
