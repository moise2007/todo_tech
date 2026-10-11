# Cahier des charges : Dispone

## 1. Présentation générale

### 1.1 Identité du projet

| Information | Valeur |
|---|---|
| **Nom** | Dispone |
| **Porteur** | Artiflex |
| **Type** | Application web open source, non commerciale (projet de portfolio) |
| **Licence** | GPL v3 |
| **Technologies** | Frontend : React. Backend : Node.js |
| **Version du document** | 0.2.0 (11 octobre 2026, brouillon) |

### 1.2 Contexte

De nombreux projets digitaux ne voient jamais le jour. Leurs porteurs démarrent avec une bonne idée mais s'essoufflent, moins par manque de compétence que par manque de structure : ils ne savent pas dans quel ordre travailler, combien de temps chaque étape demande, ni comment tenir leur rythme avec le temps réellement disponible.

Beaucoup demandent alors un planning à une IA. Rapide à obtenir, il est souvent générique, mal adapté à leurs horaires et difficile à suivre quand on débute : la personne reçoit un plan qu'elle n'a pas construit.

S'y ajoute l'absence d'**identité visuelle fixe** : sans charte graphique, chaque page oblige à refaire des choix de couleurs et de polices, ce qui ralentit le travail et rend les pages incohérentes.

### 1.3 Origine de l'idée

Le 25 août 2025, le porteur a eu l'idée d'une application immobilière adaptée au contexte camerounais. Après avoir appris JavaScript, HTML et CSS, il a commencé à coder le site, puis a constaté ses erreurs : aucune charte graphique, des pages désorganisées, aucun ordre de travail clair et aucune méthode pour le marketing. La cause principale était le manque de planning, et le projet a cessé d'avancer. **Dispone** est né de ce blocage.

Ce projet immobilier servira de **premier cas d'usage réel**, et les résultats seront partagés avec la communauté.

### 1.4 Solution

**Dispone** est un outil gratuit et open source qui aide à passer d'une idée à un plan d'exécution adapté à son temps disponible. L'utilisateur construit lui-même son plan, de façon manuelle et guidée : Dispone **calcule** le planning à partir de ses données, sans le générer à sa place.

**Version 1 :**

1. **Planificateur (cœur de l'outil)**
   - saisie des disponibilités, des parties et des tâches (une journée maximum, durées surestimées) ;
   - classement des tâches puis des parties dans l'ordre de réalisation ;
   - calcul du planning, des dates limites et d'une date de fin estimée ;
   - suivi de l'avancement par cases à cocher ;
   - en cas de dépassement, alerte partie par partie : l'utilisateur choisit de **prolonger** la date ou de **condenser** les durées ;
   - export en PDF.
2. **Charte graphique**
   - formulaire (texte libre et choix à cocher) ;
   - proposition de quatre thèmes, personnalisation ou import (CSS/JSON) ;
   - fichiers prêts pour le code (variables CSS et JSON).
3. **Comptes utilisateurs**
   - inscription et connexion par e-mail et mot de passe ;
   - enregistrement des projets sur le serveur, pour les retrouver depuis n'importe quel appareil.

**Technique :** application client-serveur. Le **frontend**, développé avec **React**, gère l'interface. Le **backend**, développé avec **Node.js**, expose une API et enregistre les données (comptes, projets, chartes) dans une base de données. Le moteur de calcul du planning est écrit en JavaScript pur, séparé de l'interface, et s'exécute côté frontend. L'export de fichier est conservé comme sauvegarde personnelle. Interface en français pensée d'abord pour le mobile, code en anglais.

| Version | Contenu |
|---|---|
| **V1** | Planificateur, charte graphique, comptes, export PDF |
| **V2** | Marketing sur 6 mois, charte réutilisée dans les affiches, collaboration, rappels |
| **V3** | IA pour aider à planifier et automatiser certaines actions marketing |

**Limites :** Dispone ne génère pas le code du projet et ne garantit pas sa réussite. Il aide à l'exécuter régulièrement.

### 1.5 Utilisateurs concernés

Dispone s'adresse à toute personne qui veut réaliser un projet digital sans plan solide pour le mener à terme.

| Profil | Ce que Dispone lui apporte |
|---|---|
| **Jeune développeur** | Un découpage en tâches et un ordre de travail clair |
| **Étudiant** | Un planning fondé sur ses vrais horaires et une date de fin |
| **Freelance** | Un suivi d'avancement et des alertes de retard |
| **Entrepreneur** | Une structure pour transformer l'idée en tâches, et une charte graphique |
| **Chef de projet** | Une vue d'ensemble par partie (gestion d'équipe en V2) |

**Utilisateur type :** il travaille seul pendant son temps libre, a des compétences variables en gestion de projet, utilise souvent un téléphone avec une connexion parfois limitée, a déjà abandonné un projet ou craint de le faire, et n'a pas de charte graphique. Ce profil impose une interface mobile d'abord, des pages légères, des messages d'erreur réseau clairs et une sauvegarde sur le serveur pour retrouver son projet depuis n'importe quel appareil.

**Besoins et réponses :**

| Besoin | Réponse de Dispone |
|---|---|
| Savoir par où commencer | Parties, tâches et ordre de réalisation |
| Tenir compte de son temps réel | Planning fondé sur ses disponibilités |
| Connaître la date de fin | Dates limites et date de fin estimée |
| Gérer un retard sans se décourager | Alerte claire : prolonger ou condenser |
| Voir ses progrès | Cases à cocher et avancement |
| Garder un design cohérent | Charte proposée et utilisable dans le code |
| Conserver son plan | Compte avec sauvegarde sur le serveur, export PDF et fichier de sauvegarde |

**Autres parties prenantes :** le porteur (Artiflex), les contributeurs open source, les testeurs et la communauté de développeurs.

**Hors V1 :** les équipes (V2), les outils de gestion avancés (Gantt, budgets) et les plannings générés par IA (V3).

