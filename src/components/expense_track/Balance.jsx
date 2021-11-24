import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'
import {useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(t=>t.cost)
    const balance = amounts.reduce((prev,curr)=>(prev+=curr),0)
    return (
          <Box width='50%' textAlign='center' p='2' bg='gray.300' m='5' boxShadow='dark-lg'><Flex flexDirection='column'>
                    <Text>Balance</Text>
                    <Text fontWeight='bold'>Rs {balance}</Text>
                </Flex>
            </Box>
    )
}

export default Balance
