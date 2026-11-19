---
title: "Smart Factory Agents"
description: ""
pubDate: "Nov 2 2026"
heroImage: "/portfolio/smart-factory-agents-01.png"
---

**Link zum Originalbeitrag: [linkedin.com](https://lnkd.in/p/eWQUWX7m)**

Eine Fabrik voller Agenten …

… ist normalerweise ein Indiz für ein fatales Sicherheitsleck.
In unserer Software-Engineering-Vorlesung bei Andreas Szlatki an der DHBW Heilbronn war aber genau das die Aufgabe: ein bestehendes Fertigungsunternehmen souverän in eine Smart Factory zu transformieren.
Fiktives Unternehmen aber realer Use-Case: Für unseren Solarpanel-Hersteller haben wir zuerst eine klassische IT-Landschaft aufgebaut. Sie besteht aus Cloud-Speicher für Maschinenhandbücher, einer IIoT-Plattform für die Maschinen unserer Fertigungslinie und einem vollständigen ERP-System auf Basis von Apache OFBiz.

Diese Landschaft haben wir dann mit einer selbst implementierten Agentic Platform smartifiziert:

- MCP statt Datensilos: MCP-Server machen ERP, Maschinendaten, Handbücher und Versandtools für unsere Fachagenten nutzbar, jeweils zugeschnitten auf unsere Use Cases.
- Orchestrator und Fachagenten: Ein Orchestrator verteilt Aufgaben per A2A an die Agenten für Maintenance, Inventory, Sustainability und Logistics.
- Nutzerfreundliche UI: ein Dashboard mit empfohlenen Actions und ein Chat-Interface, als Web- und native App.
- Security by Design: Login per OIDC und Decision Zones, die technisch erzwungen werden und nicht nur im Prompt stehen.

🟢 Green: nur lesen

🟡 Yellow: erst nach Freigabe durch berechtigte Nutzer

🔴 Red: existiert für Agenten gar nicht als Tool. „Stopp sofort die Fräsmaschine FM-03“ lehnt das System ab und loggt sie entsprechend. Die Einhaltung der Richtlinien wird fortlaufend durch Evals geprüft.

🇪🇺 Europäisch souverän: Unsere Agenten laufen auf Basis eines Mistral Models. Die gesamte Plattform ist modular auf Open-Source-Komponenten aufgebaut - Vendor-Lock-In unmöglich. Alle Komponenten werden automatisch per Docker-Containern deployt.

Unser größtes Learning: Keine Anfrage ist perfekt. Niemand schreibt „Status von FM-03?“. Die Leute schreiben „Was ist mit der Fräse los?“. Ein LLM allein schließt diese Lücke zwischen Fachsprache und systemspezifischen Datenstrukturen nicht zuverlässig. Dafür braucht es bewusst gepflegtes Domänenwissen:

Thesaurus: ordnet Synonyme und Alltagsbegriffe den richtigen IDs zu.
Ontologie: beschreibt, wie Maschinen, Ersatzteile, Aufträge und Kunden zusammenhängen.
Knowledge Graph: macht diese Beziehungen für die Agenten abfragbar.
Gute Agenten entstehen also nicht nur durch gutes Prompting. Sie brauchen auch ein sauberes semantisches Fundament unter den Daten.

Danke an mein Team Mikail Demirel, Sören Baumann, Tim Schmelz und Matthis Kollmann für engagiertes Engineering zu jeder Tages- und vor allem Nachtzeit.
Danke an Andreas Szlatki für eine praxisnahe Vorlesung, in der wir echte Software bauen durften statt nur über sie zu reden.
Vielen Dank auch an unsere Studiengangsleitung Dr. Aliona von der Trenck für die Realisierung der Veranstaltung innerhalb unseres Vorlesungsplan.

## Genutzte Technologien
- Next.js mit Tailwind CSS
- MCP, Google GenAI Python SDK, Mistral
- Apache OfBiz
- Docker, Docker Compose, GitLab
