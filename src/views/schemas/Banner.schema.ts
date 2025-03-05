import { object, string, ObjectSchema } from "yup";

interface ErrorMessages {
  name: string;
  surname: string;
}

// Define the schema function type alias
type TBannerSchemaFunction = (
  errorMessages: ErrorMessages
) => ObjectSchema<ErrorMessages>;

// Define the schema function
const bannerSchemaFunction: TBannerSchemaFunction = (errorMessages) =>
  object({
    name: string().required(errorMessages.name),
    surname: string().required(errorMessages.surname),
  });

// Assign the schema function to customerSchema
export const bannerSchema = bannerSchemaFunction;
