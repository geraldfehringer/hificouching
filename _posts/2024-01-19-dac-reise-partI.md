---
title: DAC/ADC - meine digitale Reise, Teil-I
layout: post
post-image: "/assets/images/blog-dac-adcs/gerihifi-dacadc.png"
description: Mythos Digital Analog Converter und am Ende doch wieder alles Analog?
toc: true
tags:
- dac
- adc
- german
- teil1
---

>**HINWEIS: Ähnlich wie bei Audiokabel, ist das Thema Digital Analog Konverter und Streaming ein wild umkämpftes Thema bei uns Hifi-Nerds ;-). Von Mythos und Bits-sind-Bits, bis hin dass ein Streamer unter €20.000 nix taugt!**
>**Auch ich habe nicht den heiligen (DAC)-Gral gefunden, jedoch habe ich eine Vielzahl an DAC's und Streamer in den letzten 4 Jahren intensiv getestet und besitze auch einige passable Modelle zum Vergleich.**

# Hintergrund

In diesem ersten Teil möchte ich näher auf DAC-Designs eingehen und im zweiten Teil auf Streamer eingehen.

Zuerst ist es wichtig zu verstehen, wie heutzutage Audioaufnahmen stattfinden. Zuerst müssen wir unterscheiden zwischen:

- **Studio-/Live-Aufnahme** - hier gehts los wie Mikrofone platziert werden und wie diese (Kanäle) später zusammengeführt und verarbeitet werden. Auch hier muss natürlich eine Analog- zu Digital-Konvertierung stattfinden, damit an der zentrale Konsole/Mischpult eine Verarbeitung und Speicherung stattfinden kann.
- **Remastering** - hier wird versucht bei der Audiobearbeitung die Klangqualität eines bereits gemasterten Musikstücks zu verbessern, oder wie häufig auch verschlechtert ;-). Hier kommt es somit auf den Bearbeiter (Master Sound Engineer) an, wie er diese optimal abmischt. Remastering enstand gegen 1988, um historische Quellen wiederherzustellen und in aktuelle Formate zu übertragen. Heute wird es auch bei neuen Produktion ausgeweitet, um vielleicht nochmals eine bessere Version zu erzeugen. Hier kommen massiv digitale Filter zur Anwendung, wie Noise-Reduction, Equalizer, Kompressoren, Limiter oder Noise-Gates. Somit beinhaltet Remastering auch die Konvertierung des Originalträgers in einen 24-Bit-Digitalstandard.
- **Kopien erstellen** - Dies können Vinyl-zu-Vinyl Kopien sein (aufwendig/teuer), aber auch Master-Tapes zu Master-Tapes (aufwendig/teuer), aber auch einfach nur digital-zu-digital Kopien, um diese zum Beispiel als lossless-Format bei Streaming Anbietern bereitzustellen.

**Hier eine grafische Darstellung einer modernen Musikproduktion:**

![Produktion](/assets/images/blog-dac-adcs/test-sample-production.png)

_Quelle: Sampleconverter_

# Terminologie

**Einige Abkürzungen die man kennen sollte. Ist kein Auszug aus Wikipedia, wer mehr wissen möchte, Google anwerfen.**

| Abkürzung | Hinweise |
| :--- | :--- |
| **ADC** | **A**nalog **D**igital **C**onverter |
| **AIFF** | **A**udio **I**nterchange **F**ile **F**ormat - unkomprimiertes Audio Format, Standard-Audioformat auf Apple-Produkten |
| **DAC** | **D**igital **A**nalog **C**onverter |
| **DSD** | **D**irect **S**tream **D**igital - es wird ein Bitfluss direkt aufgezeichnet, Single-Bit. Man nennt das Resultat daher auch 1-Bit-Datenstrom. |
| **DSP** | **D**igital **S**ignal **P**rocessor |
| **FPGA** | **F**ield **P**rogrammable **G**ate **A**rray - programmierbaren Chip |
| **NOS** | **N**one **O**ver**s**ampling - es kommen keine digitalen Filter zum Einsatz |
| **PCM** | **P**uls-**C**ode-**M**odulation - unkomprimiertes Audio Format, Multi-Bit. Bit-Paket mit einer speziellen Wortbreite (z.B. 16, 24, 32, etc. Bit). |
| **R2R** | **R**esistor 2 **R**esistor |
| **WAV** |  Waveform Audio File Format - unkomprimiertes Audio Format und speichert Audiodaten in einem Wellenform-Format (**WAV**eform) |


