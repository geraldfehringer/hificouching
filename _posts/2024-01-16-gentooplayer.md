---
title: Gentooplayer Installationsanleitung
layout: post
post-image: "/assets/images/blog-gentooplayer/gentooplayer-logo.png"
description: Alles zum Thema audiophiles-OS für den Selbstbau, auf Basis von GentooPlayer.
tags:
- streaming
- diy
- german
---

# Hintergrund

Es gibt eine Vielzahl an sehr guten _Audiophilen-Betriebssystemen (OS)_, jedoch ich persönlich habe nach meinen Recherchen und [Ian Canada DIY DAC/Streamer-Projekt](https://github.com/iancanada/DocumentDownload), klar für **[GentooPlayer](https://gentooplayers.com/)** entschieden.

**<u>WICHTIGER HINWEIS:</u> Ich nutze KEINE traditionellen Musik-Server auf PC-Basis wie Antipodes, Aurender, Grimm MU1/2, oder Selbstbau X86-Architektur. Ist für mich völlig uninteressant, da ich große CD-Sammlung besitze und Red Book als adäquates Abspielformat liebe, zum Online Streaming selbst!** <br>Des weiteren verkomplizieren PC-Architekturen hochwertige Streamer und es muss viel Aufwand betrieben werden, dass wieder in den Griff zu bekommen.

NEIN, für ein optimiertes Streaming-OS benötigt man auch kein 64bit-Architektur, weder viel RAM oder High-End SSD-Festplatten! Dies wird leider immer fälschlich dargestellt! Dies ist nur dann erforderlich, der unbedingt alles in DSD abspielen/konvertieren möchte, oder zusätzlich Upsampling betreiben will. **Hat auf einem Streamer nix zu suchen, wieder Musikserver-Thematik für die Roon/HQPlayer/Audirvana-Fraktion.**

---

<u>Hier eine Liste der meist-genutzten OS'e im DIY-Umfeld und meiner Gewichtung:</u>

| OS | Link | Lizenz |
| :-- | :-- | :-- |
| 1. GentooPlayer | https://gentooplayers.com | 30-Tage Trial, danach **einmalig ~€70** pro Hardware, voll optimierter Kernel + RAM lauffähig. Gibt auch gegen ~€40 einmalig Aufpreis, hoch-optimierte Kernel (CLANG CTO) |
| 2. Moode Audio | https://moodeaudio.org | Hatte ich vor GentooPlayer im Einsatz. Auch TOP-Empfehlung für Raspi-basierte Projekte! Aktuell noch kostenlos. | |
| 3. Snakeoil OS | https://www.snakeoil-os.net/ | Guter UI, aber volles Ubuntu-Release, teilweise optimierter Kernel |
| 4. Audiophile Linux | https://www.ap-linux.com | Auch schon länger dabei und nutzen ebenfalls wie GentooPlayder optimierte Audio-Kernel. Komplett kostenlos, daher leider auch nicht besonders aktive Entwicklung. Aktuelle Version von 2019.|
| Audio Linux | https://www.audio-linux.com | Jede Menge Releases. Kostet auch so ab ~€69 einmalig. Zu viele Features und für mich overloaded und auch wieder eher für Musikserver. |
| Daphile | https://www.daphile.com | X86-basiert, zu hohe HW-Anforderungen, eher für einen PC-basierten Musikserver. |
| Volumio | https://volumio.com/en/get-started | Freie Version nicht wirklich brauchbar (zu eingeschränkt), aber in wenigen Minuten nutzbar und einfache App-Oberfläche, Premium ~6€ /Monat. Funktioniert am Besten mit deren kommerziellen Hardware! |
| Euphony Stylus | https://euphony-audio.com/ | Sehr gute UI und ist eher als Roon Ersatz gedacht. Closed-Source und muss von USB gebootet werden und danacg RAM. Sehr teuer ~€13 /Monat und für mich Over-Engineered! |

> **HINWEIS:** Jeder kommerzielle DAC/Streamer Hersteller egal ob Lumin, Auralic und Konsorten, nutzen unter der _Haube_ entsprechende Open-Source Komponenten/Libraries. Lasst Euch hier nicht von der (App)Oberfläche blenden ;-) - **will damit sagen: die obige Liste ist schon für High-End-Anwendungen gedacht und nicht nerdige Spielwiese!**

---

# Voraussetzungen

