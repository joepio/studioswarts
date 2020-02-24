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

1. Ga naar de `src/projects` map en voeg daar een markdown bestand toe.
1. Maak vervolgens in `src/assets/images/projects` een map aan met dezelfde naam.
1. Voeg hieraan afbeeldingen toe.  De eerste afbeelding (`1.jpg`) wordt gebruikt als foto voor de homepage. De tweede is de omslagfoto. De rest van de afbeeldingen worden getoond op de projectpagina.
1. Plaats ook in `src/pages/index` een component voor het project.
1. Check of de flow van de homepage nog klopt - mogelijk moet de `height` in `src/components/Columns` gewijzigd worden.
