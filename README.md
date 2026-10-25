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
components/         Kopfzeile, Fußzeile und Seitenkopf (PageHeader)
composables/        usePageSeo: Titel, Beschreibung, Open Graph, Canonical
content/_menu.json  Menüeinträge und Logo
content/_footer.json  Fußzeile: Navigation, Vereinsname, E-Mail
public/             Bilder, Logo, Favicon, robots.txt
```

## Gestaltung

Angelehnt an strinz.de: warmes Papier, tiefes Waldgrün (`#2e4a3b`), Gold als
Akzent. Schriften: EB Garamond für den Text, Inter für Navigation und
Auszeichnungen, Pinyon Script für den Titel. Alle Schriften liegen selbst
gehostet im Build (Fontsource), es gibt keine Anfragen an Google Fonts.

Die Farben sind CSS-Variablen in `assets/css/tailwind.css` (hell und dunkel),
`tailwind.config.js` macht sie als Klassen verfügbar: `bg-paper`, `text-ink`,
`text-forest`, `text-gold` usw. Wiederkehrende Bausteine (`.btn-primary`,
`.card`, `.eyebrow`, `.ornament`, `.prose-page`) stehen ebenfalls dort.

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
