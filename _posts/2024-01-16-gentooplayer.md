---
title: Audiophile Streamer-OS mit Gentooplayer
layout: post
post-image: "/assets/images/blog-gentooplayer/gentooplayer-logo.png"
description: Alles zum Thema audiophiles-OS für den Streamer-/DAC-Selbstbau, auf Basis von GentooPlayer.
toc: true
tags:
- streaming
- diy
- german
- nonopenai
- hirnschmalz
---

# Hintergrund

Es gibt eine Vielzahl an sehr guten _Audiophilen-Betriebssystemen (OS)_, jedoch ich persönlich habe nach meinen Recherchen und [Ian Canada DIY DAC/Streamer-Projekt](https://github.com/iancanada/DocumentDownload), klar für **[GentooPlayer](https://gentooplayers.com/)** entschieden.

**<u>WICHTIGER HINWEIS:</u> Ich nutze KEINE traditionellen Musik-Server auf PC-Basis wie Antipodes, Aurender, Grimm MU1/2, oder Selbstbau X86-Architektur. Ist für mich völlig uninteressant, da ich große CD-Sammlung besitze und Red Book als adäquates Abspielformat liebe, zum Online Streaming selbst! Weder bin ich Fan von Roon oder dass ich alles im DSD-Format abspielen muss. Darüber hinaus können heute Playlists Offline verfügbar gemacht, als auch Alben direkt als Download lokal abgespeichert werden. Des weiteren verkomplizieren PC-Architekturen hochwertige Streamer und es muss viel Aufwand betrieben werden, dass wieder in den Griff zu bekommen.**

**NEIN, für ein optimiertes Streaming-OS benötigt man auch kein 64bit-Architektur, weder viel RAM oder High-End SSD-Festplatten! Dies wird leider immer fälschlich dargestellt! Dies ist nur dann erforderlich, der unbedingt alles in DSD abspielen/konvertieren möchte, oder zusätzlich Upsampling betreiben will. Hat auf einem Streamer nix zu suchen, wieder Musikserver-Thematik für die Roon/HQPlayer/Audirvana-Fraktion.**

---

<u>Hier eine Liste der meist-genutzten OS'e im DIY-Umfeld und meiner Gewichtung:</u>

| OS | Link | Lizenz |
| :-- | :-- | :-- |
| **1. GentooPlayer** | https://gentooplayers.com | 30-Tage Trial, danach **einmalig ~€70** pro Hardware, voll optimierter Kernel + RAM lauffähig. Gibt auch gegen ~€40 einmalig Aufpreis, hoch-optimierte Kernel (CLANG CTO) |
| **2. Moode Audio** | https://moodeaudio.org | Hatte ich vor GentooPlayer im Einsatz. Auch TOP-Empfehlung für Raspi-basierte Projekte! Aktuell noch kostenlos. | |
| **3. Snakeoil OS** | https://www.snakeoil-os.net/ | Guter UI, aber volles Ubuntu-Release, teilweise optimierter Kernel |
| **4. Audiophile Linux** | https://www.ap-linux.com | Auch schon länger dabei und nutzen ebenfalls wie GentooPlayer optimierte Audio-Kernel. Komplett kostenlos, daher leider auch nicht besonders aktive Entwicklung. Aktuelle Version von 2019.|
| **5. Audio Linux** | https://www.audio-linux.com | Jede Menge Releases. Kostet auch so ab ~€69 einmalig. Zu viele Features und für mich overloaded und auch wieder eher für Musikserver. |
| **6. Daphile** | https://www.daphile.com | X86-basiert, zu hohe HW-Anforderungen, eher für einen PC-basierten Musikserver. |
| **7. Volumio** | https://volumio.com/en/get-started | Freie Version nicht wirklich brauchbar (zu eingeschränkt), aber in wenigen Minuten nutzbar und einfache App-Oberfläche, Premium ~6€ /Monat. Funktioniert am Besten mit deren kommerziellen Hardware! |
| **8. Euphony Stylus** | https://euphony-audio.com/ | Sehr gute UI und ist eher als Roon Ersatz gedacht. Closed-Source und muss von USB gebootet werden und danacg RAM. Sehr teuer ~€13 /Monat und für mich Over-Engineered! |

> **HINWEIS:** Jeder kommerzielle DAC/Streamer Hersteller egal ob Lumin, Auralic und Konsorten, nutzen unter der _Haube_ entsprechende Open-Source Komponenten/Libraries. Lasst Euch hier nicht von der (App)Oberfläche blenden ;-) - **will damit sagen: die obige Liste ist schon für High-End-Anwendungen gedacht und nicht nerdige Spielwiese!**

