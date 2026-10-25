<template>
  <div>
    <PageHeader eyebrow="Seit 2012" title="Der Verein" />

    <div class="wrap">
      <div class="prose-page">
        <section class="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
          <div class="space-y-4 text-lg">
            <p>
              Der Verein „Auf Brüderstein e.V." wurde am 05.02.2012 von 16 Mitgliedern mit dem gemeinsamen Interesse gegründet, den Grillplatz zu erhalten und für den Jugendclub Strinz-Margarethä auch dauerhaft zugänglich zu machen.
            </p>
            <p>
              Der Verein wurde offiziell am 10.04.2012 vom Amtsgericht Wiesbaden anerkannt und eingetragen.
            </p>
          </div>
          <img
            src="/images/Logo-Bruederstein.png"
            alt="Logo Auf Brüderstein e.V."
            class="mx-auto w-48 sm:w-56 dark:rounded-2xl dark:bg-[#ece7db] dark:p-4"
            width="429"
            height="297"
          />
        </section>

        <section class="note text-center">
          <h2>Interesse am Verein?</h2>
          <p>
            Sie können sich gerne mit uns in Verbindung setzen, oder uns auch am Grillfest ansprechen.
          </p>
        </section>

        <section>
          <h2>Auszug der Satzung</h2>
          <p class="italic text-ink-faint">
            (Aktueller Stand: 05.02.2012) zur Verdeutlichung der Vereinszwecke:
          </p>

          <div class="mt-6 space-y-6">
            <article class="note">
              <h3>§ 2 Zweck und Aufgaben des Vereins</h3>
              <p>1) Zweck des Vereins ist:</p>
              <ul>
                <li>die Verwaltung des Grillplatzes.</li>
                <li>die Pflege und Instandhaltung des Grillplatzes</li>
                <li>Verwaltung der Anlage und des Inventars</li>
                <li>Vermietung, bzw. Bereitstellung der Anlage</li>
                <li>Bereitstellung der Anlage und des Inventars an den ortansässigen Jugendclub Strinz-Margarethä.</li>
              </ul>
              <p>2) Der Satzungszweck wird insbesondere verwirklicht durch:</p>
              <ul>
                <li>die Verwaltung und Pflege des Grillplatzes.</li>
              </ul>
              <p>
                3) Parteipolitische, gewerkschaftliche, konfessionelle und rassistische Bestrebungen sind ausgeschlossen. […]
              </p>
            </article>

            <article class="note">
              <h3>§ 4 Mitgliedschaft</h3>
              <p>
                1) Mitglied im Verein kann jede natürliche Person werden, die Interesse an der Verwirklichung der Vereinszwecke hat. Über die Aufnahme entscheidet nach schriftlichem Antrag der Gesamtvorstand. Die Vereinssatzung ist bindend für jedes Mitglied. […]
              </p>
              <p>
                6) Die Mitgliedschaft berechtigt nicht zur vergünstigten oder bevorzugten Nutzung der Anlagen und des Inventars. […]
              </p>
            </article>

            <article class="note">
              <h3>§ 5 Mitgliedsbeiträge</h3>
              <p>1) Von den Mitgliedern werden Beiträge erhoben. […]</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Der Verein – Auf Brüderstein e.V.",
  description:
    "Informationen über den Verein Auf Brüderstein e.V. und seine Satzung.",
  path: "/der-verein",
});
</script>
