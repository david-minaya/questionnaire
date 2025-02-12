## Questionnaire

The frontend of this application is developed using Next.js and React and the backend using Node, Express, TypeORM and Postgres as the database.

This application is divided into two projects: `server` which contains the backend and `webapp` which contains the frontend.

This application is deployed on Google Cloud, using Docker and Cloud Run to run the services and Cloud SQL to run the Postgres database.

You can access to this app using the url: https://questionnaire-webapp-554293903687.us-central1.run.app.

### Users

| Role | Username | Password |
|------|----------|----------|
| admin | maria24 | maria24 |
| user  | josereyes02 | josereyes02 | 
| user  | luis_65    | luis_65 |
| user  | solis74    | solis74 |


### Considerations

I had to make some assumptions about how to implement some things in the questionnaires. For example, I didn't know if a user should be able to submit the same questionnaire multiple times, if the user should be able to update a questionnaire after submitting it, or if the user should be able to modify an answer from another questionnaire. Based on those questions, I made the following assumptions:

- The user can only submit a questionnaire once.
- The user cannot update a questionnaire that has already been submitted.
- The user cannot modify the answers of questions submitted in other questionnaire.
