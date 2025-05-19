# jitsi-iframe-sdk

A simple wrapper for the Jitsi iFrame API that allows easy integration of your Jitsi Meet API into your web applications with minimal configuration.

## Features

- **Simplified Integration**: Initialize Jitsi Meet API with just one function call.
- **Customizable**: Supports various Jitsi API configurations.
- **Typescript**: Supports TypeScript out-of-the-box.

## Installation

```sh
# npm
npm install jitsi-iframe-sdk

# pnpm
pnpm add jitsi-iframe-sdk

# yarn
yarn add jitsi-iframe-sdk

# bun
bun add jitsi-iframe-sdk
```

## Usage

### Basic Usage

```js
import { init } from "jitsi-iframe-sdk"

const jitsi = init("<your-jitsi-domain>", {
   parentNode: document.getElementById("jitsi-container"),
   roomName: "MyMeetingRoom",
   userInfo: {
      displayName: "John Doe",
      email: "johndoe@example.com",
   },
})
```

## API

### `init(domain, options)`

Creates and initializes a Jitsi Meet instance inside the given container.

#### Parameters

- `domain` (string) - The domain used to build the conference URL (e.g., `meet.jit.si`).
- `options` (object) - The object with properties (see [Jitsi IFrame API](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe)).

## License
[MIT](https://opensource.org/license/MIT)