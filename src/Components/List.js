import React from 'react'
import { useDispatch } from 'react-redux'
import { Table, Container, Header, Icon, Menu, Button } from 'semantic-ui-react'
import lists from '../Redux/jsonStore/lists.json'

const List = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT_USER"
        })
    }

    return (
        <Container className="table-container">
            <Menu size='tiny'>
                <Menu.Item>
                    <img src='https://www.appinessworld.com/images/appiness-logo-small.png' alt="brand-smile-logo" />
                </Menu.Item>
                <Menu.Item
                    name='home'
                    active
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button
                            color={"red"}
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content className="heading">Employees</Header.Content>
            </Header>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Phone No.</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {lists.map((list, index) => {
                        return (
                            <Table.Row key={`list-${index}`}>
                                <Table.Cell>{list.id}</Table.Cell>
                                <Table.Cell>{list.name}</Table.Cell>
                                <Table.Cell>{list.age}</Table.Cell>
                                <Table.Cell>{list.gender}</Table.Cell>
                                <Table.Cell>{list.email}</Table.Cell>
                                <Table.Cell>{list.phoneNo}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </Container>
    )
}

export default List