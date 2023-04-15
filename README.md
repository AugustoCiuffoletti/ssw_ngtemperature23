# Realizziamo una scansione nel template con ngFor

Visualizziamo una serie di città con le relative temperature (non quelle reali).
Per questo utilizziamo la direttiva "ngFor", che serve a realizzare una scansione nel template HTML.
La direttiva fa parte del modulo esterno "CommonModule" che va importato nel componente "root".
Tramite la direttiva ngFor viene scandito un array di oggetti della classe TempCity, ciascuno contenente una coppia (città,temperatura).
La classe TempCity è dichiarata in un file, creato attraverso l'interfaccia grafica. Va importata nel componente per poter essere utilizzata.
L'array da scandire si chiama "cities" e viene inizializzando utilizzando il costruttore della classe TempCity.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)
