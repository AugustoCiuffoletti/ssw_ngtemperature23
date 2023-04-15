# Utilizziamo un servizio esterno

Vogliamo che la temperatura visualizzata sia quella comunicata da un servizio meteorologico.
Aggiungiamo nella directory "root" un servizio per scaricare la temperatura reale da un servizio meteorologico. ... La funzionalità di base consiste nello scaricare la temperatura dal servizio remoto.
Una istanza del servizio deve essere istanziata nel componente "root". per questo viene inserita nel costruttore. Ci penserà il framework ad istanziarla e a passarla come parametro (dependency injection).
Per utilizzarla tuttavia dobbiamo importare il file che la definisce nel componente "root", e inserirla tra i "providers" per lo stesso modulo.
Inoltre è necessario importare e 

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)
