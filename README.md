# jitsi-iframe-sdk

A simple wrapper for the Jitsi iFrame API that allows easy integration of your Jitsi Meet API into your web applications with minimal configuration. This package also includes a JWT token generator using [Jose](https://github.com/panva/jose) for authentication when required.

## Features

- **Simplified Integration**: Initialize Jitsi Meet API with just one function call.
- **JWT Support**: Generate JWT tokens for authentication if needed.
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

### Using JWT Authentication

```js
import { init, JWT } from "jitsi-iframe-sdk"

const payload = {
   /* your JWT config */
}
const opts = { alg: "HS256", typ: "JWT" }
const token = JWT().generate(payload, "<your-jwt-secret>", opts)

const jitsi = init("<your-jitsi-domain>", {
   parentNode: document.getElementById("jitsi-container"),
   roomName: "MyMeetingRoom",
   jwt: token,
})
```

## API

### `init(domain, options)`

Creates and initializes a Jitsi Meet instance inside the given container.

#### Parameters

- `domain` (string) - The domain used to build the conference URL (e.g., `meet.jit.si`).
- `options` (object) - The object with properties (see [Jitsi IFrame API](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe)).

### `JWT()`

Creates a JWT utility object with functions to generate and verify tokens.

#### Methods

- `generate(body, secret, headers?)` - Generate a JWT token.

   - `body` (object) - Your JWT token payload.
   - `secret` (string) - Your JWT token secret.
   - `headers` (object) - Optional header settings for JWT token (defaults to `{ alg: "HS256", typ: "JWT" }`).

- `verify(token, secret, opts?)` - Verifies a JWT token.
   - `token` (string) - Your JWT token.
   - `secret` (string) - Your JWT token secret.
   - `opts` (object) - Optional combination of JWS Verification options and JWT Claims Set verification options.

## License
[MIT](https://opensource.org/license/MIT)