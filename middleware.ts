export { default } from "next-auth/middleware";
export const Config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};
