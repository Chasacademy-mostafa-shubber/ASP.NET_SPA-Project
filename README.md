### Utvecklare: Mostafa Shubber

### Info om projektet
Detta är ett skolprojket som handlar om ett spel där en användare spelar mot datorn. Båda slänger fram ett slumpmässigt tal, den som får högre siffra får en poäng. Den som får högst poäng vinner spelet.

### Verktyg
* Microsoft.AspNetCore.SpaProxy
* Microsoft.EntityFrameworkCore.Design
* Microsoft.EntityFrameworkCore.Sqlite
* Microsoft.EntityFrameworkCore.SqlServer
* Microsoft.VisualStudio.Web.CodeGeneration.Design
* Microsoft.EntityFrameworkCore.Tools

### Klasser
* Game
* User
* HighScore
* UserProfile

### Controller
* Account: Används för registrering, inloggning och utloggning
* Game: Används för att spela
* User: Används för att visa information i profilsidan och highscoresidan

### Sidor
* Game: Sidan där man spelar
* UserProfile: Visar information om hur många gånger användaren spelade, vunnit och förlorade
* UserHighScore: Visar användarens totala poäng
* ActiveUser: Får tillgång till spel, profil och highscoresidan om användaren är inloggad. Finns en knapp där användaren loggar ut.
* Register: Skapa ny användare
* Login: Inloggning med användarnamn och lösenord

### Databasdiagram
![SPA-Databas-Diagram](https://github.com/Chasacademy-mostafa-shubber/ASP.NET_SPA-Project/assets/113859196/7275ca5c-70f7-43f0-abb3-e5855b1aec6c)











