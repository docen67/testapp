import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  Code,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
          </VStack>
    </ChakraProvider>
  );
}

export default App;
