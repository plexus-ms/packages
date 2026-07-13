---
"@plexus-ms/config": minor
---

Add the `tsconfig-next` subpath export: the shared TypeScript compiler options for Next.js apps — `"extends": "@plexus-ms/config/tsconfig-next"`. `include`/`exclude` and `paths` stay in the extending app, since TypeScript resolves them relative to the file that declares them.
