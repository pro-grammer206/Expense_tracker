import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Feature from './components/Feature'
import Expense from './pages/Expense'


const App = () => {
    return (
        <ChakraProvider>
        <Feature />
        <Expense /> 
        </ChakraProvider>
    )
}

export default App
