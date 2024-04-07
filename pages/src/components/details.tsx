import React from 'react'
import { Checkbox, Button, Select, FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, useBreakpointValue, FormHelperText, FormErrorMessage } from '@chakra-ui/react'

const Details = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1 })
    return (
        <>
            <VStack
                w="full"
                h='full'
                p={10}
                spacing={10}
                alignItems='flex-start'
            >
                <VStack
                    spacing={3}
                    alignItems='flex-start'
                >
                    <Heading
                        size='2xl'
                    >
                        Your details
                    </Heading>
                    <Text>
                        If you already have an account, click here to log in.
                    </Text>
                </VStack>
                <form>
                    <SimpleGrid
                        columns={2}
                        columnGap={3}
                        rowGap={6}
                        w='full'
                    >
                        <GridItem
                            colSpan={colSpan}
                        >
                            <FormControl>
                                <FormLabel>
                                    First Name
                                </FormLabel>
                                <Input placeholder='John' />
                                <FormHelperText>
                                    At least 2 characters
                                </FormHelperText>
                                <FormErrorMessage>

                                </FormErrorMessage>
                            </FormControl>

                        </GridItem>
                        <GridItem
                            colSpan={colSpan}
                        >
                            <FormControl>
                                <FormLabel>
                                    Last Name
                                </FormLabel>
                                <Input placeholder='Doe' />
                                <FormHelperText>
                                    At least 3 characters
                                </FormHelperText>
                                <FormErrorMessage>

                                </FormErrorMessage>
                            </FormControl>

                        </GridItem>
                        <GridItem
                            colSpan={2}
                        >
                            <FormControl>
                                <FormLabel>
                                    Address
                                </FormLabel>
                                <Input placeholder='Blvd. Broken Dreams 21' />
                                <FormHelperText>
                                    At least 6 characters
                                </FormHelperText>
                                <FormErrorMessage>

                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem
                            colSpan={colSpan}
                        >
                            <FormControl>
                                <FormLabel>
                                    City
                                </FormLabel>
                                <Input placeholder='San Francisco' />
                                <FormHelperText>
                                    At least 4 characters
                                </FormHelperText>
                                <FormErrorMessage>

                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem
                            colSpan={colSpan}
                        >
                            <FormControl>
                                <FormLabel>
                                    Country
                                </FormLabel>
                                <Select>
                                    <option value='usa'>United State of America</option>
                                    <option value='uk'>United Kingdom</option>
                                    <option value='uae'>United Arab Emirates</option>
                                    <option value='nmk'>North Macedonia</option>
                                    <option value='de'>Germany</option>
                                </Select>
                            </FormControl>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                        >
                            <Checkbox
                                defaultChecked
                            >
                                Ship to billing addres.
                            </Checkbox>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                        >
                            <Button
                                variant='primary'
                                size='lg'
                                w='full'
                            >
                                Place order
                            </Button>
                        </GridItem>
                    </SimpleGrid>
                </form>
            </VStack>
        </>
    )
}

export default Details