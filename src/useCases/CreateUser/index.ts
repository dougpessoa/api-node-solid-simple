import { MailtrapMailProvider } from "../../providers/Implementations/MailtrapMailProviders";
import { PostgresUsersRepository } from "../../repositories/Implementations/PostgresUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController };