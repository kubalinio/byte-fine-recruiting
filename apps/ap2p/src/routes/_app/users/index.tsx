import { SearchSchemaInput, createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { UsersList } from "./-components/UsersList";

const userSearchSchema = z.object({
  sort: z.enum(["asc", "desc"]).catch("asc"),
  page: z.number().positive().catch(1),
});

export type UserSearch = z.infer<typeof userSearchSchema>;
export type UserSortType = UserSearch["sort"];

export const Route = createFileRoute("/_app/users/")({
  component: () => <UsersList />,
  validateSearch: (
    search: { sort?: string; page?: number } & SearchSchemaInput
  ) => userSearchSchema.parse(search),
});
