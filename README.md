# Utilizziamo un servizio esterno

Vogliamo che la temperatura visualizzata sia quella comunicata da un servizio meteorologico.
Aggiungiamo nella directory "root" un servizio "WeatherService" per scaricare la temperatura reale da un servizio meteorologico. La funzionalità di base consiste nello scaricare la temperatura dal servizio remoto e viene realizzata con il metodo "ajax" di ReactiveJS. Il metodo restituisce un observable.
Una istanza "ws" del servizio WeatherService viene istanziata nel componente "root" inserendola come "private" nel costruttore. Ci penserà il framework ad istanziarla e a passarla come parametro (dependency injection).
Per utilizzarla tuttavia dobbiamo importare il file che la definisce nel componente "root" ed inserirla tra i "providers" nello stesso modulo.
Inoltre è necessario importare la classe AjaxResponse necessaria a elaborare la risposta di "ajax".
La temperatura viene inserita nell'array di TempCity e visualizzata.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-2wtzrm)