# ADC und DAC

**Die Welt um uns herum ist analog. Temperatur, Luftfeuchtigkeit und Luftdruck, somit auch unser Musiksignal. Daher benötigen wir zur weiteren Verarbeitung eine entsprechende Konvertierung bzw. wenn digitales Format wie DSD oder PCM als Quelle genutzt werden.**

**Bei der Wandlung eines analogen Audiosignals in ein digitales Pendant geht es darum, eine kontinuierliche Wellenform in diskrete Zahlen umzusetzen.**

![ADC zu DAC](/assets/images/blog-dac-adcs/adc-zu-dac.jpeg)

_Quelle: Analog Devices, Elektronikpraxis_


### Verfahren der Digitalisierungsprozesses von analogem Audio

![ADC zu DAC](/assets/images/blog-dac-adcs/AD-conversion.gif)

1. Der Eingang einer analogen Quelle, bspw. ein Mikrofon.
2. Das Signal wird vor dem Sampling-Vorgang Tiefpass-gefiltert (Anti-Aliasing).
3. Das Sampling (S / H = Sample & Hold) wird bei einer bestimmten Abtastfrequenz durchgeführt, die die obere Grenze für den Frequenzbereich des digitalisierten Audiosignals festlegt.
4. Dabei wird der Wert jedes Samples bestimmt (Quantisierung). Die Anzahl an Bits für jedes Sample legt die Genauigkeit des quantisierten Audiosamples fest. Mehr Bits entsprechen einem größeren Dynamikumfang.
5. Der Binärcode (0'en und 1'en) wird entweder gespeichert oder an einen anderen Teil der Kette weitergereicht (Speicherung / Übertragung).

_Quelle: DPA Mikrofone_

### Sampling

Die Grundlage der Wandlung basiert auf Samples. Ein Sample ist eine diskrete Messung an einer einzelnen Stelle der Wellenform zu einem bestimmten Zeitpunkt.

Ein Sample ist jedoch nicht genug, um einen lebendigen Klang wieder herzustellen. Um in Bezug auf die Wellenform des Audiosignals genügend Informationen zu speichern, bedarf es einer großen Menge an Samples.

Also muss kurz nach der Ermittlung des ersten Samples ein weiteres erfasst werden. Das Signal hat sich weiter entwickelt, also könnte das neue Sample einen neuen Wert haben. Und wieder wird nach dem zweiten Sample ein weiteres ermittelt. Und noch eins. Und so weiter...

_Quelle: DPA Mikrofone_

**Zum besseren Verständnis eine bildliche Darstellung, von Analog-Signal zu den 16bit/24bit Sampling-Raten:**

![ADC zu DAC](/assets/images/blog-dac-adcs/sampling-sicht.png)

_Quelle: Skytracks.io_


### Dynamic Range

In seiner reinsten Form ist der Dynamikbereich in der Musikproduktion einfach der Unterschied in Dezibel (dB) zwischen den leisesten und lautesten Tönen in einer Mischung oder Audiodatei. 

Daher haben Songs mit einem großen Dynamikbereich eine größere Lücke zwischen dem lautesten und dem leisesten Ton im Vergleich zu Songs mit einer gleichmäßigeren Klangqualität.

