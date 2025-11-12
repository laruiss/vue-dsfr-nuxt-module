# Instructions de codage IA pour VueDsfr

## Vue d'ensemble du projet

VueDsfr est une bibliothèque de composants Vue 3 qui porte le Système de Design Français (DSFR) vers Vue.js. Elle fournit ~50 composants accessibles et prêts pour la production suivant les normes de design du gouvernement français.

## Architecture et structure des fichiers

## Workflow de développement

### Commandes de build et exécution

```bash
npm install             # Installer les dépendances
npm dev                 # Démarrer le playground (:3000)
npm docs:dev            # Démarrer la documentation VitePress (:4173)
npm build               # Builder le module
npm test                # Exécuter les tests unitaires Vitest
npm lint                # Exécuter ESLint
npm format              # Corriger automatiquement ESLint
```

### Workflow GitHub : Issues et Pull Requests

- **Issues obligatoires** : Toute PR doit être liée à une issue GitHub
- **Création d'issue** :
  - Utiliser `gh issue create` avec titre et description en français
  - **Ne pas exécuter la commande** - la fournir à l'utilisateur pour qu'il l'exécute
  - Format du titre : `type(scope): 🔧 description courte du problème`
- **Nommage des branches** :
  - Préfixe obligatoire avec numéro d'issue : `{numéro-issue}-{type}-{description-kebab-case}`
  - Exemple : `1172-fix-semantic-release-refactor-config`
- **Pull Requests** :
  - Titre reprenant le message de commit principal
  - Corps commençant par Fixes avec référence à l'issue
  - Description détaillée du problème et de la solution
  - Branche cible : `main` (sauf exceptions)
  - Créer la PR via GitKraken MCP Server

### Qualité du code et commits

- **Commits** : Suivre les commits conventionnels (voir `.github/conventions-commits.md`)
- **Linting** : @antfu/eslint-config avec règles spécifiques à Vue
- **Pre-commit** : Husky exécute lint-staged sur `*.{vue,ts}`
- **CI** : GitHub Actions exécute les tests, le linting et la vérification de build

### Linting et formatage

- Respecter TOUTES les règles ESLint configurées
- Pas de `console.*`
- Préférer les imports nommés aux imports par défaut
- Ordre alphabétique des imports

### TypeScript

- Types explicites pour toutes les props/interfaces
- Éviter `any`, utiliser `unknown` si nécessaire
- Utiliser les types génériques pour la réutilisabilité
- Interfaces plutôt que types pour les objets

---

## 🧱 Règles générales

- Toujours utiliser **TypeScript** (pas de JavaScript pur).
- Activer les **types stricts** : `strict: true` dans `tsconfig.json`.
- Ne jamais utiliser `any`, `as unknown`, ou les assertions de type non justifiées.
- Préférer les **types explicites** aux inférences implicites si cela améliore la lisibilité.
- Toujours suivre les conventions ESLint du projet.
- Les imports doivent être **ESM** (`import` / `export`) — pas de `require`.
- Toujours penser en **code modulaire**, éviter les fonctions globales.
- Les noms de variables et fonctions doivent être clairs, descriptifs et en anglais.

## 🧭 Documentation & commentaires

- Ajouter un JSDoc clair sur les fonctions publiques ou les utilitaires partagés.
- Expliquer le _pourquoi_ plus que le _comment_ dans les commentaires.
- Préférer les docblocks structurés à des commentaires inline dispersés.

## 🧠 Style et lisibilité

- Préférer la clarté au "clever code".
- Éviter les raccourcis ou la micro-optimisation prématurée.
- Toujours nommer les fonctions selon leur intention (`getUserProfile` plutôt que `fetchData`).

## 💬 Pour Copilot Chat

Quand l’utilisateur demande :

- "Explique ce code" → Fournir une explication pédagogique claire, sans jargon excessif.
- "Refactorise" → Proposer une version plus claire, typée et conforme aux règles ci-dessus.
- "Ajoute des tests" → Générer des tests Vitest minimalistes et lisibles.
- "Ajoute la doc" → Produire du JSDoc complet et concis.
