Description
===========
node-env-configuration is a node.js module that helps with loading configuration as suggested by twelve factor methodology www.12factor.net:

> **The twelve-factor app stores config in environment variables** (often shortened to env vars or env). Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard.
…
In a twelve-factor app, env vars are granular controls, each fully orthogonal to other env vars. They are never grouped together as “environments,” but instead are independently managed for each deploy. This is a model that scales up smoothly as the app naturally expands into more deploys over its lifetime.

# Quick Start
Suppose you have this json default configuration for your node application:

```javascript
var defaultConfiguration = {
  http_port: 8000,
  https_port: 8001,
  mongodb: {
    name: 'api', // Database name
    host: '127.0.0.1', // Database host
    user: '', // Database user
    password: '', // Database password
    port: 27017,
    options: {} // MongoDB options
  }
}
```

Then you want to override this configuration (or subset of it) for your production environment. You define the next environment variables :

```bash
API_APP_HTTP_PORT='80';
API_APP_HTTPS_PORT='443';
API_APP_MONGODB_NAME='api_db';
API_APP_MONGODB_HOST='api.example.com';
API_APP_MONGODB_USER='username';
API_APP_MONGODB_PASSWORD='secret password';
```

In your code your can override **defaultConfiguration** object with these environment variables:

```javascript
var nodeenvconfiguration = require('node-env-configuration');
var config = nodeenvconfiguration({
  defaults: defaultConfiguration,
  prefix: 'apiApp' // Read only env vars starting with API_APP prefix
});
```

# Notes

* Underscore character in environment variables (excluding prefix underscore) results in adding a new hierarchy level in result object:

```bash
API_APP_MONGODB_NAME = 'api_db'  # Matches obj.mongodb.name property
API_APP_MONGODB_URL_HOST = 'api.example.com'  # Matches obj.mongodb.url.host propery
```

# Configuration parameters
Name  | Default Value | Description
------|---------------|-------------
`prefix` | '' | **Pascal case** prefix. Restrict variables to read from environment to those starting with this prefix in **snake case**
`arraySeparator` | null | This character, if specified, is used as an array separator. So if a variable contains this character, the variable is parsed as an array of values
`defaults` | {} | Default object values

# Running Tests

```bash
$ npm test
```

# License

[MIT](https://github.com/whynotsoluciones/node-env-configuration/blob/master/LICENSE "MIT")
