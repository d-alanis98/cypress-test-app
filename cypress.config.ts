import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,ts,jsx,tsx}',
    excludeSpecPattern: [
      '**/1-getting-started/*',
      '**/2-advanced-examples/*'
    ]
  },
  viewportHeight: 1080,
  viewportWidth: 1920
});
