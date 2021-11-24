import React from 'react'
import {Flex,Box,Text,Divider} from '@chakra-ui/react'
import Card from './Card'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

const Transactions = () => {
    const {transactions,deleteTransaction} = useContext(GlobalContext)
    const cards = transactions.map(t=><Card deleteTransaction={deleteTransaction} key={t.id} task={t.task} cost={t.cost} id={t.id}/>)
    return (
       <Flex flexDirection='column' w='75%'>
           <Box  >
               <Text fontWeight='bold'>History</Text>
           </Box>
           <Divider  border='5px'/>
           <Box bg='gray.200' m='2' boxShadow='dark-lg'>
               {cards}
           </Box>
       </Flex>
    )
}

export default Transactions
