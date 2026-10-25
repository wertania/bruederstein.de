# Webseite bruederstein.de

Die Webseite des Vereins **Auf Brüderstein e.V.** – der Grillplatz für die
Gemeinde Hohenstein. Eine rein statische Seite: Nuxt rendert beim Build jede
Seite als HTML vor, ausgeliefert wird sie von nginx.

## Entwicklung

Voraussetzungen: [Bun](https://bun.sh) und Node.js 24 (LTS).

```bash
bun install
bun run dev        # Entwicklungsserver auf http://localhost:3000
bun run generate   # statische Seite nach .output/public
```

## Aufbau

```
pages/              eine Datei pro Seite
components/         Kopfzeile (MenuHeader) und Fußzeile (Footer)
composables/        usePageSeo: Titel, Beschreibung, Open Graph, Canonical
content/_menu.json  Menüeinträge und Logo
content/_footer.json  Fußzeile: Navigation, Vereinsname, E-Mail
public/             Bilder, Logo, Favicon, robots.txt
```

Hauptfarbe ist Grün (`#16a34a`, Tailwind `green-600`).

## Deployment

```bash
docker compose up --build   # http://localhost:8080
```

Das `Dockerfile` baut die Seite und liefert sie mit nginx aus.
`nginx.conf` schaltet `server_tokens` ab, gibt für unbekannte Pfade ein echtes
404 zurück und setzt über `security-headers.conf` CSP und weitere
Sicherheits-Header.

## Pflege

Dependabot öffnet monatlich einen PR für Pakete, GitHub Actions und die
Docker-Basis-Images; der Build-Check in CI baut jeden davon.

## Lizenz

Der Code steht unter der [MIT-Lizenz](LICENSE). Texte, Fotos und das Logo des
Vereins sind davon ausgenommen.
