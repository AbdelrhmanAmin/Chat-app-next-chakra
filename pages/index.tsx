import React from "react";
import { Button, Stack, Box, Flex } from "@chakra-ui/react";
import { useAuth } from "lib";
import { GithubIcon, GoogleIcon } from "@components/icons";
import { Chat } from "@components/ui";

const Index = () => {
  const { user, signInWithGitHub, signInWithGoogle } = useAuth();

  return (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      justify="center"
      alignItems="center"
    >
      {user ? (
        <>
          <Chat />
        </>
      ) : (
        <Stack direction={"column"} spacing="8px">
          <Box>
            <Button
              rightIcon={<GithubIcon />}
              colorScheme="gray"
              _focus={{ bg: "blue.900", transform: "scale(0.95)" }}
              onClick={(e) => {
                e.currentTarget.blur();
                signInWithGitHub();
              }}
            >
              Sign in with GitHub
            </Button>
          </Box>
          <Box>
            <Button
              rightIcon={<GoogleIcon />}
              bgColor="blue.400"
              _hover={{ bg: "blue.600" }}
              _focus={{ bg: "blue.600", transform: "scale(0.95)" }}
              _active={{ bg: "blue.600", transform: "scale(0.95)" }}
              textColor="white"
              onClick={(e) => {
                e.currentTarget.blur();
                signInWithGoogle();
              }}
            >
              Sign in with Google
            </Button>
          </Box>
        </Stack>
      )}
    </Flex>
  );
};

export default Index;
