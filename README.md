# cc-proiectBackEnd
PREZENTAREA APLICATIEI Am creat o aplicație web care permite utilizatorilor să vadă care sunt cele mai populare filme în momentul de față și adauge într-un watchlist filmele pe care doresc sa le vadă în viitorul apropiat. Utilizatorii pot de asemenea sa caute ce film doresc să adauge în watchlist. 
Filmele adăugate în watchlist sunt stocate într-o bază de date în Cloud, gestionată de Google Cloud Platform. Filmele sunt afișate în pagina cu ajutorul unei API de la TMDB(The Movie Database). 
DESCRIERE 
API API TMDB 
The Movie Database este o bază de date pentru filme și seriale TV și a fost înființata în anul 2008. În fiecare an numărul contribuțiilor la baza de date a crescut și peste 400000 de developers și companii utilizează această platformă. Pe lângă informațiile despre actori, filme, seriale TMDB oferă și o gamă largă de imagini, peste 1000 de imagini sunt adăugate în fiecare zi. 
Pentru a folosi API pentru filme al celor de la TMDB trebuie să ne facem un cont pe site-ul https://www.themoviedb.org/. 
![image](https://user-images.githubusercontent.com/72129828/168488791-1de37352-e947-4203-93d1-f7d073b9dbed.png)

După crearea contului v-a trebui să intram în posesia unei chei pentru a putea utiliza API-ul. Aceasta cheie se găsește la setările contului -> API -> API KEY(v3 auth) 
![image](https://user-images.githubusercontent.com/72129828/168488805-8fdaa031-005d-44c2-949d-1c852094b032.png)

Pentru aplicația realizată de mine am utilizat API-ul pentru a-mi aduce în pagina cele mai populare filme și pentru a-mi aduce în pagina unele filme în funcție de o căutare.
![image](https://user-images.githubusercontent.com/72129828/168488824-39bf4fb4-d29a-47ce-a3c4-bf25df113e2c.png)

https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false 
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
GOOGLE CLOUD PLATFORM - SQL 
Pentru baza de date am utilizat GOOGLE CLOUD PLATFORM – SQL. Serviciul SQL este un serviciu de baze de date complet gestionat pentru MySQL, PostgreSQL și SQL Server.
Avantaje Cloud SQL: 
• Costuri mai mici de întreținere;
• Asigură continuitatea afacerii; 
• Asigură securitatea și comformitatea; 
• Este ușor de configurat; 
• Integrare ușoare; 
• Sarcinile sunt automate. 
Pentru aceasta aplicația am utilizat MySQL, am creat o instanța.
![image](https://user-images.githubusercontent.com/72129828/168488851-a988b500-6233-4841-8ed6-4a6512556d5b.png)


Baza de date consta dintr-un singur tabel în care sunt salvate filmele pe care utilizatorul dorește să le adauge în watchlist. 
![image](https://user-images.githubusercontent.com/72129828/168488890-b3253563-9636-4830-8c22-116509b1724e.png)
![image](https://user-images.githubusercontent.com/72129828/168488911-7a05564a-16ff-4a5b-aeee-34ebf2ca094f.png)


FLUX DE DATE
Căutarea unui film 
Pentru a căuta un film utilizatorul va trebui să introducă numele filmului în bara de căutare. De exemplu filmul Jack Reacher. Se va face un request https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher și răspunsul v-a fi un json:

![image](https://user-images.githubusercontent.com/72129828/168488944-52057e43-52da-4eae-97ba-d63d7d6f4257.png)

BACKEND EXEMPLE DE RESPONSE/REQUEST HTTP
Pentru partea de backend am folosit NODE,js. Am creat un server pentru a salva, a afișa și șterge din baza de date. 
HTTP GET Method
![image](https://user-images.githubusercontent.com/72129828/168488948-c0a09801-d009-4d35-ba6d-6f2b9f83a4ca.png)
![image](https://user-images.githubusercontent.com/72129828/168488953-00a9bcfb-c243-415a-b747-f2920ca3924e.png)

HTTP POST Method 
![image](https://user-images.githubusercontent.com/72129828/168488962-21a08f86-b0ec-45cb-8dec-1825d71e1cab.png) 
![image](https://user-images.githubusercontent.com/72129828/168488968-26a9d7c5-83ae-4659-a00c-125b0e64f289.png)

HTTP DELETE Method 
![image](https://user-images.githubusercontent.com/72129828/168488973-886d4dac-4177-4f35-bc17-9139ee4b9aff.png)
![image](https://user-images.githubusercontent.com/72129828/168488978-533d78dc-7431-4ed1-9ba3-a60928cba9b0.png)

FRONTEND REACT COMPONENTS 
Pentru partea de frontend am utilizat React. 
![image](https://user-images.githubusercontent.com/72129828/168488982-c412529f-a6d0-4f92-a9fb-7747d76dad61.png)


Avem 3 componente principale Movies,js, Search.js și WatchList.js. Acestea sunt cele 3 pagini ale aplicației. Pe lângă acestea avem un header Hearder.js și alte 2 componente MovieDetails.js și MovieResult.js pentru filmele căutate și filmele din watchlist. 
![image](https://user-images.githubusercontent.com/72129828/168488986-a6a3f0dd-d135-472b-9b9e-9e72ee48d440.png)
![image](https://user-images.githubusercontent.com/72129828/168488990-6b25c505-f210-4da9-825d-3fbbe1a14c9e.png)
![image](https://user-images.githubusercontent.com/72129828/168488995-a55fac93-4567-4819-9095-d350b81b7554.png)


REFERINTE

 Github backend: https://github.com/DraghiaCosmina/cc-proiectBackEnd
 Github frontend: https://github.com/DraghiaCosmina/cc-proiect 
 Video prezentare proiect: https://www.youtube.com/watch?v=y8dbfwrihhk
 Link deploy backend: https://mighty-springs-50951.herokuapp.com/movies (nu s-a reușit deploy-ul pentru frontend, se pot vizualiza înregistrarile existente în baza de date la acest URL)
 Link deploy frontend: https://murmuring-gorge-78410.herokuapp.com/ (nu funcționează)
![image](https://user-images.githubusercontent.com/72129828/168489287-11992801-250f-4379-b22b-ab519570dbf0.png)
![image](https://user-images.githubusercontent.com/72129828/168489289-fc8c83f3-746c-47c5-8175-9fa2eb355a4a.png)