## 2. Fonctionnalités

### 2.1 Présentation des fonctionnalités générales

D'une part, l'ensemble des fonctionnalités du système permet à l'utilisateur de définir sa charte graphique grâce à certaines informations qu'il fournira. D'autre part, elles lui permettent de structurer son projet en parties, chaque partie comportant des tâches à exécuter régulièrement selon sa disponibilité. Un compte utilisateur permet de retrouver ses projets sur le serveur.

### 2.2 Identification des acteurs

- **Visiteur** : personne non connectée. Elle peut créer un compte ou se connecter.
- **Utilisateur** : personne connectée. Elle définit ses parties, ses tâches, ses disponibilités et les informations de ses projets, et elle suit leur avancement.
- **Système (moteur de planification)** : calcule le planning, repère les retards et met à jour l'avancement.

Dans les versions futures, s'ajouteront les **membres d'équipe** (V2) et l'**intelligence artificielle** (V3).

### 2.3 Liste des fonctionnalités

- créer, consulter, modifier et supprimer un projet
- créer, consulter, modifier et supprimer une partie
- créer, consulter, modifier et supprimer une tâche
- préciser les disponibilités hebdomadaires
- classer les parties et les tâches
- générer les dates limites
- valider une tâche
- consulter l'état d'évolution du projet
- calculer le temps passé sur le projet
- prolonger la date limite en cas de retard
- condenser les tâches pour respecter la date limite en cas de retard
- afficher un graphe d'activité
- rechercher une charte graphique par filtre
- personnaliser une charte graphique
- sauvegarder une charte graphique
- exporter le planning en PDF
- exporter et importer un projet
- générer et importer les fichiers de charte
- créer un compte
- se connecter et se déconnecter
- réinitialiser son mot de passe
- gérer son compte (modifier, supprimer)

### 2.4 Description détaillée des fonctionnalités

**Convention.** Chaque fonctionnalité a un identifiant (F-xx), un acteur (**Visiteur**, **Utilisateur** ou **Système**), une priorité (**Indispensable**, **Utile**, **Bonus**) et des règles de gestion. Les durées sont saisies en heures et minutes et stockées en minutes. Les dates sont affichées au format JJ/MM/AAAA. Toutes les données d'un utilisateur sont enregistrées sur le serveur et accessibles uniquement par lui. Les fonctionnalités F-01 à F-18 sont réservées à un utilisateur connecté.

| ID | Fonctionnalité | Acteur | Priorité |
|---|---|---|---|
| F-01 | Gérer un projet | Utilisateur | Indispensable |
| F-02 | Préciser les disponibilités hebdomadaires | Utilisateur | Indispensable |
| F-03 | Gérer les parties | Utilisateur | Indispensable |
| F-04 | Gérer les tâches | Utilisateur | Indispensable |
| F-05 | Classer les parties et les tâches | Utilisateur | Indispensable |
| F-06 | Générer les dates limites | Système | Indispensable |
| F-07 | Valider une tâche | Utilisateur | Indispensable |
| F-08 | Consulter l'état d'avancement | Utilisateur | Indispensable |
| F-09 | Calculer le temps passé | Système | Utile |
| F-10 | Prolonger une date limite | Utilisateur | Indispensable |
| F-11 | Condenser les tâches | Utilisateur | Indispensable |
| F-12 | Afficher un graphe d'activité | Système | Bonus |
| F-13 | Rechercher une charte graphique | Utilisateur | Indispensable |
| F-14 | Personnaliser une charte graphique | Utilisateur | Indispensable |
| F-15 | Sauvegarder une charte graphique | Utilisateur | Indispensable |
| F-16 | Exporter le planning en PDF | Utilisateur | Indispensable |
| F-17 | Exporter et importer un projet | Utilisateur | Utile |
| F-18 | Générer et importer les fichiers de charte | Utilisateur | Indispensable / Utile |
| F-19 | Créer un compte | Visiteur | Indispensable |
| F-20 | Se connecter et se déconnecter | Visiteur / Utilisateur | Indispensable |
| F-21 | Réinitialiser son mot de passe | Visiteur | Utile |
| F-22 | Gérer son compte | Utilisateur | Indispensable |

---

#### F-01 : Gérer un projet (créer, consulter, modifier, supprimer)

- **Acteur :** Utilisateur
- **Description :** l'utilisateur crée son projet, le retrouve à la connexion, modifie ses informations et le supprime.
- **Données :** nom (obligatoire, 3 à 80 caractères), description (facultative), date de début (par défaut : aujourd'hui).
- **Règles de gestion :**
  - la création produit un projet vide (aucune partie, aucune tâche, disponibilités à renseigner) ;
  - un utilisateur peut avoir **plusieurs projets** et choisit celui qu'il ouvre dans une liste ;
  - la modification de la date de début recalcule tout le planning ;
  - la suppression demande une **confirmation explicite** et prévient que les données seront perdues, avec une proposition d'export avant ;
  - un utilisateur n'accède jamais aux projets d'un autre.
- **Résultat :** le projet est enregistré automatiquement sur le serveur après chaque modification, avec un indicateur « enregistré ».
- **Erreurs :** nom vide ou trop court ; serveur injoignable (message clair, les modifications ne sont pas perdues et un nouvel envoi est tenté).

#### F-02 : Préciser les disponibilités hebdomadaires

- **Acteur :** Utilisateur
- **Description :** pour chaque jour de la semaine, l'utilisateur indique un ou plusieurs créneaux pendant lesquels il peut travailler (par exemple lundi 19:00 à 21:00).
- **Données :** jour, heure de début, heure de fin ; option : jours bloqués exceptionnels.
- **Règles de gestion :**
  - la **capacité d'un jour** est la somme de ses créneaux ;
  - un jour sans créneau a une capacité nulle et ne reçoit aucune tâche ;
  - la fin d'un créneau doit être postérieure à son début, et les créneaux d'un même jour ne se chevauchent pas ;
  - le **plafond d'une tâche** est la plus grande capacité journalière ;
  - toute modification des disponibilités recalcule le planning.
- **Résultat :** affichage de la capacité de chaque jour et du plafond de tâche.
- **Erreurs :** aucun créneau saisi (le calcul du planning est refusé avec un message explicite), créneaux incohérents.

#### F-03 : Gérer les parties (créer, consulter, modifier, supprimer)

- **Acteur :** Utilisateur
- **Description :** l'utilisateur découpe son projet en parties (par exemple : charte graphique, page d'accueil, base de données).
- **Données :** nom (obligatoire, unique dans le projet), description (facultative).
- **Règles de gestion :**
  - la **durée d'une partie est calculée** : somme des durées de ses tâches (elle n'est jamais saisie) ;
  - une partie sans tâche a une durée de 0 et pas de date limite ;
  - la suppression d'une partie supprime ses tâches, après confirmation qui indique leur nombre ;
  - une nouvelle partie est ajoutée en dernière position.
