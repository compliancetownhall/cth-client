import { ChakraProvider } from '@chakra-ui/react'
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