>**Gute Streamer-Plattform (aka Player)**
>Diese beiden DIY-Projekte sind die Aktivsten hierzu:
>- Mein persönlicher Favorit - Ian Canada, https://github.com/iancanada/DocumentDownload
>- Doede hat hier den DIY-Standard gesetzt - DDDAC, https://www.dddac.com/
>- Siehe hierzu auch den Vergleich mit absoluten High-End DACs (MSB, dcs ..), [AD Audio Link](https://adaudio.wordpress.com/2022/11/01/how-good-is-the-dddac-a-comparison-with-dcs-bartok-mola-mola-tambaqui-and-msb-discrete-and-prestige/)

>**Guter Digital-Analog-Wandler (DAC oder auch ADC genannt):**
Für beste Qualität sollte DAC und Streamer in separaten Chassis sein. Ebenso getrennte Software für den Player (sog. Streamer) und DAC.

>**Saubere LAN-Verkabelung & LAN-Switch:**
>- WLAN und Bluetooth sind für mich bei einem High-End Streamer NO-GO
>- Schreibe nichts weiter dazu, wird irgendwann ein extra-Blog Artikel ;-)
>- Auch hier gilt wieder die alte HiFi-Weisheit: &nbsp; <u>_**weniger ist mehr!**_</u>

>**Highspeed SD-Card mit mindestens 32GB Speicher**
>- Ich nutze: Samsung Pro Ultimate / Pro Plus und SanDisk Extreme Pro

>**SD-Karten Lesegerät**
>- Entweder ein (alter) Laptop hat noch einen SD-Leser, ansonsten reicht hier ein Standard USB-Reader (3-in-1), wie Belkell für ~€9 bei Amazon.

>**Highspeed USB-Stick mit mindestens 64GB Speicher (Zwischenspeicherung für Playlists, Album-Infos, gekaufte Alben/Titeln)**
>- Ich nutze: Kingston DataTraveler, Transcend JetFlash / ESD310
>- Beim Anschliessen auf der Zielplattform darauf achten, zwingend nur USB 3x-Slots zu verwenden
>- Kommerzielle Streamer haben nur selten USB-3, außer ganz neue Modelle ;-)

---

# Installation

Hier meine kompakte Anleitung für den Raspi, ansonsten auch gerne die GentooPlayer Online-Dokumentation nutzen und den [Quick-Guide, PDF](https://gentooplayers.com/myhtml/GentooPlayer_Quick_start.pdf).

**HINWEIS: Ich nutze als Raspi-Plattform das Model 4B mit 8GB RAM. Die aktuelle 5B wurde komplett überarbeitet und ist für einen reinen Streamer nicht empfehlenswert. Hier sind deutlich mehr Anpassungen zur Isolierung von elektronischen Streuungen von der Platine, als auch zwingend ein guter Lüfter erforderlich. Darüber hinaus kriegt man die 4B-Modelle nun zu einem guten Preis.**

## Schritt 1: Download

1. Download des richtigen GentooPlayer Images
- https://gentooplayers.com/Download/
- In meinem Falle: **Raspberry 4B**

## Schritt 2: Flashing

2. Nutzung eines vernünftigen SD-Card Flashing-Tools
- Ich nutze hier im Windows-Umfeld immer das kostenfreie [balena Etcher](https://etcher.balena.io/)
- **!! Darauf achten, das richtige OS-Image und der richtige USB-Kartenleser (USB-Platte) ausgewählt wird ;-)**

## Schritt 3: Boot

3. Endgerät mit der neu-bespielten SD-Karte und dem GentooPlayer-OS booten

---

# Konfiguration

---

# Online Streaming Empfehlung

**Hier gibt es eigentlich nur Tidal und Qobuz für den <u>audiophilen</u> Genuss. Auch wenn viele der Meinung sind, YT-Musik oder Apple Musik spielen in der selben Liga. Jedoch wird hier eine ganz andere Zielgruppe adressiert und die Anbindung x-beliebiger Endgeräte, nicht nur optimierte HiFi-Streamer!**

**Ich persönlich nutze ausschließlich Qobuz, da Künstler mehr bezahlt bekommen als bei Tidal. Mittlerweile haben beide sehr ähnlichen Bestand an Musiktiteln und Hi-Res ist bei Beiden Anbietern, qualitativ gleichwertig!**

Spotify nutze ich wegen Hörbücher und Podcast, da sowohl Tidal, als auch Qobuz keine Integration hierfür haben und deren Hörbücher Selektion überschaubar sind.

Natürlich kann man bei GentooPlayer auch direkt Podcast Anbindung machen, da ich aber Spotify auch auf dem Smartphone nutze, sammle ich hier meine Podcast-/Hörbücher Sammlung.


>**Hier meine Qobuz Playlists**
>Spezielle Playlisten für HiFi-Gear Testing:
>- Vocals/Live/Mitten-Höhen: https://open.qobuz.com/playlist/14153199
>- Bass/elektronisch: https://open.qobuz.com/playlist/14153107


<br>

_**#VIEL SPAß BEIM MUSIK HÖREN.**_
