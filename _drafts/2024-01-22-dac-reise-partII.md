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

>**DISCLAIMER: Die nachfolgenden Infos sind meine persönlichen Erfahrungen und auch hier habe ich nicht den Grahl gefunden!**
>**Ebenso führe ich hier nicht die Liste der günstigsten Streamer, oder nächsten China-Clone auf, sondern möchte auch hier sensibilisieren: Streamer ist NICHT Streamer!**



# Hintergrund

Im [1. Teil](/blog/dac-reise-partI) habe ich versucht auf die Digital-Analog-Wandler und in dem 2. Teil auf die Netzwerkplayer, auch Streamer oder Netzwerktransport genannt, einzugehen.

Wer den H(a)ifi-Markt in den letzten Jahren verfolgt, insbesondere in-/nach COVID-Ära, wird bemerkt haben dass das Thema "Musik-Streaming" sehr populär ist und durch Sonos und Bluesound Node massiv befeuert wurde/wird.

Hier lag der Fokus immer auf den *Massenmarkt* und nicht nur für den *audiophilen Spinner* ;-)

Seid 2023 gibt es monatlich neue Hersteller die Streamer im HiFi-Umfeld rausbringen, wie EverSolo, WiiM, HiFi Rose oder Bluesound Node. Die Anzahl ist unüberschaubar und damit es noch komplizierter wird beim Kauf:

- All-In-One-Geräte mit DAC + Streamer + Vorverstärker
- Integrierte  Vollvertstärker Verstärkern die Beides vereinen (DAC + Streamer)

**Will damit sagen: als Verbraucher und jemand der _audiophiler_ ins Streaming einsteigen möchte, für den wird es ziemlich anstrengend! RUHE BEWAHREN, LESEN & TESTEN.**

---

# Terminologie

Auch hier gibt es wieder einige Abkürzungen die man kennen sollte.


| Abkürzung | Hinweise |
| :--- | :--- |
| **MQA** | **M**aster **Q**uality **A**uthenticated - war mal der Hype (durch Tidal befeuert), ist seit 2023 Geschichte und wir haben genügend _offene_ lossless-Formate! |
| **FLAC** | **F**ree **L**ossless **A**udio **C**odec - offener Standard und von allen Streaminganbietern genutzt (Bsp. Tidal, Qobuz) |
| **ALAC** | **A**pple **L**ossless **A**udio **C**odec - wie immer, Apple's Antwort um alles auf seine Plattform zu kriegen - no-Go! |

---

# STREAMER Architekturen

---

# Welcher STREAMER ist nun der Beste?

---

# Streaming PLATTFORMEN Empfehlungen?

**Hier gibt es eigentlich nur Tidal und Qobuz für den <u>audiophilen</u> Genuss. Auch wenn viele der Meinung sind, YT-Musik oder Apple Musik spielen in der selben Liga. Jedoch wird hier eine ganz andere Zielgruppe adressiert und die Anbindung x-beliebiger Endgeräte, nicht nur optimierte HiFi-Streams!**

Vorweg: ja, hochwertiges Streaming ist nicht günstig, aber hier immer in Vergleich setzen, was kostet mich eine CD/Platte, im Vergleich einer monatlichen Gebühr zwischen €10-25, worüber ich tausende verschiedene Künstler höre (ja, gehört nicht mir!)?

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

```sh
# Bsp. TIDAL: openapi.tidal.com
# 
$ dig openapi.tidal.com +short
18.155.153.70
18.155.153.20
18.155.153.61
18.155.153.86

$ whois 18.155.153.70 | grep "Organization:"
Organization:   Amazon Technologies Inc. (AT-88-Z)
Organization:   Amazon.com, Inc. (AMAZON-4)

# ...auf AWS Public Cloud ;-)

# Bsp. QOBUZ: qobuz.com
# Stream Aufruf und einer der genutzten IP's..
#
$ whois 34.251.37.144 | grep "Organization:"
Organization:   Amazon Technologies Inc. (AT-88-Z)
Organization:   Amazon Data Services Ireland Limited (ADSIL-1)

# ...auf AWS Public Cloud ;-)

# Bsp. SPOTIFY CONNECT: spotify.com
# Stream Aufruf und einer der genutzten IP's..
#
$ whois 104.154.127.126 | grep "Organization:"
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

:loud_sound: :notes: **#Listen. #Learn. #Contribute.**