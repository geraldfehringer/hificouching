---
title: DAC/Streaming - meine digitale Reise, Teil-II
layout: post
post-image: "/assets/images/blog-dac-adcs/gerihifi-dacadc2.png"
description: Bits sind bits und ein Streamer überträgt nur Daten!
toc: true
tags:
- streamer
- german
- teil2
---

>**DISCLAIMER: Die nachfolgenden Infos sind meine persönlichen Erfahrungen und auch hier habe ich nicht den heiligen (Streaming-) Grahl gefunden!**
>**Ebenso führe ich hier nicht die Liste der günstigsten Streamer, oder nächsten China-Clone auf, sondern möchte auch hier sensibilisieren: Streamer ist NICHT Streamer!**

# Hintergrund

Im [1. Teil](/blog/dac-reise-partI) habe ich versucht auf die Digital-Analog-Wandler und in dem 2. Teil auf die Netzwerkplayer, auch Streamer, Netzwerktransport oder Bridge genannt, einzugehen.

Wer den H(a)ifi-Markt in den letzten Jahren verfolgt, insbesondere in-/nach COVID-Ära, wird bemerkt haben dass das Thema "Musik-Streaming" sehr populär ist und durch Sonos und Bluesound Node massiv befeuert wurde/wird.

Hier lag der Fokus immer auf den *Massenmarkt* und nicht nur für den *audiophilen Spinner* :nerd_face:

Seid 2023 gibt es monatlich neue Hersteller die Streamer im HiFi-Umfeld rausbringen, wie EverSolo, WiiM, HiFi Rose oder Bluesound Node. Die Anzahl ist unüberschaubar und damit es noch komplizierter wird beim Kauf:
- All-In-One-Geräte mit **DAC + Streamer + Vorverstärker**
- Integrierte  Vollvertstärker Verstärkern die alles vereinen (**DAC + Streamer + Vollverstärker**)

<br> 

**Will damit sagen: als Verbraucher und jemand der _audiophiler_ ins Streaming einsteigen möchte, für den wird es ziemlich anstrengend!**

**RUHE BEWAHREN - LESEN, LERNEN & TESTEN.**

---

# Terminologie

Auch hier gibt es wieder einige Abkürzungen die man kennen sollte.


| Abkürzung | Hinweise |
| :--- | :--- |
| **MQA** | **M**aster **Q**uality **A**uthenticated - war mal der Hype (durch Tidal befeuert), ist seit 2023 Geschichte und wir haben genügend _offene_ lossless-Formate! |
| **FLAC** | **F**ree **L**ossless **A**udio **C**odec - offener Standard und von allen Streaminganbietern genutzt (Bsp. Tidal, Qobuz) |
| **ALAC** | **A**pple **L**ossless **A**udio **C**odec - wie immer, Apple's Antwort um alles auf seine Plattform zu kriegen - no-Go! |
| **RAAT** | **R**oon **A**dvanced **A**udio **T**ransport - Roon propritäres Transportprotkoll innerhalb des eigenen Netzwerkes (Bsp. zwischen Roon-Clients/Bridges/Server) und basiert auf UDP & TCP. |
| **UPnP** | **U**niversal **P**lug and **P**lay - kennen viele von NAS im Netzwerk, aber wird eben auch im Audioumfeld eingesetzt, um mittels Server <> Renderer Musik zu streamen. |
| **DLNA** | **D**igital **L**iving **N**etwork **A**lliance - Synonym zu UPnP, da hier eine Alliance entsprechende Audio-Formate für UPnP festgelegt hier und welcher Hersteller was unterstützt. |

---

# STREAMER Architekturen

>**HINWEIS: wir lassen hier die DAC/ADC-Wandlung kommplett außen vor, auch die Vorverstärker Themen spielen hier keine Rolle (Lautstärkeregelung, NOS / DSP-Filter) - hierzu gerne [Teil I](/blog/dac-reise-partI) durchlesen.**

**Wie funktionieren Streamer/Netzwerktransport eigentlich?**

