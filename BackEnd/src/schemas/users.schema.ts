import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  phoneNumber: z.string().max(11),
  createdAt: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

const userSchemaResponse = userSchema.omit({ password: true });

const allUsersSchemaResponse = z.array(userSchemaResponse);

const userUpdateSchema = z.object({
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  phoneNumber: z.string().max(11),
  createdAt: z.string(),
});

const userUpdateSchemaResponse = userUpdateSchema.omit({ password: true });

const userUpdateSchemaRequest = userUpdateSchema.partial()

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  allUsersSchemaResponse,
  userUpdateSchemaResponse,
  userUpdateSchemaRequest
};
