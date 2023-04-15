# Colleghiamo la nuova view

Eliminiamo la app "filler" in main.ts
Modifichiamo index.html e main.ts per far riferimento al nuovo component. Sostituiamo my-app con app-root in index.html. In main.ts sostituiamo App con RootComponent, ed importiamo il codice dove viene definito. Possiamo eliminare import inutili, e dobbiamo definire il nostro component come "standalone" per semplificarne la configurazione.
 

Aggiungiamo una riga nel main.ts per importare la classe che definisce il nuovo component
Aggiungiamo una proprietà "standalone" nel nostro component
Eliminiamo la classe filler "my-app" dal main.ts
Definiamo una proprietà "titolo" per la nostra classe
Inseriamola nella nostra View, il template HTML

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)