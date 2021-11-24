import {Box,Flex,Heading} from '@chakra-ui/react'



const Feature = () => {
    return (
        <Flex bg='blue.200' p={3} boxShadow='dark-lg' justifyContent='center' m='auto'>
        <Box p="2" >
            <Heading size="md" m='auto'>Expense Tracker</Heading>
        </Box>
        </Flex>
    )
}

export default Feature
