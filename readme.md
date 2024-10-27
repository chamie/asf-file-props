# ASF-file-props

[![MIT License][license-image]][license-url]
## Overview
**ASF-file-props** is a tiny lightweight library, designed to extract the basic metadata from ASF-format files, including `.asf`, `.wma`, and `.wmv`. It supports usage on both **server-side (Node.js)** and **client-side (browser)** environments.
## Why it's good
- **Web and Node compatible**: Works for both Node.js and Web (browser) environment.
- **No overhead**: It does only the bare minimum using the bult-in native JS APIs of the environment making it tiny and lightning-fast.
- **No Runtime Dependencies**: ASF-file-props is dependency-free. You can even just drop in the files without bothering to use NPM.
- **Ideal for learning**: It's so bare-bones that it's a good jump-start into handling binary data in JS/TS.
## Why it's not
It only parses one single metadata object from the file content. Though you can always build on it using the other GUIDs and object specs from the official spec sheet. Feel free to send Pull Requests.
## What does it do
Given the file contents (`File` for web or `PathLike | FileHandle` for node) it returns the following properties extracted from the `ASF_File_Properties_Object`:
``` typescript
export type ASFFileProps = {
    fileSize: bigint,
    creationDate: bigint,
    playDuration: bigint,
    preRoll: bigint,
    durationInSeconds: number,
}
```
(see [ASFFileProps.ts](./src/ASFFileProps.ts))

## Installation
Install via npm:

```bash
npm install asf-file-props
```
(as soon as I submit it, that is ¯\\\_(ツ)\_/¯)

## Usage
### With node.js:

```typescript
import GetASFProps from 'asf-file-props';

const props = await GetASFProps.node("./test.wma")
if (props) {
    const duration = props.durationInSeconds;
    console.log(`File: test.wma`);
    console.log(`Audio duration: ${duration} seconds`);
    const seconds = duration % 60;
    const minutes = (duration - seconds) / 60;
    console.log(`that is ${minutes}:${Math.round(seconds)}`);
} else {
    console.log('Could not determine the audio duration.');
};
```

### In browser context:
See [demo/demo.html](./demo/demo.html)

### Other
The source is also basic enough to work as a good kick-start into working with binary data in JS/TS.

## Why it might not be good enough for you
It only parses one single metadata object from those files. Though you may always just start from there and get additional GUIDs and object specs from the official spec sheet.

## License
**asf-file-props** is freely distributable under the terms of the [MIT license][license-url].

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE