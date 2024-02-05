---
title: DAC/Streaming - meine digitale Reise, Teil-III
layout: post
post-image: "/assets/images/blog-dac-adcs/gerihifi-dacadc3.png"
description: Grimm Audio MU2 High-End Streamer, DAC & Pre-Amp ..voll bekloppt!
toc: true
tags:
- streamer
- german
- dac
- teil3
---

<br>

>**DISCLAIMER: Die nachfolgenden Infos sind meine persönlichen Erfahrungen und ich besitze das Gerät - KEINE SPONSORED-WERBUNG!** \
>**Über die letzten 4 Jahre habe ich mich intensiv mit DAC's/Streamer beschäftigt und habe einige namhafte Hersteller bei mir in der Kette getestet.** \
>**Auch im DIY-Umfeld  habe ich mit Ian Canada DAC/Streamer und mit Doede's DDDAC sehr gute Erfahrungen gemacht.**

**Entwicklung ist teuer und Perfektion kostet Geld, dass gilt im Bereich DAC und Streamer genauso wie bei allen qualitativ- & innovativen- Herstellern!**

# Hintergrund

[Grimm Audio](https://www.grimmaudio.com/) gehört schon lange zu den renommierten EU-Herstellern (Niederlande) und kommt ursprünglich aus dem Studio Profibereich.

**Grimm hat sehr versierte und anerkannten Elektronik-Spezialisten, einige auch mit einer langen Historie bei Phillips. Sie sind als _Tüftler_ und auch im Netzteil- und Circuit-Design bekannt.**

Auch Ihre [Lautsprecher](https://www.grimmaudio.com/hifi-products/loudspeakers/) sind legendär, aber auch teuer (kleinste LS1a Modell kosten ab ~€15k). \
Ihr Musikserver machte erstmal Furore 2020 als der MU1 vorgestellt wurde. Dieser reiht sich in die gängigen (überteuerten) Musikserver ein, wie [Taiko](https://taikoaudio.com/), [Innous](https://innuos.com/) oder [Antipodes](https://antipodes.audio/).

Alpha Audio hat auf Ihrem YoutTube Kanal eine sehr gute Zusammenfassung. Ja, Sie sind aus Holland und sicher voreingenommen, **aber der MU2 ist nun mal perfekt!**

- [About the Grimm MU2 - Part 1 - The Digital part](https://www.youtube.com/watch?v=E4hy4a91Ov8)
- [About the Grimm MU2 - Part 2 - The analog part](https://www.youtube.com/watch?v=y2H32t-du14)
- [Review Grimm MU2 streamer - dac - pre amp - Live Test](https://www.youtube.com/watch?v=J3yvoXsk3IM)

---

# Grimm Audio MU2

**Das Design und Board wurde nochmals komplett überarbeitet und Sie haben nun auch eine voll-anaologe Pre-Amp Sektion + den _Major-DAC (FPGA basierend)_ mitverbaut.** \
**Der [MU2](https://www.grimmaudio.com/hifi-products/music-players/mu2/) Streamer+DAC+Preamp fungiert als Roon Server/Core/Endpoint und somit ist auch eine Roon-Subcsription zwingend erfoderlich.**

Viele belächeln das verbaute "Switch-Mode" Netzteil, jedoch wurde dies von Grimm komplett eigenentwickelt und wie Guido Tent im Alpha Audio [Video Teil-II](https://www.youtube.com/watch?v=y2H32t-du14) erklärt, wissen Sie was Sie tun :grimacing: . 

Es bedarf nicht immer die externen hybriden-/linearen Netzteile, oder gar alles über Akkus - **alles einer Frage von Synergie, zwischen digitaler & analoger Sektion!**
- Als Betriebssystem kommt ein angepasstes _Tiny Core Linux_ zum Einsatz
- Selbst entwickelteter Low jitter clock oscillator (haben auch sehr bekannte Clocks/Reclocker im Verkauf)
- Selbst entwickelter, sehr power-voller FPGA-Prozessor mit ausgefeiltem Upsampling und Noise-Shaper Filtern (alles aus eigenem Hause!)
- Die anaologe Preamp-Sektion und kompletter Signalweg ist in reiner Class-A ausgelegt 
- Der sog. _Major DAC_ ist ebenfalls eine Eigenentwicklung - diese _discrete 1.5-bit PWM_ Konvertierung, wird im FPGA durchgeführt
- Dies wird von Grimm auch genannt: **Pure Nyquist upsampling filters with a 'fundamentally flawless' 11th-order noise shaper of 1.5 bits.**
- Hardware: Intel i3/2.4GHz,4Cores,8GB RAM,2TB internal Samsung SSD

**MU2 Block Diagramm:**

![Diagramm](/assets/images/blog-dac-adcs/mu2-blockdiagramm.png)

**Hersteller Manuals sind auch sehr gut aufbereitet:**

- [Hardware Guide](https://www.grimmaudio.com/wordpress/wp-content/uploads/Manual-MU2-Hardware-v1.0.pdf)
- [Major DAC Blog](https://www.grimmaudio.com/publications/the-mu2-major-dac/)

---

# Mein FAZIT

Da ich persönlich schon einiges an sehr hochwertigen DAC/Streamer hatte, von Denafrips Terminator, Holo Audio L3 KTE, Merason DAC1, Rockna Wavelight, Lampizator Pacific, LinnebergG Satie, Lumin T2/Mini U2, Weiss DAC 501, Abbas DAC 3.2SE

...traue ich mehr zu, Unterschiede in meiner Kette zu erkennen und dass jeder seine entsprechende Signatur mitbringt! Wie so häufig im HiFi-Bereich, wo alle immer von "neutraler Wiedergabe" gerne philosophieren.

Ich bin nie ein Roon-Fan gewesen, da einfach zu teuer für diesen "simplen" Anwendungszweck. Jedoch man muss anerkennen, dass es die am Besten entwickelte APP und die stabilste Server-Player Software bietet. Auch das eingesetzte RAAT-Protokoll ist besser als Standard DLNA/UPnP und bei gängigen Herstellern sehr gut implementiert.

Ja ich nutze eine Lifetime-Subscription, da ich diese für etwas günstiger 2021 bekommen habe und nur selten genutzt - **jetzt ist Sie dauerhaft im Einsatz für den MU2 :relieved:**

**Nun endlich zum MU2 selbst....**

Eigentlich kann mich im DAC-/Streamer Bereich nichts mehr _vom Hocker_ reissen, da es wirklich sehr viele gute Sigma-Delta, R2R-Ladder, hybride-/FPGA-basierte Architekturen, als auch Vintage NOS (TDA1541,PCM64/63) gibt. **Hier nochmals mein HINWEIS: es geht nicht darum, teurer ist automatisch besser!!**

Aber wie dieses, kleine unscheinbare Gerätchen abliefert ist schon eine Wucht. Ich kann zu 99% nachvollziehen, was die holländischen Jungs von _Alpha Audio_ versuchten zu vermitteln:
- **Extrem präzise, aber nicht analytisch anstregend!**
- **Räumliche Darstellung entspricht dem jeweiligen Musikstück und ist nichts hinzugefügt (machen einige DAC's leider häufiger)!**
- **Die analoge Vorstufe (Relaisbasis) spielt locker jede 5k+ die ich bislang hatte an die Wand!**
- **Preis-/Leistung? Muss jeder persönlich entscheiden, wie bei allem im Leben!**
- **Roon läuft super stabil. Leider hat der MU2 keine Fernbedienung (IR-Sensor dabei), aber man steuert eh alles über Roon.**

---

:speech_balloon: **Ist der MU2 nun besser als meine Weiss DAC 501 und Lumin Mini U2 mit Ferrum Hypsos Netzteil?**

>**(J)NEIN! Der Weiss DAC 501 MKII + Lumin Streamer sind schon absolut TOP, aber All-In-One MU2 ist _langzeittauglicher_!** \
>**Was mir aber auffällt, dass der Weiss schon mehr in Musikstücken eingreift, wie größere Bühne und Instrumente mehr analytischer darstellt.** \
>**Darüber hinaus entfällt ein zusätzlicher Vorverstärker und ein Streamer - Platz-/Energie-sparender!**

:speech_balloon: **Ist der MU2 nun besser als der DIY Ian Canada DAC/Streamer?**

>**JA! Da beim Ian Canada der OPA zwar gut ist, aber niemals auf dem Niveau von Grimm. Da muss man schon nochmals relevantes DIY-PreAmp Projekt mitberücksichtigen!**

:speech_balloon: **Ist der MU2 DAC nun besser als der Abbas Audio 3.2SE (TDA1541 Vintage)?**

>**NEIN! Da der Abbas-DAC eine andere musikalische Signatur hat, die in Richtung Audio Note Level 3/4 geht und auch die ist _langzeittauglich_!**

---

# Fotostrecke

![mu2-1](/assets/images/grimmaudio-mu2/20240203_145334_thumb.jpg) [Big](/assets/images/grimmaudio-mu2/20240203_145334.jpg)
![mu2-1](/assets/images/grimmaudio-mu2/20240203_145352_thumb.jpg) [Big](/assets/images/grimmaudio-mu2/20240203_145352.jpg)
![mu2-1](/assets/images/grimmaudio-mu2/20240205_102305_thumb.jpg) [Big](/assets/images/grimmaudio-mu2/20240205_102305.jpg)
![mu2-1](/assets/images/grimmaudio-mu2/20240205_102336_thumb.jpg) [Big](/assets/images/grimmaudio-mu2/20240205_102336.jpg)