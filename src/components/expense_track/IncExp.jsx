import React from 'react'
import {Flex,Box,Text} from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

const IncExp = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(t=>t.cost)
    const income = amounts.filter(t=>t>0).reduce((prev,curr)=>(prev+=curr),0)
     const expense = amounts.filter(t=>t<0).reduce((prev,curr)=>(prev+=curr),0)
    return (
         <Box width='75%' p='2' bg='white' m='5' boxShadow='dark-lg'>
                <Flex flexWrap='wrap' justifyContent='space-between' bg='gray.300'>
                    <Box bg='gray.200' p='4' m='2'>
                        <Flex flexDirection='column'>
                            <Text>Income</Text>
                            <Text fontWeight='bold'>Rs {income}</Text>
                        </Flex>
                    </Box>
                    <Box bg='gray.200' p='4' m='2'>
                        <Flex flexDirection='column'>
                            <Text>Expense</Text>
                            <Text fontWeight='bold'>Rs {Math.abs(expense)}</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
    )
}

export default IncExp
