## Webpack Proxy Requests Repo

This repo is to demonstrate an issue with webpack-dev-server routing requests to routes with dots in the url.

The underlying express app simply echoes the path in the response.

1. `npm install`
2. `npm run start`
3. Navigate to `localhost:8080/.abcdefg` and observe that the route works fine.
4. Navigate to `localhost:8081/.abcdefg` (the webpack's proxy) and observe the response is an error