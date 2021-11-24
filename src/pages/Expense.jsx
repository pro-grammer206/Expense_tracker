import React from 'react'
import {Flex} from '@chakra-ui/react'
import Balance from '../components/expense_track/Balance'
import IncExp from '../components/expense_track/IncExp'
import Transactions from '../components/expense_track/Transactions'
import NewTransaction from '../components/expense_track/NewTransaction'
import {GlobalProvider} from '../contexts/GlobalContext'
import {animated,useSpring,config} from 'react-spring'



const Expense = () => {
    const AnimateApp = animated(Flex)
    const Astyles = useSpring({
        from:{opacity:0,y:'-500px',transform:'rotate(45deg)'},
        to:{opacity:1,y:'0px',transform:'rotate(0deg)'},
        config:config.gentle
    })
    return (
        <GlobalProvider>
        <AnimateApp style={{...Astyles}} flexDirection='column'  minWidth='400px' maxWidth='500px' boxShadow='dark-lg' borderRadius='20'  width='50vw' m='auto' mt='10' alignItems='center' bg='blue.500'>
          <Balance />
           <IncExp />
            <Transactions />
            <NewTransaction />
        </AnimateApp>
        </GlobalProvider>
    )
}

export default Expense
