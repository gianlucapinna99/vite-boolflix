# BOOLFLIX

# MILESTONE 0

Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

-Creo struttura con vite e creo i primi componenti per far funzionare l'app. 
-Creo lo store per utilizzare l'api key per accedere all'api del sito e uso axios per fare la chiamata all'api e ricevere i dati.

# MILESTONE 1 

Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

Creo uno spazio di input che tramite v-model cambi il valore di search nel nostro store. 
Uso il valore di search per il metodo searchMovie e dare un valore all'api con in quale ci dia dei dati filtrati in base al valore immesso dall'utente.  
Riempo l'array movies con i dati restituiti dall'api, e utilizzo l'array per visualizzare a pagina tramite un ciclo for i vari dati in multipli div con le varie card dei film filtrati.




