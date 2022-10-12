# Vuepabase

This is a project I created to show how Supabase auth (email and 3rd party GitHub) can be set up concretely with a new Vue 3 app. This integrates Supabase with Vue 3, Pinia, Vue-router 4, TailwindCSS, Vitest, Cypress, pnpm and more. Please see package.json for more info.

If you want to a quick start to your next Vue 3 + Supabase app, please feel free to use this template. Below I will guide you through how to set the app up locally, and the configuration you need to do in Supabase.

## Supabase Setup

Head on over to https://supabase.com/ and create your app. Choose your Project name, password, region and pricing plan as appropriate. This app will work just fine on free tier.

Once the app setup is finished, head over to Authentication - Settings.
You'll want to add both your Production URL and localhost URLs to the Site URL / Additional Redirect URLs columns. Along with the base URL, we need to add redirect URLs for our password reset flow, and 3rd party auth flow. These are `/resetpassword` and `/callback` respectively.

All in all your 'Site URL' and 'Additional Redirect URLs' should look something like this (replacing the prod URL as appropriate)

| Field                    | Value                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Site URL                 | `https://vuepabase.netlify.app/`                                                                                                                                                          |
| Additional Redirect URLs | `http://localhost:3000/resetpassword`, `https://vuepabase.netlify.app/resetpassword`, `http://localhost:3000`, `http://localhost:3000/callback`, `https://vuepabase.netlify.app/callback` |

Once you save this, the email-password authentication flow should work properly after you've set the Vue app up locally.

### GitHub Auth

You can additionally add GitHub auth to the app. First you'll need to go to GitHub and set up some app credentials.

Supabase have a great guide on how to do this already so you can follow that here: https://supabase.com/docs/guides/auth/auth-github

After you've got them, on Supabase - Settings - Auth, just enable GitHub as a 3rd party provider and enter the details you generated.

Your Supabase set up should now be complete and you can run the app locally.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Setup Vue app

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm build
pnpm test:e2e # or `pnpm test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
