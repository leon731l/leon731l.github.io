const CARDS = [
  {
    "id": 0,
    "q": "Welche Aufgaben übernimmt der Einheitsführer lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er führt seine taktische Einheit, ist für die Sicherheit verantwortlich, bestimmt\nFahrzeugaufstellung, Ordnung des Raumes und Standort der Aggregate.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 1
  },
  {
    "id": 1,
    "q": "Welche Aufgaben übernimmt der Maschinist lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er ist Fahrer, bedient die festeingebauten Aggregate, sichert die Einsatzstelle\nmit Warnblinklicht, Fernlicht und Blaulicht und hilft bei der Entnahme von\nGeräten.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 2
  },
  {
    "id": 2,
    "q": "Welche Aufgaben übernimmt der Melder lt. FWDV 3 im Hilfeleistungseinsatz?",
    "a": "Er übernimmt befohlene Aufgaben z.B. Informationsübertragung,\nLagefeststellung oder Betreuen von Personen.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 3
  },
  {
    "id": 3,
    "q": "Welche Aufgaben übernimmt der Angriffstrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er rettet, führt die Erstversorgung durch und leistet technische Hilfe.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 4
  },
  {
    "id": 4,
    "q": "Welche Aufgaben übernimmt der Wassertrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er sichert auf Befehl die Einsatzstelle gegen weitere Gefahren. Danach steht er\nfür weitere Aufgaben zur Verfügung.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 5
  },
  {
    "id": 5,
    "q": "Welche Aufgaben übernimmt der Schlauchtrupp lt. FWDV 3 im\nHilfeleistungseinsatz?",
    "a": "Er bereitet die befohlenen Geräte für den AT vor und unterstützt diesen. Er\nbedient die nicht festverbauten Aggregate, leistet technische Hilfe und übernimmt\nauf Befehl andere Aufgaben.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 6
  },
  {
    "id": 6,
    "q": "Welche Maßnahmen haben im Hilfeleistungseinsatz mit verletzten\nPersonen oberste Priorität?",
    "a": "Sichern der Einsatzstelle und lebensrettende Sofortmaßnahmen.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 7
  },
  {
    "id": 7,
    "q": "Was versteht man unter dem Begriff „Hilfeleistungseinsatz“?",
    "a": "Der Hilfeleistungseinsatz im Sinne der FwDV 3 umfasst Maßnahmen zur Abwehr\nvon Gefahren für Leben, Gesundheit oder Sachen, die aus Explosion,\nÜberschwemmungen, Unfällen oder ähnlichen Ereignissen entstehen und mit\nden entsprechenden Einsatzmitteln durchgeführt werden. Er schließt\ninsbesondere das Retten ein.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 8
  },
  {
    "id": 8,
    "q": "In welcher FwDV ist festgelegt, wie eine Gruppe im technischen\nHilfeleistungseinsatz zu arbeiten hat?",
    "a": "FwDV 3",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 9
  },
  {
    "id": 9,
    "q": "Nach welcher Unfallverhütungsvorschrift wird im Feuerwehrdienst gearbeitet?",
    "a": "DGUV-Vorschrift 49 Feuerwehren",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 10
  },
  {
    "id": 10,
    "q": "Darf von den Bestimmungen der Unfallverhütungsvorschrift abgewichen\nwerden?",
    "a": "Ja, nur zur Menschenrettung.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 11
  },
  {
    "id": 11,
    "q": "Wann hat das Befreien einer eingeklemmten Person\nhöhere Priorität als die medizinische Erstversorgung?",
    "a": "Bei Feuer, Explosionsgefahr, toxische Gase, Atemstillstand, Herz-\nKreislaufstillstand",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 12
  },
  {
    "id": 12,
    "q": "Welche Ausrüstungsgegenstände nimmt der Angriffstrupp im\nHilfeleistungseinsatz vor?",
    "a": "Erste Hilferucksack, Glaskoffer, Brechstange",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 13
  },
  {
    "id": 13,
    "q": "Was versteht man nach der FwDV 3 unter dem Begriff „Absperrbereich“?",
    "a": "Der Absperrbereich ist der unmittelbar an den Arbeitsbereich angrenzende Teil\nder Einsatzstelle. Er ist die Aufstellungs-, Bewegungs- und\nBereitstellungsfläche für Einsatzkräfte und Einsatzmittel.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 14
  },
  {
    "id": 14,
    "q": "Welche Sicherungsaufgaben im Hilfeleistungseinsatz werden durch den\nWassertrupp ohne besonderen Befehl vorgenommen?",
    "a": "- sichern gegen den fließenden Verkehr\n- sichern gegen Verrutschen, Wegrollen und Nachsacken auf Grund\nunkontrollierter Bewegungen von Lasten\n- sichern gegen Brandgefahr\n- sichern gegen herabfallenden Teilen\n- sichern gegen Dunkelheit\n- sichern gegen das Auslaufen von Betriebsstoffen",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 15
  },
  {
    "id": 15,
    "q": "Muss außerhalb von geschlossenen Ortschaften auf Straßen mit Gegenverkehr\ndie Einsatzstelle nur auf der betroffenen Seite gesichert werden?",
    "a": "Nein auf Straßen mit Gegenverkehr muss immer nach beiden Seiten gesichert\nwerden.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 16
  },
  {
    "id": 16,
    "q": "In welchen Temperaturbereich fühlen sich Hochvoltenergiespeicher\nvon Elektroautos am wohlsten?",
    "a": "20° - 40° C",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 17
  },
  {
    "id": 17,
    "q": "Wieviel Liter Wasser sollten mindesten bei Unfällen mit\nElektroautos an der Einsatzstelle zur Verfügung stehen?",
    "a": "10.000 Liter",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 18
  },
  {
    "id": 18,
    "q": "Wie ist das Verhältnis bei der HLW zwischen Herzdruckmassage und\nBeatmung?",
    "a": "30 x Herzdruckmassagen zu 2 x Beatmen",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 19
  },
  {
    "id": 19,
    "q": "Welche Erkennungsmerkmale bei einer geschädigten Person\ndeuten auf einen Schock hin?",
    "a": " flacher Puls\n kaltschweißige Haut\n Unruhe",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 20
  },
  {
    "id": 20,
    "q": "Wann ist bei geschädigten Personen die stabile Seitenlage anzuwenden?",
    "a": "Bei Bewusstlosigkeit",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 21
  },
  {
    "id": 21,
    "q": "Wieviel Meter nach DGUV 205-010 muss vor der Unfallstelle die erste\nWarnmarkierung auf Autobahnen stehen?",
    "a": "800m",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 22
  },
  {
    "id": 22,
    "q": "Wer ist befugt Abweichungen von der „persönlichen\nSchutzausrüstung“ im Hilfeleistungseinsatz zu befehlen?",
    "a": "Einheitsführer",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 23
  },
  {
    "id": 23,
    "q": "Darf die Feuerwehr grundsätzlich Maßnahmen zur Verkehrslenkung\ndurchführen?",
    "a": "nein",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 24
  },
  {
    "id": 24,
    "q": "Was sagt bei der Nutzung des Statusmeldesystems im Digitalfunk der „Status\n3“ aus?",
    "a": "Das Fahrzeug hat den Einsatzauftrag übernommen und ist auf dem Weg zum\nEinsatzort.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 25
  },
  {
    "id": 25,
    "q": "Warum muss der Hochvoltenergiespeicher bei E-Autos vor dem\nAbtransport mindestens 30 Minuten lang überwacht und\ndokumentiert werden?",
    "a": "Erst wenn die Temperatur des Hochvoltenergiespeichers in den letzten 30\nMinuten gefallen oder gleichgeblieben ist, kann das Fahrzeug freigegeben\nwerden.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 26
  },
  {
    "id": 26,
    "q": "In welchen Zeitabständen sind die Feuerwehrangehörigen nach § 8\nder UVV- Feuerwehren (DGUV-Vorschrift 49) über die Gefahren im\nFeuerwehrdienst sowie über die Maßnahmen zur Verhütung von\nUnfällen zu unterweisen?",
    "a": "Regelmäßig, jedoch mindesten einmal jährlich",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 27
  },
  {
    "id": 27,
    "q": "Was bedeutet im Rahmen der hydraulisch betätigten\nRettungsgeräte die Bezeichnung AS?",
    "a": "Spreizer mit mind. 20KN Spreizkraft, 600mm Spreizweite,\n12KN Zugkraft, 360mm Zugweg",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 28
  },
  {
    "id": 28,
    "q": "Was bedeutet im Rahmen der hydraulisch betätigten\nRettungsgeräte die Bezeichnung AC?",
    "a": "Schneidgerät „Cutter“ mit einer Schneidgeräteöffnung weniger als 150mm.",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 29
  },
  {
    "id": 29,
    "q": "Wie hoch ist der Arbeitsdruck von hydraulisch betätigten\nRettungsgeräten die im Rahmen der „Technischen\nHilfeleistung“ zum Einsatz kommen?",
    "a": "Unbegrenzt",
    "complex": "Fragenkomplex 1",
    "numberInComplex": 30
  },
  {
    "id": 30,
    "q": "Wo befindet sich der „Arbeitsbereich“ beim Hilfeleistungseinsatz nach FwDV 3?",
    "a": "Unmittelbar an der Gefahrenstelle",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 1
  },
  {
    "id": 31,
    "q": "Wie groß darf der Seilspreizwinkel beim Anschlagen von\nLasten maximal sein?",
    "a": "120°",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 2
  },
  {
    "id": 32,
    "q": "Wer stellt die zur Rettung befohlenen Geräte bereit, wenn der\nSchlauchtrupp nicht zur Verfügung steht?",
    "a": "Angriffstrupp",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 3
  },
  {
    "id": 33,
    "q": "Ein Stahlseil hat einen Durchmesser von 15mm. Welchen\nDurchmesser muss eine Umlenkrolle mindestens haben?",
    "a": "150mm",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 4
  },
  {
    "id": 34,
    "q": "Wieviel Meter nach DGUV 205-010 muss vor der Unfallstelle\ndie erste Warnmarkierung auf Straßen mit Gegenverkehr\nstehen?",
    "a": "200m",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 5
  },
  {
    "id": 35,
    "q": "Dürfen Drehwirbel beim Anschlagen von Seilen verwendet\nwerden?",
    "a": "Nein, da es zum Aufdrehen des Seiles kommen kann.",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 6
  },
  {
    "id": 36,
    "q": "Welche Masse in kg sind umgerechnet 75 KN?",
    "a": "7500kg",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 7
  },
  {
    "id": 37,
    "q": "Welcher Sicherheitsabstand ist grundsätzlich bei unter Last\nstehenden Drahtseilen einzuhalten?",
    "a": "1,5-faches der belasteten Seillänge",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 8
  },
  {
    "id": 38,
    "q": "Durch welche Einschlagrichtung der Erdnägel beim Setzen\neines Erdankers als Festpunkt erreiche ich die höchste\nZugkraftaufnahmefähigkeit?",
    "a": "In Zugrichtung",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 9
  },
  {
    "id": 39,
    "q": "Welche Festpunkte sind zum Anschlagen von Lasten geeignet?",
    "a": "Bäume, Fahrzeuge, Erdanker, Geländer, Leitplanken, sogenannter „Toter Mann“",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 10
  },
  {
    "id": 40,
    "q": "Was erreiche ich mit dem Einsatz einer „Festen Rolle“?",
    "a": "Eine Kraftumlenkung",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 11
  },
  {
    "id": 41,
    "q": "Was erreiche ich mit dem Einsatz einer „Losen Rolle“?",
    "a": "Die aufzuwendende Kraft wird halbiert",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 12
  },
  {
    "id": 42,
    "q": "Wie kann die Nennzugkraft der Seilwinde eines RW 2\nvergrößert werden?",
    "a": "Durch Anwendung loser Rollen",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 13
  },
  {
    "id": 43,
    "q": "Wie lautet das Hebelgesetz?",
    "a": "Kraft mal Kraftarm ist gleich Last mal Lastarm",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 14
  },
  {
    "id": 44,
    "q": "Welche Kraft muss auf der rechten Seite des Hebels wirken,\num ihn in der Waage zu halten?\n15 kN\n5 kN",
    "a": "2 m 6 m",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 15
  },
  {
    "id": 45,
    "q": "Wie nennt man die vorgeschriebene Sicherheitsschaltung bei\nhydraulisch betätigten Rettungsgeräten?",
    "a": "Totmannschaltung",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 16
  },
  {
    "id": 46,
    "q": "Was versteht man unter dem Begriff „Retten“?",
    "a": "Retten ist die Abwehr eines lebensbedrohlichen Zustandes einer Person oder\ndas Befreien einer Person aus einer lebensbedrohlichen Zwangslage",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 17
  },
  {
    "id": 47,
    "q": "Welche Kraft hat ein Luftheber LH 40 S?",
    "a": "40 kN",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 18
  },
  {
    "id": 48,
    "q": "Wieviel Kraftkissen dürfen maximal übereinander eingesetzt werden?",
    "a": "2",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 19
  },
  {
    "id": 49,
    "q": "Welche Vorteile haben Kraftkissen?",
    "a": "Große Hubkraft, sehr flach, handlich",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 20
  },
  {
    "id": 50,
    "q": "Woran erkennt man eine bewusstlose Person?",
    "a": "Nicht ansprechbar, keine Reaktion auf Reize, Puls und Atmung jedoch\nvorhanden",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 21
  },
  {
    "id": 51,
    "q": "Muss ein verunglückter Zweiradfahrer mit Bewusstlosigkeit nach der\nHelmabnahme in die stabile Seitenlage verbracht werden?",
    "a": "Ja",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 22
  },
  {
    "id": 52,
    "q": "In welcher FwDV ist festgelegt, wie Einheiten im ABC- Einsatz\nzu arbeiten haben?",
    "a": "FwDV 500",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 23
  },
  {
    "id": 53,
    "q": "Welche Bedeutung hat ein „X“ im Zusammenhang mit der\nGefahrnummer einer orangefarbenen Warntafel?",
    "a": "Der Stoff reagiert gefährlich mit Wasser.",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 24
  },
  {
    "id": 54,
    "q": "Welche Bedeutung haben die Ziffern oben auf der\norangefarbenen Warntafel?",
    "a": "Gefahrnummer",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 25
  },
  {
    "id": 55,
    "q": "Was beinhaltet der „Rettungsgrundsatz“?",
    "a": "Sichern, Zugang schaffen, Lebensrettende Sofortmaßnahmen,\nBefreiung, Transportfähigkeit herstellen, Transport",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 26
  },
  {
    "id": 56,
    "q": "Was bedeutet die Gefahrennummer 28 oben auf der orangen\nWarntafel",
    "a": "Ätzendes Gas",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 27
  },
  {
    "id": 57,
    "q": "Was sagt bei der Nutzung des Statusmeldesystems im\nDigitalfunk der „Status 4“ aus?",
    "a": "Fahrzeug am Einsatzort eingetroffen",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 28
  },
  {
    "id": 58,
    "q": "Ein Tanklastzug ist vorn und hinten mit einer leeren orangen\nWarntafel gekennzeichnet. Worum handelt es sich bei dem\nFahrzeug?",
    "a": "Mehrkammertankfahrzeug mit verschiedenen Ladegütern",
    "complex": "Fragenkomplex 2",
    "numberInComplex": 29
  },
  {
    "id": 59,
    "q": "Auf welcher Grundlage dürfen im Rahmen der Gefahrenabwehr\nim Feuerwehreinsatz Grundrechte eingeschränkt werden?",
    "a": "Auf der Grundlage des Artikel 19 des Grundgesetzes in Verbindung mit den\nBbgBKG §16 welches als nachgelagertes Gesetz die Einschränkung unter\nBenennung der Artikel regelt.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 1
  },
  {
    "id": 60,
    "q": "Ab wann gelten brennbare Gase und Dämpfe als explosiv?",
    "a": "Wenn das Mischungsverhältnis mit der Luft innerhalb der Explosionsgrenzen\nliegt.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 2
  },
  {
    "id": 61,
    "q": "Welche Explosionsgrenzen sind ihnen bekannt?",
    "a": "obere und untere Explosionsgrenze",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 3
  },
  {
    "id": 62,
    "q": "Wonach werden brennbare Flüssigkeiten eingestuft und klassifiziert?",
    "a": "Flammpunkt",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 4
  },
  {
    "id": 63,
    "q": "Sie sollen im Rahmen einer technischen Hilfeleistung einen LKW\nmit einer Gewichtskraft von 80 kN aus dem Gefahrenbereich\nziehen. Der LKW steht mit allen vier Rädern auf der asphaltierten\nFahrbahn. (berücksichtigen sie einen Rollreibwiderstand von 0,5)\nWelche Kräfte treten im Zugseil auf?",
    "a": "20 kN",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 5
  },
  {
    "id": 64,
    "q": "Sie haben eine Mannschaftsstärke von 2/6/29/37 Wofür steht die 2?",
    "a": "Anzahl der Führer (Verbandsführer, Zugführer)",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 6
  },
  {
    "id": 65,
    "q": "Sie sollen im Rahmen einer technischen Hilfeleistung ein\nFahrzeug mit einer Gewichtskraft von 36 kN aus dem\nGefahrenbereich ziehen. Das Fahrzeug steht mit allen vier\nRädern auf der asphaltierten Fahrbahn. (berücksichtigen sie\neinen Rollreibwiderstand von 0,33) Welche Kräfte treten am\nFestpunkt (Baum mit Rolle) auf?\n36 KN\n12 kN",
    "a": "RW",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 7
  },
  {
    "id": 66,
    "q": "Wie groß ist mindestens der Gefahrenbereich (Radius) bei ABC-\nEinsätzen?",
    "a": "50m",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 8
  },
  {
    "id": 67,
    "q": "Welchen Durchmesser müssen Stahldrahtseile mindestens\nbesitzen, um als Anschlagseile verwendet werden zu dürfen?",
    "a": "8 mm",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 9
  },
  {
    "id": 68,
    "q": "Mit welchem Druck werden Luftheber betrieben?",
    "a": "0,5 – 1,0 bar",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 10
  },
  {
    "id": 69,
    "q": "Wie gliedert sich die „Ordnung des Raumes“ im Hilfeleistungseinsatz?",
    "a": "Arbeitsbereich, Absperrbereich, Ablageflächen, Bereitstellungsflächen",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 11
  },
  {
    "id": 70,
    "q": "Kann man mit einem Kraftkissen W 67-12 eine Masse von\n37t anheben?",
    "a": "Ja, da das Kissen max. 67t bei 12bar hebt",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 12
  },
  {
    "id": 71,
    "q": "Was versteht man unter dem Begriff „Inkorporation\"?",
    "a": "Inkorporation ist die Aufnahme gefährlicher Stoffe in den Körper.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 13
  },
  {
    "id": 72,
    "q": "Was versteht man unter dem Begriff „Kontamination\"?",
    "a": "Kontamination ist die Verunreinigung der Oberflächen von Lebewesen, des\nBodens, von Gewässern und Gegenständen mit ABC-Gefahrenstoffen.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 14
  },
  {
    "id": 73,
    "q": "Mit welcher Farbe werden Druckgasbehälter für brennbare\nGase, außer Acetylen, gekennzeichnet?",
    "a": "Rot",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 15
  },
  {
    "id": 74,
    "q": "Entsprechend welcher Einsatzregel werden lt. FwDV 500\nMindestmaßnahmen an Einsatzstellen durchgeführt?",
    "a": "GAMS-Regel",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 16
  },
  {
    "id": 75,
    "q": "Welche Arten von Feuerwehrfahrzeugen sind speziell für den\nEinsatz bei ABC- Gefahrenlagen ausgerüstet?",
    "a": "GW-G, GW-Dekon-P, ABC-Erkunder",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 17
  },
  {
    "id": 76,
    "q": "Welche Grundsätze gelten für die Fahrzeugaufstellung im ABC- Einsatz?",
    "a": "Möglichst mit dem Wind anfahren, auf Windrichtungsänderungen achten,\nFahrzeuge in Abhängigkeit vom Stoff nicht in Senken aufstellen",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 18
  },
  {
    "id": 77,
    "q": "Welche Kabellänge zwischen zwei Verbrauchern, die an einen\ntragbaren Stromerzeuger angeschlossen sind, darf nicht\nüberschritten werden?",
    "a": "100m",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 19
  },
  {
    "id": 78,
    "q": "Die Hubhöhe eines Kraftkissens nimmt immer mehr zu. Wie verhält sich die\nHubkraft dazu?",
    "a": "Die Hubkraft nimmt ab.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 20
  },
  {
    "id": 79,
    "q": "Wofür steht das „U“ in der AUTO-Regel?",
    "a": "Unterboden absuchen",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 21
  },
  {
    "id": 80,
    "q": "Wie lautet die „Goldene Regel der Mechanik“",
    "a": "Was man an Kraft spart, muss man an Weg zusetzen.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 22
  },
  {
    "id": 81,
    "q": "Wieviel kg kann ein LH 30 S heben?",
    "a": "3000 kg",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 23
  },
  {
    "id": 82,
    "q": "Sie finden eine Person regungslos am Boden liegend vor.\nWas sind ihre ersten Maßnahmen?",
    "a": "Überprüfen der Vitalfunktionen und Ansprechbarkeit",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 24
  },
  {
    "id": 83,
    "q": "Wie hoch ist die Atemfrequenz eines Erwachsenen in Ruhe\n(Durchschnittswert)?",
    "a": "10-15-mal in der Minute",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 25
  },
  {
    "id": 84,
    "q": "Welche Befehlsarten nach FwDV100 gibt es?",
    "a": "Einzelbefehl, Gesamtbefehl, Vorbefehl, Kommando",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 26
  },
  {
    "id": 85,
    "q": "Aus wie vielen Rettungszylindern besteht der Satz SRZ 540 / 1500 - E?",
    "a": "3",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 27
  },
  {
    "id": 86,
    "q": "Welche Eigenschaften hat Autogas LPG (Flüssiggas)?",
    "a": "260-faches kleineres Volumen, schwerer als Luft, bei 8 bar flüssig,\nZündtemperatur ca. 460°C",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 28
  },
  {
    "id": 87,
    "q": "Wie lautet der Einsatzbefehl im TH-Einsatz?",
    "a": "Einheit, Auftrag, Mittel, Ziel, Weg",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 29
  },
  {
    "id": 88,
    "q": "Was ist bei einer unklaren Lage bei einer Türnotöffnung bzw. bei\nSuizidverdacht zu beachten?",
    "a": "Die Türnotöffnung sollte zum Selbstschutz unter Atemschutz durchgeführt\nwerden.",
    "complex": "Fragenkomplex 3",
    "numberInComplex": 30
  }
];
const LEVELS = {
  bronze: { label: "Bronze", complexes: ["Fragenkomplex 1"], subtitle: "Bronze · Fragenkomplex 1" },
  silver: { label: "Silber", complexes: ["Fragenkomplex 1", "Fragenkomplex 2"], subtitle: "Silber · Fragenkomplex 1 und 2" },
  gold: { label: "Gold", complexes: ["Fragenkomplex 1", "Fragenkomplex 2", "Fragenkomplex 3"], subtitle: "Gold · Fragenkomplex 1, 2 und 3" }
};
const STORAGE_KEY = "th-ln-fragenkomplex-1-3-v2";
let state = { level: "bronze", current: 0, mode: "all", order: CARDS.map(card => card.id), results: {} };
let deferredPrompt = null;
function $(id) { return document.getElementById(id); }
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function load() { try { const raw = localStorage.getItem(STORAGE_KEY); if (!raw) return; const saved = JSON.parse(raw); state = { level: saved.level || "bronze", current: Number.isInteger(saved.current) ? saved.current : 0, mode: saved.mode || "all", order: Array.isArray(saved.order) ? saved.order : CARDS.map(card => card.id), results: saved.results || {} }; } catch(e) {} }
function resultOf(index) { return state.results[String(index)] || ""; }
function cardsForLevel() { const allowed = LEVELS[state.level].complexes; return CARDS.filter(card => allowed.includes(card.complex)).map(card => card.id); }
function stack() { const allowed = new Set(cardsForLevel()); let arr = state.order.filter(id => allowed.has(id)); if (state.mode === "review") arr = arr.filter(i => resultOf(i) === "unsure" || resultOf(i) === "wrong"); if (state.mode === "wrong") arr = arr.filter(i => resultOf(i) === "wrong"); if (arr.length === 0) { alert("In diesem Stapel sind aktuell keine Karten. Es werden wieder alle Fragen dieser Kategorie angezeigt."); state.mode = "all"; arr = state.order.filter(id => allowed.has(id)); } return arr; }
function currentCardIndex() { const s = stack(); if (!s.includes(state.current)) state.current = s[0]; return state.current; }
function cardById(id) { return CARDS.find(card => card.id === id); }
function statusText(value) { if (value === "known") return "Gewusst"; if (value === "unsure") return "Gewusst, aber unsicher"; if (value === "wrong") return "Falsch"; return "Noch nicht bewertet"; }
function counts() { const allowed = new Set(cardsForLevel()); let known=0, unsure=0, wrong=0; CARDS.forEach(card => { if (!allowed.has(card.id)) return; const r = resultOf(card.id); if (r === "known") known++; if (r === "unsure") unsure++; if (r === "wrong") wrong++; }); return { known, unsure, wrong, total: allowed.size }; }
function setMode(mode) { state.mode = mode; state.current = stack()[0]; save(); render(); }
function setLevel(level) { state.level = level; state.mode = "all"; state.current = stack()[0]; $("answer").classList.add("hidden"); $("showAnswer").textContent = "Antwort zeigen"; save(); render(); }
function move(delta) { const s = stack(); const pos = s.indexOf(currentCardIndex()); let next = pos + delta; if (next < 0) next = s.length - 1; if (next >= s.length) next = 0; state.current = s[next]; $("answer").classList.add("hidden"); $("showAnswer").textContent = "Antwort zeigen"; save(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
function mark(value) { state.results[String(currentCardIndex())] = value; save(); move(1); }
function shuffle() { const allowed = new Set(cardsForLevel()); const inLevel = state.order.filter(id => allowed.has(id)); const outside = state.order.filter(id => !allowed.has(id)); for (let i = inLevel.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [inLevel[i], inLevel[j]] = [inLevel[j], inLevel[i]]; } state.order = outside.concat(inLevel); state.current = stack()[0]; save(); render(); }
function renderJump() { const grid = $("jumpGrid"); grid.innerHTML = ""; const allowed = new Set(cardsForLevel()); const levelCards = CARDS.filter(card => allowed.has(card.id)); levelCards.forEach((card, pos) => { const btn = document.createElement("button"); btn.type = "button"; const shortComplex = card.complex.replace("Fragenkomplex ", "FK "); btn.innerHTML = `${pos + 1}<span class="small">${shortComplex}</span>`; const r = resultOf(card.id); btn.className = r ? r : ""; if (card.id === currentCardIndex()) btn.classList.add("active"); btn.addEventListener("click", () => { state.mode = "all"; state.current = card.id; $("answer").classList.add("hidden"); $("showAnswer").textContent = "Antwort zeigen"; save(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }); grid.appendChild(btn); }); }
function render() { const s = stack(); const index = currentCardIndex(); const card = cardById(index); const pos = s.indexOf(index) + 1; const r = resultOf(index); const c = counts(); $("subtitle").textContent = LEVELS[state.level].subtitle; $("question").textContent = card.q; $("answer").textContent = card.a; $("complexLabel").textContent = `${card.complex} · Frage ${card.numberInComplex}`; $("cardNumber").textContent = `Karte ${pos} / ${s.length}`; $("cardStatus").textContent = statusText(r); $("knownCount").textContent = c.known; $("unsureCount").textContent = c.unsure; $("wrongCount").textContent = c.wrong; $("stackCount").textContent = s.length; $("progressBar").style.width = `${c.total ? Math.round((c.known / c.total) * 100) : 0}%`; $("levelBronze").classList.toggle("primary", state.level === "bronze"); $("levelSilver").classList.toggle("primary", state.level === "silver"); $("levelGold").classList.toggle("primary", state.level === "gold"); $("modeAll").classList.toggle("primary", state.mode === "all"); $("modeReview").classList.toggle("primary", state.mode === "review"); $("modeWrong").classList.toggle("primary", state.mode === "wrong"); ["markKnown","markUnsure","markWrong"].forEach(id => $(id).classList.remove("active")); if (r === "known") $("markKnown").classList.add("active"); if (r === "unsure") $("markUnsure").classList.add("active"); if (r === "wrong") $("markWrong").classList.add("active"); renderJump(); }
function registerServiceWorker() { if ("serviceWorker" in navigator) navigator.serviceWorker.register("service-worker.js").catch(() => {}); }
function setupInstallPrompt() { const box = $("installBox"); const btn = $("installBtn"); box.classList.remove("hidden"); window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; btn.classList.remove("hidden"); }); btn.addEventListener("click", async () => { if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; btn.classList.add("hidden"); }); }
function init() { load(); $("levelBronze").addEventListener("click", () => setLevel("bronze")); $("levelSilver").addEventListener("click", () => setLevel("silver")); $("levelGold").addEventListener("click", () => setLevel("gold")); $("modeAll").addEventListener("click", () => setMode("all")); $("modeReview").addEventListener("click", () => setMode("review")); $("modeWrong").addEventListener("click", () => setMode("wrong")); $("showAnswer").addEventListener("click", () => { const answer = $("answer"); const hidden = answer.classList.toggle("hidden"); $("showAnswer").textContent = hidden ? "Antwort zeigen" : "Antwort ausblenden"; }); $("prev").addEventListener("click", () => move(-1)); $("next").addEventListener("click", () => move(1)); $("markKnown").addEventListener("click", () => mark("known")); $("markUnsure").addEventListener("click", () => mark("unsure")); $("markWrong").addEventListener("click", () => mark("wrong")); $("shuffle").addEventListener("click", shuffle); $("reset").addEventListener("click", () => { if (confirm("Fortschritt wirklich löschen?")) { state.results = {}; state.mode = "all"; state.current = cardsForLevel()[0]; state.order = CARDS.map(card => card.id); localStorage.removeItem(STORAGE_KEY); render(); } }); if (!cardsForLevel().includes(state.current)) state.current = cardsForLevel()[0]; render(); registerServiceWorker(); setupInstallPrompt(); }
document.addEventListener("DOMContentLoaded", init);
