# Studio Swarts

[Demo hier](https://joepio.github.io/studioswarts/)

## Usage

```sh
# Install dependencies
yarn
# Run server at = http://localhost:8000/
yarn develop
# Deploy to github pages
yarn deploy
```

## Nieuwe projecten toevoegen

Ga naar de `src/projects` map en voeg daar een markdown bestand toe.
Maak vervolgens in `src/assets/images/projects` een map aan met dezelfde naam.
Voeg hieraan afbeeldingen toe.
Plaats ook in `src/pages/index` een component voor het project.
Check of de flow van de homepage nog klopt - mogelijk moet de `height` in `src/components/Columns` gewijzigd worden.
De eerste afbeelding (`1.jpg`) wordt gebruikt als foto voor de homepage.
De tweede is de omslagfoto.
De rest van de afbeeldingen worden getoond op de projectpagina.