1. Ein Betriebssystem (meist auf Linux-basierend und Realtime-Kernel aka RTOS) mit entsprechender Software
2. Firmware für die verbaute Hardware, je nachdem ob Kombigerät oder nur Streamer (DAC, DSP, USB ..)
3. Lokale Dienste die unterschiedliche Verbindungen & Protokolle zur Verfügung stellen (DLNA, UpnP, Chromecast, RAAT oder Diretta )
4. Einbindung von Musikbibliotheken (via NAS, lokale Festplatten oder USB)
5. Spezieller Server-Software - auch Renderer, Endpoint oder Player genannt wie Roon, Gmedia, HQPlayer, MPD oder Logitech Squeezelite
6. Die Renderer können meist auch externe Streaming-Dienste einbinden wie Spotify, Qobuz, Tidal oder Airplay
7. Eine App auf einem Endgerät wie Tablet oder Smartphone steuert diese _Renderer Clients_  und von da aus wird der Content ausgewählt und danach der _Livestream_ (oder schon aus dem temporären Speicher, da schon mal geladen) direkt vom Player ausgeführt

**Der Punkt 7 ist Wichtigste daran, den nun wird nicht mehr von einem mobilen Endgerät oder mittels USB und einem Laptop der Stream direkt abgespielt, sondern von diesem _optimierten Streamer/Player/Transport_direkt!**

<br>

**Hier eine High-Level Sicht:**

![Streaming System Architecture](/assets/images/blog-dac-adcs/streamer-overview.png)

_Quelle: gerihifi_

---

# Welche Streaming PROTOKOLLE gibt es?

**Hier die gängigsten die zum Einsatz kommen. Leider gibt es nicht _DEN_ Industriestandard, sondern einige Hersteller die entsprechende Lizenzen auf den Endgeräten vorsehen. Reine Open Source-basierten Protokolle gibt es nicht, da hier immer wieder spezielle (closed) Client-Software erforderlich ist, um Tidal/Qobuz/Spotify/Airplay usw. einzubinden!**

**Die eingesetzte Software/App und entsprechende Proktoll sind maßgeblich für ein hoch-qualitatives Streaming! Ebenso wie eine stabile Netzwerkverbindung und konstante Stromversorgung!**

### UPNP (Universal Plug and Play)

- Urpsrünglich von Microsoft entwickelt und der ein oder andere wird noch den Windows Mediaplayer kennen, der darauf aufsetzte
- Es ist ein komplexes und flexibels Protocol und daher wurde später die **DLNA (Digital Living Network Alliance)** ins Leben gerufen. Hier wurden nun auch die gängigen Audio-Formate (WAV, AAC, AIFF, ..) festgelegt und welcher Hersteller welches nutzt
- Es sind 3 Komponenten erforderlich: der "Control Point" damit die unterschiedlichen Audio-Endgeräte adressiert werden können, "Media Server" der den Musik-Content verwaltet und "Renderer" der die Musik abspielt (Dekodierung, Auslesen Metadaten, Start/Pause/Stop Indikator ..)
- der "UPnP Renderer" kann aber auch diret eingebunden sein, wie bei _BubbleUpnP_ oder _HQPlayer Embedded_
- **!! Auf keinen Fall UPnP aus dem Internet aus erreichbar machen - massive Security Schwachstellen. Im LAN Zuhause kein Problem !!**

### HQPlayer NAA (Network Audio Adapter)

- Der sehr bekannte Jussi Laako (Signalyst) hat dies exklusiv für HQPlayer mentwickelt
- Das _Processing_ wird von der Player-Software durchgeführt und der asynchrone Datenstrom zu einem Audio-Endgerät/DAC
- Somimt reicht hier als Audio-Endgerät (Endpoint) wieder ein Raspberry Pi oder ähnliches
- Eine Vielzahl an Hersteller hat das Protokoll direkt in Ihre Software eingebunden, wie Aqua LinQ, ifi ZEN Stream, Gustard R26, Totaldac, HoloAudio oder SOtM
- **Wie auch bei Roon, muß hier ein lizenzierter HQPlayer-Server im Netzwerk vorhanden sein**


