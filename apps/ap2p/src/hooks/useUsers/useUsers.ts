import { authQueries } from "@ap2p/auth";
import { useInfiniteQuery } from "../useInfiniteQuery/useInfiniteQuery";

export const useUsers = () => useInfiniteQuery(authQueries.listInfinite({}));
