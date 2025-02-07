import { MigrationInterface, QueryRunner } from "typeorm";
import bycript from 'bcrypt';

export class Seed1738803220506 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    // Users
    await queryRunner.query(`
      INSERT INTO "user" (id, role, name, username, password) VALUES
        (1, 'admin', 'Maria Soprano', 'maria24', '${await bycript.hash('maria24', 10)}'),
        (2, 'user', 'Jose Reyes', 'josereyes02', '${await bycript.hash('josereyes02', 10)}'),
        (3, 'user', 'Luis Paul', 'luis_65', '${await bycript.hash('luis_65', 10)}'),
        (4, 'user', 'Eli Solis', 'solis74', '${await bycript.hash('solis74', 10)}');
    `);

    // Question 1
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (1, 'Why are you interested in this product? Select all that apply.', 'mcq');
    `);

    await queryRunner.query(`
      INSERT INTO option (id, title, "questionId") VALUES 
        (1, 'Improve blood pressure', 1),
        (2, 'Reduce risk of future cardiac events', 1),
        (3, 'Reduce risk of future cardiac events', 1),
        (4, 'Support lifestyle changes', 1),
        (5, 'Longevity benefits', 1);
    `);

    // Question 2
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (2, 'Tell us anything else you’d like your provider to know when prescribing your medication.', 'input');
    `);

    // Question 3
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (3, 'What is your current weight?', 'input');
    `);

    // Question 4
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (4, 'Which of the following have you tried in the past? Select all that apply.', 'mcq');
    `);

    await queryRunner.query(`
      INSERT INTO option (id, title, "questionId") VALUES 
        (6, 'Keto or low carb', 4),
        (7, 'Plant-based', 4),
        (8, 'Macro or calorie counting', 4),
        (9, 'Weight Watchers', 4),
        (10, 'Noom', 4),
        (11, 'Calibrate', 4),
        (12, 'Found', 4),
        (13, 'Alpha', 4),
        (14, 'Push Health', 4);
    `);

    // Question 5
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (5, 'What’s your weight loss goal?', 'mcq');
    `);

    await queryRunner.query(`
      INSERT INTO option (id, title, "questionId") VALUES 
        (15, 'Losing 1-15 pounds', 5),
        (16, 'Losing 16-50 pounds', 5),
        (17, 'Losing 51+ pounds', 5),
        (18, 'Not sure, I just need to lose weight', 5);
    `);

    // Question 6
    await queryRunner.query(`
      INSERT INTO question (id, title, type) VALUES
        (6, 'Please list any new medications you are taking.', 'input');
    `);

    // Questionnaires
    await queryRunner.query(`
      INSERT INTO questionnaire (id, title) VALUES
        (1, 'semaglutide'),
        (2, 'nad-injection'),
        (3, 'metformin');
    `);

    // Questionnaires questions
    await queryRunner.query(`
      INSERT INTO questionnaire_question (id, "questionId", "questionnaireId", priority) VALUES
        (1, 1, 1, 0),
        (2, 2, 1, 10),
        (3, 4, 1, 20),
        (4, 1, 2, 0),
        (5, 2, 2, 10),
        (6, 3, 2, 20),
        (7, 1, 3, 0),
        (8, 5, 3, 10),
        (9, 6, 3, 20);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
