# Boldare IMDb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Setting up your IDE

IntelliJ IDEA / WebStorm / PhpStorm:

- Install the following plugins:

  - [File Watchers](https://plugins.jetbrains.com/plugin/7177-file-watchers)
  - [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
  - [EditorConfig](https://plugins.jetbrains.com/plugin/7294-editorconfig)
  - [.ignore](https://plugins.jetbrains.com/plugin/7495--ignore)

- Go to `File > Settings > Tools > File Watchers`

  Click `Import` button and select `watchers.xml` file from the repository.

Visual Studio Code:

- Install the following plugins:

  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- Go to `File > Preferences > Settings > Extensions > Prettier - Code formatter`

  Turn on `Prettier: Tslint Integration` checkbox. If you can't find this checkbox, use `Ctrl + Shift + P` shortcut to find `Preferences: Open Settings (JSON)` option. Add below line to your settings file:

  ```
  {
      "prettier.tslintIntegration": true
  }
  ```

- Go to `File > Preferences > Settings > Text Editor > Formatting`

  Turn on `Format On Save` checkbox.

From now on every change in code base will be automatically formatted by [Prettier](https://prettier.io/). [TSLint](https://palantir.github.io/tslint/) errors will be also automatically fixed on every file save.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
