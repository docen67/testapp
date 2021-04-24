import React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
          <VStack spacing={8}>
            <Text>
              Contact
            </Text>
          </VStack>
    </ChakraProvider>
  );
}

export default App;
