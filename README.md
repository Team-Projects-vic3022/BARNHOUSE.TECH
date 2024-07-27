# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- ////////////////////////////////   ////////////////////////////// -->

# Pages assigned to

## victor

- [x] Home
- [x] Article
- [x] SingleProduct

## Joseph

- [x] Products
- [x] About
- [x] Single Preview Page

## shifu

- [x] Technologies
- [x] Services
- [x] Kohtabi

# Things to note about

- before you run your code make sure it is imported to the app.jsx file and been add to a route, if not, please do weel to add the route (to prevent running around like a headless chicken)

- Check out the folder structure and also the components folder at the modules directory

- In case you need any libraries you can install that at the root directory

- Before you commit your code make sure you create a branch with your name and then merge it to the main branch

# How to undo git add and git commit

## Undo git add

To undo `git add` for all staged changes:

git reset

To undo `git add` for a specific file:

git reset <file>

## Undo git commit

To undo the most recent commit, keeping the changes:

git reset --soft HEAD~1

To undo the most recent commit and discard the changes:

git reset --hard HEAD~1

Note: Be cautious when using `--hard` as it permanently discards changes.

To undo a commit but keep it in history (create a new commit that undoes the changes):

git revert HEAD

Remember to use these commands carefully, especially when working with shared repositories.
