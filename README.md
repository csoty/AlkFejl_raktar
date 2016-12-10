# Generic raktár szoftver

Készíti: Karner Zsolt

**Program célja:**

A program célja, hogy egy alapvető raktár kezelését lehessen könnyen végrehajtani.
Ehhez szükséges bejelentkezési felülettel, illetve bejeletkezés utáni kezelőfelülettel, hogy lehessen cikkeket bevételezni a megfelelő tulajdonságokkal (cikkszám, megnevezés, forrás, ár, rendelkezésre álló mennyiség, esetlegesen már megrendelt érkezésben lévő mennyiség), kiadni lehessen a készleten lévőket (esetleg feljegyezni az igényelt kiadás mennyiségét, amennyiben nincs elegendő készleten), cikkszámot lehessen létrehozni mennyiségtől függetlenül, már kifutott cikkszámot lehessen törölni.

**Funkciók:**
  
Bejelentkezett felhasználóknak:
* Meglévő cikk bevétele
* Meglévő cikk kiadása
* Cikk létrehozása
* Kifutott cikk törlése

## Szerepek
- felhasználók: bejelentkezés után az összes funkció elérhető (bevétel,kiadás,felvétel,törlés,listázás)
- vendégek: csak a bejeletkezési felületet érik el, illetve a készlet listázását.

## Használati esetek
![UseCase Diagram] (imgs/usecase.png)

## Folyamatok
- Felhasználói
![Flowchart (User)] (imgs/flowchUser.png)

-Vendég 
![Flowchart (Guest)] (imgs/flowchGuest.png)

## Oldaltérkép
- Főoldal
- Bejelentkezés 
- Raktár műveletek
    + Bevételezés
    + kiadás
    + Cikk felvétele
    + Cikk törlése
- Készlet listázása
- :v (alternatív kijelentkezés)

## Végpontok
- GET /: Főoldal
- GET /login: bejeletkezés (felhasználótól adatbekérés)
- POST /login: bejeletkezés (adatok lekérése adatbázisból)
- GET /register: regisztráció (felhasználótól adatbekérés) [rejtett]
- POST /register: regisztráció (adatok mentése adatbázisba) [rejtett]
- GET /letrehozas: cikk felvétele (felhasználótól adatbekérés)
- POST /letrehozas: cikk felvétele (adatok mentése adatbázisba)
- GET /bevetelez: cikk bevételezése (felhasználó kiválasztja a bevételezendő cikket)
- POST /setqty: cikk bevételezése (választott cikkhez bevételezni kívánt mennyiség bekérése) [rejtett]
- POST /updQ: cikk bevételezése (választott cikkhez darabszám módosítása és ennek mentése adatbázisba) [rejtett]
- GET /torles: cikk törlése (felhasználótól adatbekérés)
- POST /torles: cikk törlés (adatbázisból törlés)
- GET /kiadas: cikk kiadása (felhasználó kiválasztja a kiadni kívánt cikket)
- POST /setdispqty: cikk kiadása (választott cikkhez kiadni kíván mennyiség bekérése) [rejtett]
- POST /dispose: cikk kiadas (választott cikk darabszámának módosítása és ennek mentése adatbázisba) [rejtett]
- GET /listKeszlet: raktárlészlet listázása