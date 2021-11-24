import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'

const Card = ({task,cost,id,deleteTransaction}) => {
 
    
    return (
        <Flex justifyContent= 'space-between' p='3' borderRadius='10px' alignItems= 'baseline' fontWeight='bold' onClick={()=>deleteTransaction(id)} style={{cursor:'pointer'}}>
            <Flex justifyContent= 'space-between' flexWrap='wrap' p='3' w='100%' bg={cost<0?'red.200':'white'}>
            <Box>
                <Text>{task}</Text>
            </Box>
            <Box >
                <Text>Rs {Math.abs(cost)}</Text>
            </Box>
            </Flex>
        </Flex>
    )
}

export default Card
