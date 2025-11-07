# 📌 Rättningsrapport – fed24s-the-zoo-AmandaBalk

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/xBUCHFwF)
# The Zoo

I denna inlämningsuppgift kommer ni att bygga ett zoo. Zoo:t har ett antal djur som kommer behöva matas. 

Er uppgift kommer att göra en startsida till zoo:t. Denna bör vara väl genomtänkt grafiskt, ha en tydlig uppgyggnad
och använda sig av så många css-tekniker ni har lärt er som möjligt. 

På startsidan skall det någonstans finnas en länk till en djur-sida där besökare kan se vilka djur som finns och en
kort beskrivning av varje djur tillsammans med en bild. Tyvärr har några av djurens bilder blivit fel och dessa behöver
ni hantera på ett bra sätt. 

När en användare klickar på ett djur kommer användaren till en djur-sida där bara ett djur presenteras. Här kommer det
finnas mer information om djuret än det fanns på översiktssidan. Presentationen bör fortfarande hanteras på ett bra sätt
genom olika css-tekniker som ni har lärt er. 

På djursidan kommer det att finnas en knapp för att mata ett djur. Följande regler gäller för matningen av ett djur:

- Om ett djur inte har fått mat på fyra timmar skall knappen Mata gå att klicka på.
- Om ett djur har fått mat inom fyra timmar skall knappen vara oklickbar.
- När ett djur inte har fått mat på tre timmar skall en indikation på att djuret snart behöver matas visas.

På översiktssidan för djuren skall det också vara synligt om ett djur är mätt, hungrigt eller i desperat behov av mat. 
Men på denna översiktssida är tiderna lite annorlunda än för detaljsidan. Här gäller

- Om ett djur inte fått mat på tre timmar skall det visas en varning om att djuret snart behöver mat. 
- Om ett djur inte har fått mat på fem timmar skall det visas en notis om att nu behöver djuret matas. 

Exakt hur ni löser detta kommer att vara upp till er. Men, stäm av er lösning med mig så att jag kan komma med
förslag eller idéer om hur ni skulle kunna göra den annorlunda vid behov. 

Djuren finns på följande url: https://animals.azurewebsites.net/api/animals

## Betygskriterier

### Betyg G

- Ni skall använda en router för att visa olika sidor i er applikation. 
- I er routerlösning skall ni kunna använda olika koncept såsom layouts, child-routes och error-element korrekt.
- Ni behöver visa en översiktssida för djuren där det går att klicka på ett djur. 
- Ni skall kunna mata ett djur på djur-detaljsidan och spara tiden när djuret matades. 
- Ni hanterar trasiga bild-länkar korrekt.
- Ni behöver använda någon annan teknik än ren css för styling i denna uppgift. Det kan vara tailwind, scss, material ui eller någonting annat. 

### Betyg VG

- Samtliga krav från betyg G skall vara uppfyllda. 
- Ni behöver välja att antingen hämta data med hjälp av begreppet tjänster eller en custom hook. 
- Ni behöver använda er av context istället för props för att kommunicera mellan komponenter. 
- Ni behöver använda er av reducers istället för state för hanteringen av djur. 
- När ni har matat ett djur och kommer tillbaka till djur-sidan skall eventuellt matningen nollställas, om rätt villkor angående tiderna här ovan stämmer. 
- På översiktsidan skall djurens status presenteras på ett diskret sätt beroende på tiderna beskriva här ovan. 
- Ni använder er av subtila animeringar vid klick på knappar, eventuellt sidladdningar och route-förändringar samt där ni känner att det behövs

## Övrigt

Kom ihåg att stämma av de idéer ni har med mig innan ni börjar koda. Ofta finns det någonting som behöver itereras några gånger och det är bra att göra
detta innan ni kommer för långt i er tänkta lösning. 

Rita gärna upp er lösning så ni enklare förstår hur ni skall dela upp era komponenter och förstå hur kommunikationen mellan komponenter sker.

Välj en teknik gällande css som ni antingen vill lära er mer om eller som ni tycker är rolig och håll er till ert val genom projektet, även om det verkar som att saker inte fungerar som ni vill. Det kan vi lösa tillsammans. 

Ha roligt, skratta och lär er massor!


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Projektet uppfyller både kraven för betyg G och VG. Koden använder en router för att visa olika sidor, där layouts, child-routes och error-element är korrekt implementerade【4:0†Router.tsx.txt】. En översiktssida för djuren finns, och användaren kan klicka på ett djur för mer information【4:4†Animals.tsx.txt】. Matningsfunktionaliteten fungerar som specificerat, och tiderna hanteras korrekt med reducer och context istället för state【4:3†AnimalContext.tsx.txt】. Trasiga bildlänkar hanteras, Tailwind CSS används för styling【4:10†index.css】, och subtila animeringar finns vid knapptryckningar【4:5†SelectedAnimal.tsx.txt】. Data hämtas via kontextualisering och användningen av användarkontext är exemplarisk【4:3†AnimalContext.tsx.txt】.

💡 **Förbättringsförslag:**  
Inga större förbättringar behövs, men det kan vara värdefullt att lägga till mer kommentarer i koden för att underlätta för framtida underhåll och potentiella förbättringar av projektet.