---

# Voraussetzungen

**Gute Streamer-Plattform (aka Player)** \
Diese beiden DIY-Projekte sind die Aktivsten hierzu: \
-- Mein persönlicher Favorit - Ian Canada, https://github.com/iancanada/DocumentDownload \
-- Doede hat hier den DIY-Standard gesetzt - DDDAC, https://www.dddac.com \
-- Siehe hierzu auch den Vergleich mit absoluten High-End DACs (MSB, dcs ..) [AD Audio Link](https://adaudio.wordpress.com/2022/11/01/how-good-is-the-dddac-a-comparison-with-dcs-bartok-mola-mola-tambaqui-and-msb-discrete-and-prestige/)

**Guter Digital-Analog-Wandler (DAC oder auch ADC genannt):** \
Für beste Qualität sollte DAC und Streamer in separaten Chassis sein. Ebenso getrennte Software für den Player (sog. Streamer) und DAC.

**Saubere LAN-Verkabelung & LAN-Switch:** \
-- WLAN und Bluetooth sind für mich bei einem High-End Streamer ein **NO-GO** \
-- Schreibe nichts weiter dazu, wird irgendwann ein extra-Blog Artikel werden ;-) \
-- Auch hier gilt wieder die alte HiFi-Weisheit: &nbsp; **<u>weniger ist mehr!</u>**

**Highspeed SD-Card mit mindestens 32GB Speicher** \
-- Ich nutze: Samsung Pro Ultimate / Pro Plus und SanDisk Extreme Pro

**SD-Karten Lesegerät** \
-- Entweder ein (alter) Laptop hat noch einen SD-Leser, ansonsten reicht hier ein Standard USB-Reader (3-in-1), wie Belkell für ~€9 bei Amazon.

**Highspeed USB-Stick mit mindestens 64GB Speicher (Zwischenspeicherung für Playlists, Album-Infos, gekaufte Alben/Titeln)** \
-- Ich nutze: Kingston DataTraveler, Transcend JetFlash / ESD310 \
-- Beim Anschließen auf der Zielplattform darauf achten, zwingend nur USB 3x-Slots zu verwenden \
-- Kommerzielle Streamer haben nur selten USB-3, außer ganz neue Modelle ;-)

---

# Installation

Hier meine kompakte Anleitung für den Raspi, ansonsten auch gerne die GentooPlayer Online-Dokumentation nutzen und den [Quick-Guide, PDF](https://gentooplayers.com/myhtml/GentooPlayer_Quick_start.pdf).

**HINWEIS: Ich nutze als Raspi-Plattform das Model 4B mit 8GB RAM. Die aktuelle 5B wurde komplett überarbeitet und ist für einen reinen Streamer nicht empfehlenswert. Hier sind deutlich mehr Anpassungen zur Isolierung von elektronischen Streuungen von der Platine, als auch zwingend ein guter Lüfter erforderlich. Darüber hinaus kriegt man die 4B-Modelle nun zu einem günstigeren Preis ;-)**

### Schritt 1: Download