### Roon RAAT (Roon Advanced Audio Transport)

- RAAT funktioniert ähnlich wie NAA von HQPlayer/Signalyst
- Wurde programmiert, um die Schwächen von UPnP zu mitigieren
- RAAT fungiert als _Endpunkt_ und hat nicht hohe Ansprüchen an Hardware
- Unterstützt auch DSD bis DSD512 und natürlich Multi-Raum Unterstützung, um zum Beispiel Playlists auf mehreren Roon-Endgeräten gleichzeitig abzuspielen
- Roon unterstützt auch Streaming zu HQPlayer und somit umfangreiche _Upsampling_ Möglichkeiten
- **Roon erfordert eine Lizenz - nur weil ein DAC/Streamer Roon-ready ist, kann dieser NICHT als vollwertiger Roon-Server/Endpunkt fungieren! Ein vollwertägiger, lizenzierter Roon-Server muss im Netzwerk vorhanden sein.**


### Diretta

Relativ neues, propritäres Protokoll, dass entsprechend lizenziert werden muß. **An sich klingt es vielversprechend, da hier viele bestehende Probleme zu anderen Protokollen versucht wird zu eliminieren. Natürlich ist hier spezielle Hardware erforderlich ;-)**

Hier liegt der Fokus auf OEM-Geschäft im High-End Bereich, aber auch Gentooplayer unterstützt das, da hier ein Entwickler von Diretta mit dabei ist.

Mehr nachzulesen hier:

