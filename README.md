# AngularTailwindJit

For reproduce the tailwind-jit doesn't watch changes in @layer (Angular)

## Project setup

With angular cli + tailwindcss

With npx ng-tailwindcss-jit (https://github.com/apvarun/ng-tailwindcss-jit)



## To reproduce

Run `npm install`
Run `npm run start`

Try to modify something in 's-text-primary.scss'

In @layer section, it won't take effect unless re-start the dev server

Out @layer it works fine ...