Es ist erwähnenswert, dass die Reichweite des menschlichen Gehörs durch einen maximalen Dynamikbereich begrenzt ist. Im Allgemeinen liegt der maximale Dynamikbereich für den Menschen bei etwa 120 dB zwischen dem leisesten Signal, das wir wahrnehmen können, und dem Punkt, an dem die Verzerrung beginnt, körperliche Schmerzen zu verursachen.

Interessanterweise variiert der ideale Dynamikbereich je nach Genre. Eine [Studie ergab](https://pubmed.ncbi.nlm.nih.gov/26868955/ ), dass der Dynamikbereich bei populären Genres wie Pop, Rap oder Rock in der Regel kleiner ist als bei klassischen Genres wie Oper und Orchester.

Die Komprimierung ist sehr wichtig, um unseren maximalen Bereich auszunutzen. So liegt der maximale Dynamikbereich für analoge Audiodaten irgendwo zwischen 50 und 60 dB. Digitales Audio ist jedoch ein ganz anderes Spiel.

Der theoretische Dynamikbereich einer unverzerrten 20-Bit-Quantisierung von digitalem Audio beträgt 120 dB. Der theoretische Dynamikbereich von digitalem 24-Bit-Audio liegt bei 144 dB, wovon ein Großteil für das menschliche Gehör nicht wahrnehmbar ist, da unsere Hörschwelle bei 120 dB liegt.

**Was ist der Unterschied zwischen Dynamikbereich und SNR?**

SNR steht für Signal-Rausch-Verhältnis und wird oft mit Dynamikbereich verglichen. Obwohl diese Begriffe oft synonym verwendet werden, sind sie nicht unbedingt dasselbe. Das Signal-Rausch-Verhältnis ist im Wesentlichen der Abstand zwischen den durchschnittlichen Spitzenwerten eines Signals und dem Grundrauschen.

Im Gegensatz zum Signal-Rausch-Verhältnis ist der Dynamikbereich nicht unbedingt von einem Signal abhängig: Die unterste Grenze des Dynamikbereichs ist einfach der leiseste Ton, der nicht verzerrt ist.

Ein optimiertes Signal-Rausch-Verhältnis bedeutet einfach, dass genug vom Signal eines Geräts durchfließt, um dem unvermeidlichen Rauschen entgegenzuwirken, das bei der Verwendung eines Geräts entsteht. Ein gutes Signal-Rausch-Verhältnis liegt vor, wenn Ihr Live-Signal über dem Grundrauschen liegt.

Der Dynamikbereich kann im weiteren Sinne verwendet werden, um die leisesten und lautesten Punkte in einer Mischung zu unterscheiden.

_Quelle: Mastered Blog_


### Bit-Depths

Hier haben sich folgende Bit-Depths (Tiefen) etabliert:

- 16-bit: unter anderem CD, welche einen Dynamic Range von 96dB ermöglicht
- 24-bit: in modernen Musikstudios der Standard zur Verarbeitung, welche einen Dynamic Range von 144dB ermöglicht

### Sample-Rate versus Bit-Depth:

- **Sample-Rate:** Bestimmt die Anzahl der pro Sekunde aufgenommenen Samples bezogen auf den Frequenzbereich und die Gesamtwiedergabetreue der digitalen Darstellung der ursprünglichen Sound-Wave.
- **Bit-Depth:** Bestimmt die Genauigkeit der Amplitudenwerte für jedes Audio-Sample, was sich auf den Dynamikbereich und den Rauschpegel des digitalen Audiosignals auswirkt.


### Aliasing

Wenn Du die Regel von mindestens zwei Samples pro Schwingungsperiode des Audiosignals missachtest, können unerwünschte Aliasing-Frequenzen erfasst werden. Aliasing steht für einen Identitätswechsel.

Um das zu verhindern, muss vor dem Sampling ein "Anti-Alias"-Filter eingesetzt werden. Dies ist ein Low-Pass-Filter, der Frequenzen abschneidet, die über der halben Abtastrate liegen.

Diese Art Filter kann das Audiosignal beeinflussen. Oversampling (eine Überabtastung, bspw. durch Verdopplung oder Vervierfachung der Abtastfrequenz) wird verwendet, um den Einfluss des Filters zu reduzieren. (Eine Verdopplung der Abtastfrequenz bedeutet allerdings auch eine Verdopplung der entstehenden Daten für eine Aufnahme.)

Wenn die Abtastfrequenz nicht mindestens dem Doppelten der höchsten Audiofrequenz entspricht, entspricht das rekonstruierte Signal nicht dem Eingangssignal.

![Aliasing](/assets/images/blog-dac-adcs/aliasing.jpg)


**Oben:** Die eine Schwingung des Signals wird sechs Mal abgetastet / gesampelt. 6 > 2, also ist die Rekonstruktion okay. \
**Mitte:** Die beiden Schwingungen des Signals werden sechs Mal abgetastet / gesampelt, was drei Abtastungen je Periode entspricht. 3 > 2, also ist die Rekonstruktion okay. \
**Unten:** Die sechs Schwingungen des Signals werden sechs Mal abgetastet / gesampelt, was einer Abtastung je Schwingung entspricht. 1 < 2, also endet das Signal als Alias-Frequenz, die vom Original abweicht.

_Quelle: DPA Mikrofone_

### Jitter

Ein anderer sehr wichtiger Aspekt während einer Wandlung/Konvertierung ist der Intervall zwischen den Samples. Jedes Intervall muss exakt die gleiche Länge haben, denn nach der Digitalisierung liegen keine Information über den Zeitpunkt eines Samples vor. Daher müssen wir uns auf eine stetige Wiederholung der Abtastung verlassen - ein konstantes Intervall. (Bei einer Samplingfrequeng von 48 kHz beträgt das Intervall zwischen zwei Samples 20.833 Mikrosekunden/µs.)

Der Abtast-Takt muss stabil sein und sollte durch nichts gestört werden. (Nicht-Exakte Abtastwiederholung, auch Jitter genannt, führt zu Rauschen im reproduzierten Audio-Signal.)

_Quelle: DPA Mikrofone_

### Menschliche Wahrnehmung von Frequenzbereichen

![Human Hearing](/assets/images/blog-dac-adcs/human-hearing.jpg)

---

# DAC Designs

**Es gibt sehr unterschiedliche Architektuen, um die Konvertierung vorzunehmen und natürlich haben diese spezifischen Designs Ihre eigenen Sound-Signaturen, losgelöst der Output-Stage!**

| DAC Type | Format | Notes |
| :--- | :--- | :--- |
| R2R Ladder (Multibit) - NOS | non-oversampling PCM | Linearität schwierig, hohe Aufflösung schwierig |
| R2R Ladder (Multibit) | oversampling PCM (filters) | Linearität schwierig, hohe Aufflösung schwierig |
| Sigma-Delta PCM | Single-bit oder Multi-bit |  hohe Linearität per se, hohe Auflösung möglich |
| DSD | Single-bit |  Ursprünglich für das SACD-Format entworfen. |
| Hybrid Design - FPGA | | Gibts mit Röhren oder Halbleitern, bekanntesten DAC's sind Chord Hugo oder Schiit. Ein Vorteil ist auch das problemlose Einspielen von neuer Firmware. |

**R2R ladder DAC versus sigma-delta PCM DAC versus DSD DAC**

![DAC Comparison](/assets/images/blog-dac-adcs/r2r-ladder-dac-vs-sdm-vs-dsd-dac.png)

**DAC Architekturen im Detail**

![DAC Architektur](/assets/images/blog-dac-adcs/dac-type-issues.png)

_Quelle: Samplerateconverter_


# Welches DAC-Design ist nun das Beste?

**Eines vorweg: jeder DAC bringt seine _Signatur_ mit und umso höherwertig (hat nichts mit €€€ zu tun!!) man seine HiFi-Kette abgestimmt hat, um so mehr Unterschiede wird man wahrnehmen!**

- Generell gilt die Faustregel, das R2R NOS am _natürlichsten/organischer_ klingen, da auch keinerlei digitale Filtering vorgenommen wird
- Sigma-Delta haben aber durch digitale Filtering, egal ob via FPGA oder DSP natürlich eine Vielzahl an _Korrektur-Möglichkeiten_, Bsp. Raumanpassungen
- Manche schwören auf DSD-DAC's, hier sei jedoch der Hinweis: nur die wenigsten verarbeiten NATIV DSD ab, wie Meitner oder PS Audio. Viele andere Hersteller verarbeiten DSD in PCM um ;-) Sowie liegt in Studios das Material immer in PCM Format vor!

**Des weiteren gilt für mich persönlich, der sehr viele DAC's bereits getestet hat, dass man diese in Preisklassen eingliedern kann (ja, wird auch Ausreißer geben, aber ganz, ganz selten):**

- **DAC - Einstiegsklasse: €500 - €1.500**
- **DAC - hochwertig: €2.000 - €7.000**
- **DAC - High-End: €10.000 - €25.000** ...alles darüber hinaus, ist wie immer HiFi-Feenland, Fantasia-Preise und man zahlt nur noch für den Brand und völlig abgedrehten Materialaufwand!

# Meine persönlichen DAC-Empfehlungen?

**Ich führe hier explizit nur DAC-only Modelle auf, keinerlei Kombigeräte mit Streamer!**

- **Einstiegsklasse:** Ladder Schumann R2R, Soekris DAC1421, Gustard R26, Deanfrips Ares
- **Hochwertig:** Abbas Audio DAC 3.2 und DAC U.1, Merason DAC1 (alte Modell), Weiss DAC205, Lampizator Baltic 4, Rockna Wavelight, Linnenberg Telemann DAC
- **High-End:** Weiss DAC 501/502 mit MK-II Upgrade, Lampizator Golden Gate 3, Total DAC d1-triunity, Rockna Wavedream Signature

**Welche die ich selbst (fast) täglich nutze?**

- **Abbas Audio DAC 3.2 SE**
- **Weiss DAC 501 MK-II**

# DAC Chips

| Hersteller | Modell |
| :--- | :--- |
| **AKM** | Hier gab es ja ein Flammen-Inferno Okt/2020 und die AKM-Chips waren in einer Vielzahl in HiFi-Geräten verbaut. Die Neuesten sind hier AK4493S / AK4490R  |
| **ESS Sabre** | Einer der meist-eingesetzten Chips. Hier gibt es die 2-Channel und die nun populären 8-Channel, wie den ES9039PRO / ES9038PRO  |
| **Burr-Brown** | PCM-58p, PCM-63P bzw. PCM-63P-K  werden gerne für hochwertige Röhren-DAC's genutzt |
| **Phillips** | TDA 1541a, TDA1540P und TDA 1541 S1 werden gerne für hochwertige Röhren-DAC's genutzt |
| **Analog Devices** | Teilweise neue Produktion, aber auch popolär im DIY-DAC Umfeld. Hier wären zu nennen der AD1856 / AD1866 / AD9717 / LTC2642 |


# Online Verweise

**Hier die Online-Verweise was ich zum Thema empfehlen kann:**

- https://www.electronics-tutorials.ws/combination/analogue-to-digital-converter.html
- https://samplerateconverter.com/educational/r2r-ladder-dac-vs-sigma-delta
- https://www.mojo-audio.com/blog/dsd-vs-pcm-myth-vs-truth/
- https://griggaudio.de/2023/09/24/wie-arbeitet-ein-dac-und-was-kann-upsampling-bewirken/
- https://digital-audio-systems.com/pcm-im-vergleich-zu-dsd/
- https://woodandfirestudio.com/was-sind-lufs/
- https://www.peak-studios.de/en/analog-vs-digital/