- [https://help.diretta.link/en/support/home](https://help.diretta.link/en/support/home)

---

# Netzwerk - LAN, WLAN oder Bluetooth?

**Ich bin IT'ler und gelernter Netzwerktechniker, daher sei hier vorweg gesagt: IP-Datenpackete bleiben auch bei Audio gleich und werden über den normalen TCP/IP-Stack übertragen. Aber sehr wohl hat die spätere Verarbeitung im Audio-Stack (DAC/ADC) einen Einfluss darauf, über welches Transport-Medium die Daten versendet/empfangen werden!**

Hier zu empfehlen sind diese Youtube-Videos von Alpha Audio (English, aus den Niederlanden):

- Alpha Audio, [Does a Bad Network Switch RUIN your streamer](https://www.youtube.com/watch?v=dstO0650oKk)
- Alpha Audio, [Live Blind Test Switches](https://www.youtube.com/watch?v=8HNMMksiD_Q&t=14275s)
- Alpha Audio, [Measuring Power Supply Mod](https://www.youtube.com/watch?v=1hesKlng3bs)

---

# Welcher STREAMER ist nun der Beste?

**Hier muss klar angesprochen werden, daß die gängigen _High-End_ Hersteller wie Lumin, Linn, Grimm Audio, Auralic, MSB, dCS, Playback Design, Rockna, Nagra, um nur einige zu nennen - den Endbenutzer massiv blenden und Preise abrufen, die in keinem Verhältnis zum _Netzwerktransport/Player_ Hard- und Software stehen!**

**Auch höre ich immer wieder die Argumentation: ja, aber App-Programmierung ist aufwendig & komplex! NEIN, schon lange nicht mehr, daß macht mittlerweilen jede Nearshore-/Offshore Audio-Entwicklerbude nebenbei!**

Deutlich anders ist es sicher im Lautsprecher- oder Verstärkerbau, aber im Streamer-Umfeld ist etablierte Technologie im Einsatz, die seit Jahren sich kaum verändert! Außer mal neue Linux-Kernel, Firmware-Updates für neuere Hardware (DAC-/USB-/WLAN-/Bluetooth-/NIC-/FPGA-/Chips) oder es kommt wiedermal ein propritäres Streaming-Protokoll auf den Markt, wie [Diretta](https://www.diretta.link/).)

**Auch hier würde ich wieder die 3 Preisklassen, wie bei den DAC's heranziehen:**

**Bei _High-End_ gilt für mich persönlich einen dedizierten Streamer und externen DAC zu nutzen. In der Einstiegs- und hochwertigen-Klasse gibt es sehr gute Kombimodelle, hier macht die Trennung wenig Sinn! Da hier auch meist die Streamer-Integration gut auf den verbauten DAC & eventuelle Vorstufe abgestimmt ist!**

- **Einstiegsklasse - bis €1.200:** WiiM Pro Plus, Volumio Rivo, Bluesound Node X, EverSolo DMP-A6, Cambridge CXN2, iFi audio NEO
- **Hochwertig - bis €4.000:** Atoll ST300, HiFi Rose RS250A, Lumin U2 Mini mit externem Netzteil
- **High-End - ab €6.000** Auralic Aries G3, Lumin U1 X, Aurender N20, Innuos Statement
- **High-End DIY - ~ab €2.000:** [Ian Canada](https://github.com/iancanada/DocumentDownload) Kit's oder [DDDAC's](https://www.dddac.com/) 1794-mk3 

>**Auch im Streamer-Bereich macht eine stabile und rauscharme Stromversorgung viel aus. Das kann man bei den einschlägigen High-End Architekturen klar sehen, aber auch im DIY-Bereich das Non-Plus-Ultra!**
>**Daher werden hier für diese 5V/9V/12V/24V Stromversorgungen sehr gerne Externe verwendet. Hier als Beispiel: Ferrum Hypsos, Keces, Pink Faun, iFi iPower X oder Sbooster. Der versierte DIY'er baut natürlich hier alles selber ;-)**


---

# Streaming PLATTFORMEN Empfehlungen?

**Hier gibt es eigentlich nur Tidal und Qobuz für den <u>audiophilen</u> Genuss. Auch wenn viele der Meinung sind, YT-Musik oder Apple Musik spielen in der selben Liga. Jedoch wird hier eine ganz andere Zielgruppe adressiert und die Anbindung x-beliebiger Endgeräte, nicht nur optimierte HiFi-Streams!**

Vorweg: ja, hochwertiges Streaming ist nicht günstig, aber hier immer in Vergleich setzen, was kostet mich eine CD/Platte, im Vergleich zu einer monatlichen Gebühr zwischen €10-25?

Worüber ich tausende verschiedene Künstler höre - ja, gehört nicht alles mir. Aber _verstaubt_ auch weniger und bleibt mehr Platz im Hörzimmer :grimacing: .

...und nein, sowohl YT-Musik und Spotify streamen nicht in der Qualität wie Qobuz, Tidal oder Apple!

**Ich persönlich nutze ausschließlich Qobuz, da Künstler mehr bezahlt bekommen als bei Tidal. Apple nehme ich hier aus der Betrachtung, da ich persönlich diesen Konzern NICHT unterstütze. Mittlerweile haben beide auch einen ähnlichen Bestand an Musiktiteln und Hi-Res ist bei Beiden Anbietern, qualitativ gleichwertig!**

Spotify nutze ich wegen Hörbücher und Podcast, da sowohl Tidal als auch Qobuz keine Integration hierfür haben und deren Hörbücher Selektion überschaubar sind. Natürlich kann man bei GentooPlayer auch direkt Podcast Anbindung machen, da ich aber Spotify auch auf dem Smartphone nutze, sammle ich hier meine Podcast-/Hörbücher Sammlung.

>**Hier meine Qobuz Playlists  - speziell für HiFi-Gear Testing:**
>- Vocals/Live/Mitten-Höhen: [https://open.qobuz.com/playlist/14153199](https://open.qobuz.com/playlist/14153199)
>- Bass/elektronisch: [https://open.qobuz.com/playlist/14153107](https://open.qobuz.com/playlist/14153107)

---

# WAS bedeudet Spotify / Tidal / Qobuz Connect?

**Ich kann nur jedem empfehlen, zwingend diese Funktionen zu nutzen! Dadurch wird der Stream direkt von Eurem STREAMER aus zum jeweiligen Webserber aus gestartet & buffered - NICHT von Eurem Smartphone oder Tablet direkt!**


**Natürlich kann derlei Funktion von weiteren Streaming-Lösungen genutzt werden. Hier die System Architektur von BubbleUpnP, dass ich persönlich auch für meinen DIY-Streamer nutze:**

![BubbleUpnP](/assets/images/blog-dac-adcs/architecture-bubble.png)

_Quelle: Hifizine_


### Wo laufen Tidal / Spotify & Qobuz Server?

**...alle nutzen Public Cloud**  :wink: :cloud:

**Das hat primär damit zu tun, dass Public Cloud Provider (auch Hyperscaler genannt), deutlich mehr _Edge-Nodes_ hat.**

**Damit ist gemeint mehr "Geo Load Balancer" für den Server-Zugriff (Backend), um entsprechende (TCP) Web-Streams hochflexibel, mit niedriger Latenz zum Benutzer bringen zu können.**

**Hier werden Streaming-Server dynamisch bereitgestellt, je nachdem wie viele Benutzer aus der jeweiligen Region gerade Ihre Musik _streamen__!**


```sh
# Bsp. TIDAL: openapi.tidal.com
# 
dig openapi.tidal.com +short
18.155.153.70
18.155.153.20
18.155.153.61
18.155.153.86

whois 18.155.153.70 | grep "Organization:"
Organization:   Amazon Technologies Inc. (AT-88-Z)
Organization:   Amazon.com, Inc. (AMAZON-4)

# ...auf AWS Public Cloud ;-)

# Bsp. QOBUZ: qobuz.com
# Stream Aufruf und einer der genutzten IP's..
#
whois 34.251.37.144 | grep "Organization:"
Organization:   Amazon Technologies Inc. (AT-88-Z)
Organization:   Amazon Data Services Ireland Limited (ADSIL-1)

# ...auf AWS Public Cloud ;-)

# Bsp. SPOTIFY CONNECT: spotify.com
# Stream Aufruf und einer der genutzten IP's..
#
whois 104.154.127.126 | grep "Organization:"
Organization:   Google LLC (GOOGL-2)

# ...auf Googlce GCP Public Cloud ;-)
```

---

# Streaming APP Empfehlungen?

**Dieses Thema wird häufig massiv unterschätzt!**

Wir allen nutzen tagtäglich unsere Smartphones und Tablets, daher sind halbwegs vernünftige App's eine Selbstverständlichkeit geworden.
Jedoch NICHT im Streaming Bereich ;-)

**Hier gibt es alles: von Webbrowser-basierten Oberflächen mit "Smartphone-Darstellung", bis hin zu komplett überfrachteten "mobile App's", wo man das Handbuch ausgedruckt beim Musikstöbern daneben legen muß! 

**Also bevor _überstürzt_ ein Streamer gekauft wird, unbedingt vorher sich mal als Demo deren App ansehen! Bsp. Lumin: richtig schlecht, mir reicht es, aber User-Interface 2 Punkte von 5!**

### MEINE EMPFEHLUNG

**Im DIY-Umfeld:**

- starten mit **Volumio** (sehr einfache & gute App, Qobuz, Spotify und Tidal direkt unterstützt)
- später Umsteigen auf: **GentooPlayer** oder **Moode Audio** (benötigt Linux- und Audio-Affinität, Qobuz, Spotify und Tidal direkt unterstützt)

**Viel lokale Musik:**

Sollte jemand bereits große Musiksammlung (Bsp. CD-Ripping, Download FLAC oder DSD-Alben) haben, dann benötigt man was vernünftiges zum Aufbereiten,Darstellen, Suchen und Up-Sampling.

- **Audirvana** oder **Roon** (beides teuer und man wird mit Konfigurationsmöglichkeiten erschlagen, Apps sind sehr gut)

---

**#Listen. #Learn. #Contribute.** \
**Don't be a fool:** :hear_no_evil:  :see_no_evil: 	:speak_no_evil: