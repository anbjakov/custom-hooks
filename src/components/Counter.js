import {memo} from 'react'
import useCounter from "../hooks/useCounter";
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
const Counter = ()=>{
    const {counterValue, increase, decrease, setCounter} = useCounter()
    const handleCounterChange = (e)=>{
        if (e.target.value==="") {
            setCounter(1);
        } else {
            setCounter(+e.target.value);
        }
    }
    return (
        <Container centerContent marginTop="20">
            <HStack spacing='24px' >
                <Box w='40px' h='40px'>
                    <IconButton
                        onClick={decrease}
                        colorScheme='blue'
                        aria-label='Search database'
                        disabled = {counterValue===1}
                        icon={<MinusIcon />} />
                </Box>
                <Box w='100px' h='40px'>
                    <Input
                        onChange={handleCounterChange}
                        value={counterValue}
                        type="number"
                    />

                </Box>
                <Box w='40px' h='40px'>
                <IconButton
                    onClick={increase}
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<AddIcon />} />
                </Box>
            </HStack>

        </Container>
        )
}

export default memo(Counter);