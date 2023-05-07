# @dddstack/droplet

A simple code generation tool for complex codebases.

## Overview

Droplet makes code generation consistent, reusable, and simple. At its core, Droplet is a link between [Handlebars](https://handlebarsjs.com) templates and CLI prompts.

## Installation

```bash
npm install @dddstack/droplet -D
```

## Initialization

Run the following command to initialize Droplet:

```bash
npx droplet init
```

Droplet will create a basic `droplet` directory with an example file and template.

![droplet init](https://raw.githubusercontent.com/dddstack/droplet/HEAD/assets/media/init.png)

## Droplet Directory

Droplet automatically reads all Droplet files and templates in the `droplet` directory. To create files and templates, follow the Droplet naming convention:

- **droplet_directory\_\***: Directory
- **droplet_file\_\*.hbs**: Droplet file
- **droplet_template\_\***: Droplet template

For example, a `droplet` directory structure could look like:

```md
├── droplet
│ ├── droplet_directory_docs
│ │ ├── droplet_file_README.md.hbs
│ │ └── droplet_file_README.md.fr.hbs
│ ├── droplet_file_index.ts.hbs
│ ├── droplet_template_package
│ │ ├── droplet_file_index.ts.hbs
└─└─└── droplet_file_package.json.hbs
```

## Commands

### File

Drop a Droplet file to a location:

```bash
npx droplet file
```

![droplet file](https://raw.githubusercontent.com/dddstack/droplet/HEAD/assets/media/file.png)

### Template

Drop a Droplet template to a location:

```bash
npx droplet template
```

![droplet template](https://raw.githubusercontent.com/dddstack/droplet/HEAD/assets/media/template.png)

## Droplet Value

To take advantage of Handlebars, use `{{droplet}}` in Handlebars templates:

```md
├── droplet
│ ├── droplet*template*{{droplet}}
└─└──└─ droplet_file_index.ts.hbs
```

```ts
// droplet_file_index.ts
export const droplet = {{droplet}};
```

Droplet prompts for an optional value that will be inserted into all mentions of `{{droplet}}`.

## Wrapping Droplet

Under the hood, Droplet is simply a [Commander](https://github.com/tj/commander.js) instance and can be easily extended.

```bash
npm install @dddstack/droplet-core
```

```ts
import { droplet } from "@dddstack/droplet-core";

export const program = droplet({
  // looks for droplet directory in fromDirectory
  // defaults to cwd()
  fromDirectory: "./files",
  // location prompt appends starts paths with toDirectory
  // defaults to cwd()
  toDirectory: "./src"
});

program.command("command").action(() => console.log("command"));
```

For a comprehensive example of wrapping Droplet, see [@ddddurk/cli](https://github.com/ddddurk/cli).

## Acknowledgements

Droplet acknowledges the hard work put into these great projects:

- [@astrojs/cli-kit](https://github.com/withastro/cli-kit)
- [Chalk](https://github.com/chalk/chalk)
- [Commander](https://github.com/tj/commander.js)
- [Handlebars](https://handlebarsjs.com)
