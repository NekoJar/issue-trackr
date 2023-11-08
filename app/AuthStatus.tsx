import { Box, DropdownMenu, Avatar, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  if (status === "unauthenticated")
    return (
      <Link href="api/auth/signin" className="nav-link">
        Sign In
      </Link>
    );
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            size="2"
            radius="full"
            src={session!.user!.image!}
            fallback="?"
            className="cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <Text size="2">
            <DropdownMenu.Label>{session!.user!.email}</DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link
                href="api/auth/signout"
                className="text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                Sign Out
              </Link>
            </DropdownMenu.Item>
          </Text>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default AuthStatus;
