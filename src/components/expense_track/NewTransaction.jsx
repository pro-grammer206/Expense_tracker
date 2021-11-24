import React from 'react'
import {useState,useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import {Flex,Stack,Center} from '@chakra-ui/react'

const NewTransaction = () => {
   const {addTransaction} = useContext(GlobalContext)
    const [info,setInfo] = useState({task:'',cost:'',typeExp:'income'})
   
    const btn={
        border:0,
        padding:10,
        fontWeight:'bold',
        backgroundColor:'#45A29E',
        borderRadius:10
    }

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name
        setInfo({
            ...info,
            [name]:value
        })
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
            const NewTransaction = {
                id:Math.random()*10000,
                task:info.task,
                cost:info.typeExp==='expense'?parseFloat('-'+info.cost):parseFloat(info.cost)
            }
           addTransaction(NewTransaction)
           setInfo({task:'',cost:'',typeExp:'income'})
     
    }

    return (
        <Flex flexDirection='column' boxShadow='dark-lg' p='5' m='5' bg='gray.200'>
            <Center fontWeight='bold'>Add new Transaction</Center>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                <input type="text" name='task' value={info.task} onChange={handleChange} placeholder='Enter Task' />
                <Stack spacing={3} direction='row' alignItems='baseline'>
             <select value={info.typeExp} name='typeExp' onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
            
          </select>
                 </Stack>
                <input  type="number" value={info.cost} name='cost' onChange={handleChange} placeholder='amount' />
                <input type='submit' style={btn} value='Add'/>
                </Stack>
               
            </form>
        </Flex>
    )
}

export default NewTransaction