- **Résultat :** la liste des parties s'affiche avec leur durée totale.
- **Erreurs :** nom vide ou déjà utilisé.

#### F-04 : Gérer les tâches (créer, consulter, modifier, supprimer)

- **Acteur :** Utilisateur
- **Description :** dans chaque partie, l'utilisateur renseigne les tâches à réaliser au quotidien.
- **Données :** titre (obligatoire), durée estimée (obligatoire), description (facultative).
- **Règles de gestion :**
  - la durée est **strictement positive** et **ne dépasse pas le plafond** défini en F-02 ;
  - au-delà du plafond, Dispone **refuse la tâche** et demande de la **fragmenter** (« Cette tâche dure 5 h, ton plus grand créneau est de 4 h. Découpe-la en plusieurs tâches ») ;
  - on encourage la **surestimation** des durées : un rappel s'affiche à la saisie ;
  - modifier la durée d'une tâche terminée n'est pas permis ; il faut d'abord la rouvrir ;
  - supprimer ou modifier une tâche recalcule le planning.
- **Résultat :** la durée de la partie est mise à jour automatiquement.
- **Erreurs :** durée nulle ou négative, durée au-dessus du plafond, titre vide.

#### F-05 : Classer les parties et les tâches

- **Acteur :** Utilisateur
- **Description :** l'utilisateur classe d'abord les tâches de chaque partie, puis les parties entre elles, dans l'ordre de réalisation.
- **Règles de gestion :**
  - le classement est possible par boutons « monter / descendre » (obligatoire pour l'usage mobile) et par glisser-déposer (utile) ;
  - l'ordre définit la **liste ordonnée** utilisée par le planning : toutes les tâches de la partie 1, puis celles de la partie 2, etc. ;
  - une tâche ne peut pas changer de partie par simple classement ;
  - tout changement d'ordre recalcule le planning.
- **Résultat :** l'ordre est enregistré et visible partout.

#### F-06 : Générer les dates limites

- **Acteur :** Système
- **Description :** à partir des disponibilités, de l'ordre et des durées, le moteur place chaque tâche dans un jour et calcule la date limite de chaque partie et la date de fin du projet.
- **Règles de gestion** (détail dans le document des règles de calcul) :
  - une tâche n'est jamais coupée entre deux jours ;
  - les tâches sont placées dans l'ordre, dans le **premier jour** dont le temps libre est suffisant, sans jamais précéder la tâche précédente ;
  - la date limite d'une partie est le jour de sa dernière tâche ;
  - les tâches terminées ne sont pas replacées ; les autres sont replacées à partir d'aujourd'hui ;
  - **trois dates** par partie : **date prévue** (fixée à la validation du planning, jamais modifiée), **date limite en vigueur** (celle acceptée par l'utilisateur) et **date actuelle** (recalculée) ;
  - le calcul se refait à chaque changement et à chaque nouveau jour.
- **Déclencheur :** l'utilisateur clique sur « Valider ce planning » pour fixer les dates prévues.
- **Résultat :** planning jour par jour, dates limites par partie, date de fin estimée.
- **Erreurs :** disponibilités absentes, aucune tâche, projet dépassant un an (avertissement).

#### F-07 : Valider une tâche

- **Acteur :** Utilisateur
- **Description :** l'utilisateur coche une tâche comme terminée (et peut la décocher).
- **Règles de gestion :**
  - la date de validation est enregistrée ;
  - la tâche validée garde son jour de réalisation et libère la capacité des jours futurs ;
  - une tâche peut être validée même si elle n'était pas prévue ce jour-là (en avance ou en retard) ;
  - la validation déclenche le recalcul du planning et de l'avancement ;
  - si toutes les tâches d'une partie sont validées, la partie est marquée terminée.
- **Résultat :** avancement et dates mis à jour ; si un dépassement apparaît, l'alerte de F-10 / F-11 s'affiche.

#### F-08 : Consulter l'état d'avancement

- **Acteur :** Utilisateur
- **Description :** tableau de bord qui montre où en est le projet.
- **Informations affichées :**
  - avancement global et par partie, en pourcentage de **durée validée** par rapport à la durée totale, et en nombre de tâches ;
  - tâches du jour ;
  - date prévue, date actuelle et retard (en jours) pour chaque partie ;
  - date de fin estimée du projet ;
  - alertes de dépassement en attente.
- **Règles de gestion :** « en temps réel » signifie que l'affichage se met à jour **dès que l'utilisateur agit** (cocher, modifier) ; il n'y a pas de synchronisation entre personnes en V1.

#### F-09 : Calculer le temps passé sur le projet

- **Acteur :** Système
- **Description :** le système calcule le temps consacré au projet.
- **Définition retenue :** **temps réalisé = somme des durées estimées des tâches validées.** Dispone ne chronomètre pas le travail.
- **Informations calculées :** temps réalisé, temps restant (durée des tâches non terminées), temps total estimé.
- **Résultat :** affichés dans le tableau de bord, par partie et pour le projet.
- **Limite :** si l'utilisateur a surestimé ses tâches, le temps réalisé sera supérieur au temps réellement passé. Un chronomètre réel pourrait être ajouté plus tard.

#### F-10 : Prolonger une date limite

- **Acteur :** Utilisateur (déclenchée par une alerte du Système)
- **Description :** quand les tâches non terminées d'une partie ne tiennent plus avant sa date limite en vigueur, le système le constate et l'utilisateur peut accepter une nouvelle date.
- **Règles de gestion :**
  - les parties en retard sont traitées **une par une**, dans l'ordre de réalisation ;
  - l'alerte indique la partie, le **déficit** (durée des tâches placées après la date limite en vigueur) et la **nouvelle date nécessaire** ;
  - **prolonger** : la date limite en vigueur prend la valeur de la date actuelle ; la **date prévue est conservée** pour afficher le retard cumulé ;
  - rien ne change sans la décision de l'utilisateur ;
  - si l'utilisateur ne décide pas, l'alerte reste affichée et le planning garde son dernier état validé ;
  - après chaque décision, le moteur recalcule tout et passe à la partie suivante en retard, s'il en reste.
- **Résultat :** nouvelles dates limites, retard cumulé visible.

#### F-11 : Condenser les tâches

- **Acteur :** Utilisateur
- **Description :** pour garder sa date limite, l'utilisateur **réduit lui-même la durée** de certaines tâches non terminées de la partie en retard.
- **Règles de gestion :**
  - l'écran affiche le déficit, qui est **recalculé après chaque modification** (une réduction ne fait pas toujours gagner autant de temps sur la date, car les tâches ne sont pas coupées) ;
  - le bouton de validation devient actif quand le déficit atteint zéro ;
  - un message rappelle à chaque réduction : « Attention, tu réduis ta marge de sécurité » ;
  - seules les tâches non terminées peuvent être réduites, et la durée minimale est de 15 minutes ;
  - l'utilisateur peut annuler et revenir au choix « prolonger ».
- **Résultat :** durées modifiées, date limite en vigueur conservée.

#### F-12 : Afficher un graphe d'activité

- **Acteur :** Système
- **Description :** graphique qui montre le rythme de travail.
- **Contenu proposé :** heures validées par jour ou par semaine ; courbe de l'avancement réel comparée à l'avancement prévu.
- **Règles de gestion :** s'appuie sur les dates de validation des tâches (F-07) ; si aucune tâche n'est validée, un message invite à commencer.
- **Priorité :** bonus, à faire après les fonctionnalités indispensables.

#### F-13 : Rechercher une charte graphique

- **Acteur :** Utilisateur
- **Description :** l'utilisateur décrit son projet et Dispone lui propose les thèmes les plus adaptés.
- **Données :** choix à cocher (domaine, ambiance, public, style) et texte libre **facultatif**.
- **Règles de gestion :**
  - le texte est nettoyé (minuscules, sans accents ni mots vides, synonymes remplacés) ;
  - **score** : 10 points par étiquette cochée en commun, 5 points de bonus si le domaine correspond, 2 points par mot du texte trouvé dans les mots-clés (plafond de 10 points pour le texte) ;
  - Dispone propose les **4 meilleurs thèmes**, **visuellement différents** entre eux (teinte principale écartée d'au moins 30 degrés) ;
  - score minimum : 20 ; en dessous, aucun thème n'est proposé et Dispone propose la personnalisation ou l'import.
- **Résultat :** 4 thèmes avec aperçu (couleurs, titre, bouton).

#### F-14 : Personnaliser une charte graphique

- **Acteur :** Utilisateur
- **Description :** l'utilisateur modifie le thème choisi, ou en part de zéro si rien ne convient.
- **Éléments modifiables :** couleurs (principale, secondaire, fond, texte, succès, erreur), polices (titres, texte), taille de base, arrondi, espacement, style des boutons.
- **Règles de gestion :**
  - aperçu **en direct** pendant la modification ;
  - les couleurs sont au format `#RRGGBB` ;
  - avertissement si le contraste entre texte et fond est insuffisant ;
  - la charte modifiée est marquée « personnalisée ».

#### F-15 : Sauvegarder une charte graphique

- **Acteur :** Utilisateur
- **Description :** la charte validée est enregistrée avec le projet et reste modifiable.
- **Règles de gestion :** la charte est enregistrée sur le serveur avec le projet, reste modifiable et est incluse dans l'export de F-17 ; une charte existante demande confirmation avant d'être remplacée.

#### F-16 : Exporter le planning en PDF

- **Acteur :** Utilisateur
- **Contenu du PDF :** nom du projet, disponibilités, parties avec leurs dates (prévue et actuelle), planning jour par jour, avancement ; **charte graphique** en option (utile).
- **Règles de gestion :** généré dans le navigateur, en français ; si le planning est vide, l'export est refusé avec un message.

#### F-17 : Exporter et importer un projet (sauvegarde personnelle)

- **Acteur :** Utilisateur
- **Description :** sauvegarde du projet dans un fichier JSON, et reprise depuis un fichier.
- **Règles de gestion :**
  - le fichier contient un numéro de version de format ;
  - à l'import, Dispone **valide** le fichier et liste clairement les erreurs ;
  - l'import **crée un nouveau projet** dans le compte, sans écraser les projets existants.

#### F-18 : Générer et importer les fichiers de charte

- **Acteur :** Utilisateur
- **Génération (indispensable) :** téléchargement de `charte.css` (variables `--color-primary`, `--font-heading`, etc.) et de `charte.json`.
- **Import (utile) :** JSON conforme au format attendu ; CSS limité aux variables autorisées dans `:root`. Le reste du CSS est ignoré et signalé, jamais injecté tel quel. Un modèle de fichier est téléchargeable.

#### F-19 : Créer un compte

- **Acteur :** Visiteur
- **Données :** nom d'affichage, e-mail, mot de passe.
- **Règles de gestion :**
  - l'e-mail doit être valide et unique ;
  - le mot de passe contient au moins 8 caractères ;
  - le mot de passe est **haché** côté serveur et n'est jamais stocké en clair ni renvoyé ;
  - à la fin de l'inscription, l'utilisateur est connecté.
- **Erreurs :** e-mail déjà utilisé, e-mail invalide, mot de passe trop court.

#### F-20 : Se connecter et se déconnecter

- **Acteur :** Visiteur / Utilisateur
- **Règles de gestion :**
  - la connexion se fait par e-mail et mot de passe ;
  - en cas d'échec, le message est **générique** (« e-mail ou mot de passe incorrect ») pour ne pas révéler quels e-mails existent ;
  - la session est sécurisée et expire après une durée définie ;
  - la déconnexion termine la session ;
  - le nombre de tentatives de connexion est limité (utile).

#### F-21 : Réinitialiser son mot de passe

- **Acteur :** Visiteur
- **Priorité :** utile (nécessite un service d'envoi d'e-mails).
- **Règles de gestion :** un lien à usage unique et à durée limitée est envoyé par e-mail ; le mot de passe oublié n'est jamais envoyé.

#### F-22 : Gérer son compte

- **Acteur :** Utilisateur
- **Règles de gestion :**
  - modification du nom d'affichage et du mot de passe (l'ancien mot de passe est demandé) ;
  - **suppression du compte** : confirmation explicite, avec suppression de tous les projets et données associés.


### 2.5 Critères de validation

#### 2.5.1 Principe

Une fonctionnalité est **validée** quand **tous** ses critères sont cochés. Chaque critère est vérifiable par un test (automatique ou manuel) avec un résultat attendu précis, sans mot vague.

**Critères communs à toutes les fonctionnalités** (définition de « terminé ») :

- [ ] le code est fusionné dans `main` par pull request, avec la CI verte (tests et linter) ;
- [ ] la logique de calcul ou de validation a des tests automatiques ;
- [ ] l'écran est utilisable sur mobile (largeur de 320 px) et sur ordinateur ;
- [ ] chaque erreur affiche un message qui dit ce qui ne va pas et comment le corriger ;
- [ ] toute donnée reçue par le serveur est vérifiée côté serveur ;
- [ ] aucun mot de passe, clé ou secret n'est présent dans le dépôt ;
- [ ] la documentation est mise à jour (README ou docs) si le comportement change.

#### 2.5.2 Jeu de données de référence

Les critères ci-dessous utilisent ces données (elles deviennent les tests du moteur de calcul).

**Disponibilités :** lundi à vendredi 2 h par jour, samedi 4 h, dimanche 0. Plafond d'une tâche : 4 h. Date de début : **lundi 12/10/2026**.

| Exemple | Données | Résultat attendu |
|---|---|---|
| **1** (simple) | Partie A : T1 = 2 h, T2 = 2 h, T3 = 1 h 30. Partie B : T4 = 2 h, T5 = 1 h 30. | A = **14/10**, B = **16/10** |
| **2** (longue tâche) | Partie A : T1 = 3 h, T2 = 3 h, T3 = 2 h. | A = **26/10** (T1 le 17/10, T2 le 24/10, T3 le 26/10) |
| **3** (retard) | Exemple 1, planning validé. Le 15/10 au matin, T3 n'est pas terminée. | A actuelle = **15/10** (déficit 1 h 30). B actuelle = **19/10** (déficit 1 h 30). |

#### 2.5.3 Critères par fonctionnalité

**F-01 : Gérer un projet**

- [ ] Créer un projet avec un nom de 3 à 80 caractères l'ajoute à la liste ; un nom de 2 caractères affiche une erreur et ne crée rien.
- [ ] Après rechargement de la page, le projet et ses modifications sont toujours là.
- [ ] Changer la date de début de l'exemple 1 du 12/10 au 19/10 décale toutes les dates d'une semaine.
- [ ] La suppression demande une confirmation ; après confirmation, le projet, ses parties, ses tâches et sa charte n'existent plus en base.
- [ ] Un utilisateur B qui tente de lire, modifier ou supprimer un projet de A reçoit un refus (403 ou 404) et rien ne change.
- [ ] Si le serveur est injoignable, un message clair s'affiche, la modification reste à l'écran et est renvoyée au retour de la connexion.

**F-02 : Préciser les disponibilités**

- [ ] Saisir lundi 19:00 à 21:00 affiche une capacité de 2 h pour le lundi.
- [ ] Une fin antérieure ou égale au début est refusée ; deux créneaux qui se chevauchent sont refusés.
- [ ] Avec les données de référence, le plafond affiché est **4 h**.
- [ ] Un jour sans créneau ou bloqué ne reçoit aucune tâche.
- [ ] Sans aucun créneau, le calcul du planning est refusé avec un message explicite.
- [ ] Toute modification des disponibilités recalcule le planning.

**F-03 : Gérer les parties**

- [ ] Une partie avec un nom vide ou déjà utilisé est refusée.
- [ ] Une partie contenant des tâches de 2 h et 1 h 30 affiche **3 h 30** ; cette durée ne peut pas être saisie à la main.
- [ ] Une partie sans tâche affiche 0 h et n'a pas de date limite.
- [ ] La suppression d'une partie annonce le nombre de tâches supprimées ; après confirmation, ces tâches n'existent plus.
- [ ] Une nouvelle partie est ajoutée en dernière position.

**F-04 : Gérer les tâches**

- [ ] Une tâche avec titre et durée valides est créée, et la durée de sa partie est mise à jour.
- [ ] Une durée de 0 ou négative est refusée.
- [ ] Avec un plafond de 4 h, une tâche de **4 h** est acceptée et une tâche de **5 h** est refusée avec un message qui demande de la fragmenter.
- [ ] Le rappel de surestimation s'affiche à la saisie.
- [ ] La durée d'une tâche terminée ne peut pas être modifiée.
- [ ] Modifier ou supprimer une tâche recalcule la durée de la partie et le planning.

**F-05 : Classer les parties et les tâches**

- [ ] Les boutons « monter » et « descendre » changent l'ordre, et celui-ci est conservé après rechargement.
- [ ] Le premier élément ne peut pas monter, le dernier ne peut pas descendre.
- [ ] Dans l'exemple 1, descendre T1 sous T2 modifie les jours des tâches et le recalcul donne le résultat attendu pour le nouvel ordre.
- [ ] Une tâche ne change pas de partie par un simple classement.
- [ ] Les boutons sont utilisables au doigt sur mobile.
- [ ] (utile) Le glisser-déposer donne le même résultat que les boutons.

**F-06 : Générer les dates limites**

- [ ] **Exemple 1** : A = 14/10, B = 16/10, avec T1 le 12, T2 le 13, T3 le 14, T4 le 15, T5 le 16.
- [ ] **Exemple 2** : A = 26/10.
- [ ] Aucune tâche n'est coupée entre deux jours, et le total d'un jour ne dépasse jamais sa capacité.
- [ ] Aucune tâche n'est placée avant la tâche précédente de la liste ordonnée.
- [ ] Les mêmes données donnent toujours le même résultat.
- [ ] « Valider ce planning » fige les dates prévues ; modifier ensuite le planning ne les change pas.
- [ ] Sans disponibilité, le calcul est refusé ; sans tâche, aucune date n'est produite ; un projet de plus d'un an affiche un avertissement.
- [ ] Le calcul de 200 tâches prend moins d'une seconde.

**F-07 : Valider une tâche**

- [ ] Cocher une tâche l'affiche comme terminée, enregistre la date, et met à jour l'avancement sans recharger la page.
- [ ] Décocher la rétablit.
- [ ] Une tâche non prévue le jour même peut être cochée.
- [ ] **Exemple 3** : T3 non terminée le 15/10 donne A actuelle = 15/10 et B actuelle = 19/10.
- [ ] Quand toutes les tâches d'une partie sont cochées, la partie est marquée terminée.
- [ ] Si l'enregistrement échoue, un message s'affiche et la case revient à son état précédent.

**F-08 : Consulter l'état d'avancement**

- [ ] Avec 2 h validées sur 9 h (exemple 1), l'avancement global affiche **22 %** et le détail par partie est correct.
- [ ] Le nombre de tâches terminées sur le total s'affiche, globalement et par partie.
- [ ] Les tâches du jour sont listées.
- [ ] Pour chaque partie, date prévue, date actuelle et retard en jours sont affichés.
- [ ] La date de fin estimée et les alertes en attente sont visibles.
- [ ] Un projet sans tâche affiche « Aucune tâche » sans erreur.

**F-09 : Calculer le temps passé**

- [ ] Réalisé + restant = total estimé, dans tous les cas.
- [ ] Dans l'exemple 1, après validation de T1 et T2 : réalisé **4 h**, restant **5 h**, total **9 h**.
- [ ] Les valeurs s'affichent en heures et minutes, par partie et pour le projet.
- [ ] Un projet sans tâche affiche 0.

**F-10 : Prolonger une date limite**

- [ ] **Exemple 3** : l'alerte concerne d'abord la partie A, avec un déficit de 1 h 30 et la nouvelle date 15/10 ; la partie B apparaît « en attente ».
- [ ] Tant que l'utilisateur n'a pas décidé, le planning reste inchangé, et l'alerte réapparaît après rechargement ou reconnexion.
- [ ] Après avoir prolongé A, sa date limite en vigueur est le 15/10, sa date prévue reste le 14/10 et le retard de 1 jour est affiché.
- [ ] L'alerte de B s'affiche ensuite (déficit 1 h 30, nouvelle date 19/10).
- [ ] Prolonger B met sa date limite en vigueur au 19/10 et le retard cumulé est visible.
- [ ] Une alerte disparaît si, après une décision précédente, la partie n'est plus en retard.

**F-11 : Condenser les tâches**

- [ ] **Exemple 3**, partie B : réduire T4 de 2 h à **30 min** met le déficit à 0 ; B reste au **16/10**.
- [ ] Réduire seulement T5 de 1 h 30 à 1 h **ne supprime pas** le déficit : l'écran affiche le déficit recalculé, pas une simple soustraction.
- [ ] Le bouton de validation est inactif tant que le déficit est supérieur à 0.
- [ ] Un message sur la marge de sécurité s'affiche à chaque réduction.
- [ ] Une durée inférieure à 15 minutes est refusée ; une tâche terminée ne peut pas être réduite.
- [ ] « Annuler » restaure les durées initiales et ramène au choix prolonger / condenser.

**F-12 : Graphe d'activité** (bonus)

- [ ] Les heures validées par jour ou par semaine correspondent aux données (vérifié sur un jeu connu).
- [ ] La courbe réel contre prévu est correcte.
- [ ] Sans tâche validée, un message invite à commencer.
- [ ] Le graphique reste lisible à 320 px de large et possède une alternative en tableau.

**F-13 : Rechercher une charte graphique**

- [ ] Avec les cases immobilier, serieux et rassurant et le texte « plateforme pour acheter un terrain au Cameroun », le thème « Immobilier sobre » obtient **37 points**.
- [ ] Les 4 thèmes proposés ont des teintes principales écartées d'au moins 30 degrés (quand la bibliothèque le permet).
- [ ] Les mêmes réponses donnent toujours les mêmes thèmes, dans le même ordre.
- [ ] Si aucun thème n'atteint 20 points, aucun thème n'est proposé et le message propose personnaliser ou importer.
- [ ] Moins de 4 thèmes au-dessus de 20 : seuls ceux-là sont affichés.
- [ ] Le texte libre est facultatif : des cases seules donnent des résultats.
- [ ] Majuscules, accents, mots vides et synonymes sont traités (« Logement » est compté comme « immobilier »).
- [ ] Le choix d'un domaine est obligatoire.

**F-14 : Personnaliser une charte**

- [ ] Changer une couleur modifie l'aperçu immédiatement.
- [ ] Un format de couleur invalide (par exemple `#12`) est refusé.
- [ ] Un contraste texte/fond inférieur à 4,5:1 affiche un avertissement.
- [ ] Une charte modifiée est marquée « personnalisée ».
- [ ] L'utilisateur peut revenir au thème d'origine.
- [ ] Il peut aussi partir d'une charte vide.

**F-15 : Sauvegarder une charte**

- [ ] La charte est retrouvée après déconnexion puis reconnexion.
- [ ] Remplacer une charte existante demande une confirmation.
- [ ] La charte est incluse dans l'export de F-17.
- [ ] Seul le propriétaire du projet peut la lire ou la modifier.

**F-16 : Exporter le planning en PDF**

- [ ] Le PDF contient le nom du projet, les disponibilités, les parties avec dates prévue et actuelle, le planning jour par jour et l'avancement.
- [ ] Les dates du PDF sont identiques à celles de l'écran.
- [ ] Les accents s'affichent correctement.
- [ ] Les tableaux ne débordent pas de la page, et un long planning est réparti sur plusieurs pages.
- [ ] Un planning vide refuse l'export avec un message.
- [ ] La génération fonctionne sur mobile.
- [ ] (utile) L'option « inclure la charte » ajoute les couleurs et polices.

**F-17 : Exporter et importer un projet**

- [ ] Le fichier exporté est un JSON valide avec un numéro de version de format.
- [ ] Réimporter ce fichier crée un **nouveau** projet identique (parties, tâches, ordres, durées, charte).
- [ ] Un fichier invalide (JSON cassé, clé manquante) affiche la liste des erreurs et ne crée rien.
- [ ] L'import n'écrase aucun projet existant.
- [ ] Une version de format inconnue produit un message clair.
- [ ] Un fichier trop volumineux est refusé avec un message.

**F-18 : Fichiers de charte**

- [ ] `charte.css` contient exactement les variables `--color-primary`, `--color-secondary`, `--color-background`, `--color-text`, `--color-success`, `--color-error`, `--font-heading`, `--font-body`, `--font-size-base`, `--radius`, `--spacing`, avec les valeurs de la charte.
- [ ] Ajouté à une page de test, `charte.css` change bien les couleurs et polices.
- [ ] `charte.json` respecte le format défini.
- [ ] (utile) Un CSS importé ne voit que ses variables autorisées prises en compte ; tout le reste est ignoré et signalé. Un fichier contenant `body { display: none; }` ou une adresse `url(...)` n'a aucun effet sur la page.
- [ ] (utile) Un JSON importé sans clé obligatoire affiche un message qui **nomme** la clé manquante.
- [ ] Le modèle téléchargeable est accepté par l'import sans erreur.

**F-19 : Créer un compte**

- [ ] Un e-mail invalide ou déjà utilisé est refusé.
- [ ] Un mot de passe de moins de 8 caractères est refusé.
- [ ] En base de données, le mot de passe est **haché** et n'est lisible nulle part.
- [ ] Aucune réponse de l'API ne contient le mot de passe.
- [ ] Après l'inscription, l'utilisateur est connecté et son espace est vide.

**F-20 : Se connecter et se déconnecter**

- [ ] De bons identifiants connectent l'utilisateur.
- [ ] Un mauvais mot de passe et un e-mail inconnu affichent **le même message** générique.
- [ ] Sans session, l'accès à une route protégée renvoie une erreur 401 et redirige vers la connexion.
- [ ] La session expire après la durée prévue.
- [ ] Après la déconnexion, le bouton « retour » du navigateur ne donne plus accès aux données.
- [ ] Après 5 échecs consécutifs, la connexion est bloquée temporairement.
- [ ] Le jeton de session n'est pas lisible par le JavaScript de la page (cookie `HttpOnly`).

**F-21 : Réinitialiser le mot de passe** (utile)

- [ ] La réponse affichée est identique, que l'e-mail existe ou non.
- [ ] Le lien reçu est à usage unique et expire (par exemple après 1 heure).
- [ ] Après le changement, l'ancien mot de passe ne fonctionne plus.
- [ ] Un nouveau mot de passe de moins de 8 caractères est refusé.

**F-22 : Gérer son compte**

- [ ] Le nom d'affichage peut être modifié.
- [ ] Changer le mot de passe exige l'ancien ; un ancien mot de passe incorrect est refusé.
- [ ] La suppression du compte demande une confirmation explicite.
- [ ] Après suppression, le compte, les projets, les parties, les tâches et les chartes n'existent plus en base, et la connexion est impossible.

### 2.6 Ordre d'exécution des fonctionnalités

#### 2.6.1 Principes

1. **Le risque d'abord** : le moteur de calcul est la partie la plus difficile et la plus importante. On le construit en premier, sans interface, avec ses tests.
2. **Les dépendances** : on ne construit pas un écran avant ce dont il a besoin (pas de projet sans compte, pas de tâche sans partie).
3. **Du plus utile au moins utile** : les fonctionnalités indispensables avant les utiles, puis les bonus.
4. **Du testable au réel** : après la phase E, l'outil sert déjà à planifier un vrai projet. Le porteur peut alors commencer à l'utiliser sur le projet immobilier, sans attendre la charte.
5. Chaque phase se termine par une **version** publiée et un test des critères de 2.5.

#### 2.6.2 Phase 0 : socle (hors fonctionnalités)

Dépôt GitHub, branches protégées, CI, structure `client/` et `server/`, base de données, squelette de l'API, squelette React avec les variables de la charte de l'outil. Aucune fonctionnalité visible.

#### 2.6.3 Phases et ordre

| Phase | Version | Fonctionnalités, dans l'ordre | Pourquoi à cette place |
|---|---|---|---|
| **A. Moteur** | 0.1.0 | Logique de **F-02** (capacité, plafond), **F-04** (règle de durée), **F-05** (liste ordonnée), **F-06**, **F-07** (recalcul), **F-09**, **F-10** et **F-11** (déficit, prolonger, condenser), et le score de **F-13** | C'est le cœur et le plus gros risque. Pas d'interface, seulement du JavaScript pur et des tests (exemples 1 à 3). |
| **B. Comptes** | 0.2.0 | **F-19** → **F-20** → **F-22** | Tout le reste est réservé à un utilisateur connecté et les projets appartiennent à un compte. |
| **C. Saisie** | 0.3.0 | **F-01** → **F-02** → **F-03** → **F-04** → **F-05** | Chaque élément dépend du précédent : projet, puis disponibilités, parties, tâches, ordre. |
| **D. Planning et suivi** | 0.4.0 | **F-06** → **F-07** → **F-08** (avec l'affichage de **F-09**) | Le moteur existe déjà : on le branche à l'interface, puis on coche et on suit. |
| **E. Retards** | 0.5.0 | **F-10** → **F-11** | Elles reposent sur le planning et les cases cochées de la phase D. Le planificateur est complet : début des tests sur le projet immobilier. |
| **F. Exports** | 0.6.0 | **F-16** → **F-17** | Le PDF a besoin d'un planning complet ; l'export/import a besoin de toutes les données. |
| **G. Charte** | 0.7.0 | **F-13** → **F-14** → **F-15** → **F-18** (génération d'abord, import ensuite) | Brique indépendante du planificateur : on la fait après. Dans l'ordre : trouver, modifier, enregistrer, exporter. |
| **Validation** | **1.0.0** | Tests complets avec le projet immobilier, corrections, documentation | Toutes les fonctionnalités indispensables sont validées. |
| **H. Après la 1.0.0 (ou si le temps le permet)** | 1.x | **F-21**, **F-12**, import CSS de **F-18**, glisser-déposer de **F-05**, charte dans le PDF | Utile et bonus. |

#### 2.6.4 Ordre final, fonctionnalité par fonctionnalité

| Rang | Fonctionnalité | Dépend de | Difficulté |
|---|---|---|---|
| 1 | Moteur de calcul (logique de F-02, F-04, F-05, F-06, F-07, F-09, F-10, F-11) | Socle | Élevée |
| 2 | F-19 Créer un compte | Socle | Moyenne |
| 3 | F-20 Se connecter et se déconnecter | F-19 | Moyenne |
| 4 | F-22 Gérer son compte | F-20 | Faible |
| 5 | F-01 Gérer un projet | F-20 | Moyenne |
| 6 | F-02 Disponibilités (écran et API) | F-01 | Moyenne |
| 7 | F-03 Gérer les parties | F-01 | Faible |
| 8 | F-04 Gérer les tâches | F-02, F-03 | Moyenne |
| 9 | F-05 Classer parties et tâches | F-03, F-04 | Moyenne |
| 10 | F-06 Générer les dates limites (écran) | Moteur, F-05 | Moyenne |
| 11 | F-07 Valider une tâche | F-06 | Moyenne |
| 12 | F-08 État d'avancement (avec F-09) | F-07 | Moyenne |
| 13 | F-10 Prolonger | F-07, F-08 | Élevée |
| 14 | F-11 Condenser | F-10 | Élevée |
| 15 | F-16 Export PDF | F-06, F-08 | Moyenne |
| 16 | F-17 Export / import du projet | F-01 à F-05 | Moyenne |
| 17 | F-13 Rechercher une charte | Bibliothèque de thèmes | Moyenne |
| 18 | F-14 Personnaliser une charte | F-13 | Moyenne |
| 19 | F-15 Sauvegarder une charte | F-14, F-01 | Faible |
| 20 | F-18 Fichiers de charte | F-15 | Moyenne |
| 21 | F-21 Réinitialiser le mot de passe | F-20, service d'e-mails | Moyenne |
| 22 | F-12 Graphe d'activité | F-07 | Moyenne |

**Prérequis de la phase G :** avant F-13, il faut avoir écrit les premiers thèmes (une trentaine) et la liste des étiquettes. Ce travail de rédaction peut se faire en parallèle des phases précédentes, les jours où tu veux faire une pause de code.

## 3. Architecture technique (aperçu)

| Élément | Choix | Rôle |
|---|---|---|
| **Frontend** | React | Interface, écrans, calcul du planning côté client |
| **Backend** | Node.js | API, authentification, enregistrement des données |
| **Base de données** | PostgreSQL (à confirmer) | Comptes, projets, parties, tâches, chartes |
| **Moteur de calcul** | JavaScript pur, module séparé | Planning, dates limites, déficit, score des thèmes |
| **Communication** | API REST en JSON, sur HTTPS | Échanges entre frontend et backend |

**Principes :**

- le moteur de calcul ne dépend ni de React ni du serveur : il est testé seul, avec les exemples chiffrés des règles de calcul ;
- le serveur **vérifie** toute donnée reçue (le frontend ne suffit pas) ;
- les secrets (clés, mots de passe de base de données) sont dans un fichier `.env` jamais publié ;
- le dépôt est organisé en deux dossiers, `client/` (React) et `server/` (Node.js), avec le moteur partagé.

**Ressources de l'API (à détailler dans le document technique) :** comptes et sessions, projets, disponibilités, parties, tâches, chartes, thèmes.