# Feladatok

**A 07-date -> 01-03 -> solution mappákban dolgozz!**
**A HTML-fájlokat ne módosítsd!**
**Az export utasításokat hagyd a fájlok végén!**
**Az `npm run test:date` parancs futtatásával tudod futtatni a teszteket!**

1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek a száma!

2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. Mind a két paraméter egy-egy dátum. A visszatérési értéke a két dátum közötti munkanapok (hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod! 

3. Írj egy függvényt `customDateFormats` néven, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
