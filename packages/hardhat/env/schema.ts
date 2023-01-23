import {z} from "zod";

export const envSchema = z.object({
  PRIVATE_KEY: z.string().length(64).optional(),
  GOERLI_RPC_URL: z
    .string()
    .default("https://endpoints.omniatech.io/v1/eth/goerli/public"),
});