Download des richtigen GentooPlayer Images \
-- [https://gentooplayers.com/Download/](https://gentooplayers.com/Download/) \
-- In meinem Falle: **Raspberry 4B**

### Schritt 2: Flashing

Nutzung eines vernünftigen SD-Card Flashing-Tools \
-- Ich nutze hier im Windows-Umfeld immer das kostenfreie [balena Etcher](https://etcher.balena.io/) \
-- **!! Darauf achten, das richtige OS-Image und der richtige USB-Kartenleser (USB-Platte) ausgewählt wird ;-) !!**

### Schritt 3: Boot

Endgerät mit der neu-bespielten SD-Karte und dem GentooPlayer-OS booten.
Sicherstellen, dass Streamer korrekt mit LAN/Netzwerkkabel verbunden ist.

Sollte später WLAN genutzt werden, so kann dies danach der initialen Konfiguration durchgeführt werden. Aber für die initiale Konfiguration ist logischerweise eine LAN-Verbindung erforderlich.

---

# Konfiguration

**Hier möchte ich meine Erfahrung teilen, da GentooPlayer für den Neueinsteiger in dem Bereich schon einiges abfordert - nicht unterkriegen lassen ;-)**
**Natürlich sollte das nur als GUIDELINE gesehen werden und Ihr müsst entsprechend für Eure Umgebung die richtigen Parameter auswählen.**

**Ich nutze auch die zusätzliche €39-Option für einen optimierten CLANG-LTO Kernel. Ist nicht zwingend notwendig, außer man will wieder das Letzte aus seinem Equipment rausziehen ;-)**

### Initiale Weboberfläche

Nachdem der Streamer gebootet hat, kann die Konfiguration über die Weboberfläche stattfinden. Hierzu muss aber die IP-Adresse bekannt sein (wie alle wird DHCP genutzt für die dynamische IP-Adressvergabe in Eurem Netzwerk). 

Die Managementoberfläche ist hier im Webbrowser abzurufen:

**http://x.x.x.x:5000**

<br>

**WIE finde ich meine IP-Adresse?**

-- Hier einige Beispiele in meinem Home-Netzwerk:

**Linux (Bsp. [Windows WSL](https://learn.microsoft.com/de-de/windows/wsl/install)): nmap installieren und Scan durchführen**
```sh
# Um Subnetz zu sehen
sudo show ip addr

# nmap installieren (Debian/Ubuntu)
sudo apt install nmap
sudo nmap --open -Pn -p 5000 192.168.178.0/24

#Ergebnis
Starting Nmap 7.80 ( https://nmap.org ) at 2024-01-17 12:01 CET
Nmap scan report for 192-168-178-200.fritz.box (192.168.178.200)
Host is up (0.00036s latency).

PORT     STATE SERVICE
5000/tcp open  upnp

Nmap done: 256 IP addresses (256 hosts up) scanned in 8.03 seconds
```

**Windows: [Nmap+Zenmap](https://nmap.org/download#windows - Latest stable release self-installer nutzen, installieren und Scan durchführen** \
-- Windows CMD (Eingabeaufforderung) & danach `ipconfig` aufrufen, um aktuelles Subnetz zu bekommen
-- Zenmap in Windows Programme aufrufen
-- Scan ausführen wie oben, hier in meinem Home-LAN

![Zenmap GUI](/assets/images/blog-gentooplayer/zenmap.png)

>**HINWEIS: Zenmap Scans sind generell sehr hilfreich, um zu sehen was alles so in Eurem Home-LAN aktiv ist! Hierzu am Besten in Zenmap das Profil "Quick Scan Plus" auswählen und staunen was so rumdümpelt :-)**

**Somit ist in meinem LAN der GentooPlayer Streamer wie folgt im Webbrowser aufzurufen:**

**http://192.168.178.200:5000**

..und die simple Weboberfläche sollte dargestellt werden.

### Aktivierung Trial-Key

-- Auf `00. Register` klicken > `00. GentooPlayer PC-key` klicken und danach auf "EXECUTE"
-- Diesen Schhlüssel **vollständig** an Fillipo / gentooplayers@gmail.com senden
-- Danach schickt er Euch einen Schlüssel, der *zwingend* benötigt wird für die weitere Konfiguration
-- Sobald Ihr den Schlüssel per Mail bekommen habt:
-- Wieder zu `00. Register` wechseln > `01. GentooPlayer Key` > key und username schreibt er Euch in die Email, exakt so eintragen und wieder auf "EXECUTE" klicken
-- Danach Schlüssel/Aktivierung prüfen:
-- `00. Register` wechseln > `02. GentooPlayer Key-Info` und auf "EXECUTE" klicken
-- Danach werden alle Aktivierungsdetails angezeigt

### Basiskonfiguration: Systemupdates zuerst einspielen 

**HINWWEIS: Updates & Kernel-Change können nur eingespielt werden, wenn das System noch NICHT im RAM läuft. Also später wenn wir alles sauber im RAM laufen haben lassen, muss immer zuerst das RAM-System disabled werden > Reboot und dann die Schritte ausgeführt werden!**

-- Auf `12. Update/Install/Remove` klicken > `0. GP-Update` und auf "EXECUTE" klicken, dass dauert <1min
-- Danach erneu unter `12. Update/Install/Remove` auf `1. GP-Version Update`  klicken und schauen ob neue Version vorhanden (Current > Update)
-- Wenn Update da ist, entsprechend auswählen und auf "EXECUTE", dies wird je nach System +10Minuten dauern, da hier auch Kernel + Pakete aktualisiert werden
-- Nach erfolgtem Systemupdate, wird nun Firmware aktualisiert
-- unter `12. Update/Install/Remove` auf `Firmware update`  und auf "EXECUTE" klicken, dass dauert ~2min
-- Danach Reboot durchführen: unter `02. Reboot system` und auf "EXECUTE" klicken, dass dauert ~2-4min, je nachdem welches System Ihr nutzt

### DAC (Digtial-Analog-Wandler) konfigurieren

**HINWEIS: natürlich müsst Ihr vorher Euren DAC sauber an den Streamer angeschlossen haben, Bsp. SPDIF/BNC/AES-EBU, USB oder HDMI/I2s.**
**Wer den Ian Canada Streamer & DAC nutzt UNBEDINGT: `i-sabre-q2m and I2S Generic` auswählen!**

Die unterstützen DAC's'findet Ihr immer hierrüber:

![DAC List](/assets/images/blog-gentooplayer/dac-list.png)

---

# Advanced Config Hinweise

**Wie Ihr mit der Zeit sehen werdet, bietet GentooPlayer extrem professionelle Features & zusätzliche Software zum Nachinstallieren.**
**Hier einige, die ich selber nicht nutze, aber sicherliche nennenswert sind:**

-- [CamillaDSP](https://henquist.github.io/), für professionelle Raumkorrektur / aktive Crossover-Applikationen
-- Müsst Ihr über die Managementoberfläche hier installieren: `12. Update/Install/Remove` > Install/Remove Camilla

-- [MinimServer](https://minimserver.com/features.html), sehr umfangreicher UPnP Server und dass ist die zugehörige Software
-- Müsst Ihr über die Managementoberfläche hier installieren: `12. Update/Install/Remove` > Update/install MinimServer + Update/install MinimWatch

---

# Online Streaming Empfehlung

**Hier gibt es eigentlich nur Tidal und Qobuz für den <u>audiophilen</u> Genuss. Auch wenn viele der Meinung sind, YT-Musik oder Apple Musik spielen in der selben Liga. Jedoch wird hier eine ganz andere Zielgruppe adressiert und die Anbindung x-beliebiger Endgeräte, nicht nur optimierte HiFi-Streamer!**

**Ich persönlich nutze ausschließlich Qobuz, da Künstler mehr bezahlt bekommen als bei Tidal.**  
**Mittlerweile haben beide sehr ähnlichen Bestand an Musiktiteln und Hi-Res ist bei Beiden Anbietern, qualitativ gleichwertig!**

Spotify nutze ich wegen Hörbücher und Podcast, da sowohl Tidal als auch Qobuz keine Integration hierfür haben und deren Hörbücher Selektion überschaubar sind. Natürlich kann man bei GentooPlayer auch direkt Podcast Anbindung machen, da ich aber Spotify auch auf dem Smartphone nutze, sammle ich hier meine Podcast-/Hörbücher Sammlung.

>**Hier meine Qobuz Playlists  - spezielle Playlisten für HiFi-Gear Testing:**
>- Vocals/Live/Mitten-Höhen: [https://open.qobuz.com/playlist/14153199](https://open.qobuz.com/playlist/14153199)
>- Bass/elektronisch: [https://open.qobuz.com/playlist/14153107](https://open.qobuz.com/playlist/14153107)

<br>

_**#VIEL SPAß BEIM MUSIK HÖREN. #gerihifi.**_
