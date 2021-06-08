import * as React from 'react';
import {
    Button,
    Container, Fab,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow, Tooltip
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {useState} from "react";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const useStyles = makeStyles(theme => ({
    users: {
        marginTop: theme.spacing(15),
        position: 'relative'
    },
    delete: {
        backgroundColor: "#ef5350",
        '&:hover': {
            backgroundColor: "#e57373"
        },
        color: "white",
        margin: '0 5px',
        height: '30px'
    },
    buttons: {
        width: '160px'
    },
    createUser: {
        position: 'relative'
    }
}))

const Users = ({users, createUser, deleteUser, updateUser, ...props}) => {
    const styles = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    let sliced;
    if (users && rowsPerPage > 0) {
        sliced = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    } else {
        sliced = users;
    }

    const handleDelete = (userId) => () => {
        deleteUser(userId);
    };

    return (
        <Container>
            <Paper className={styles.users}>
                <TableContainer>
                    <Table className={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Login</TableCell>
                                <TableCell>First name</TableCell>
                                <TableCell>Middle name</TableCell>
                                <TableCell>Last name</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Updated At</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sliced.map(x =>
                                <TableRow key={x.id}>
                                    <TableCell>{x.login}</TableCell>
                                    <TableCell>{x.fullName.firstName}</TableCell>
                                    <TableCell>{x.fullName.middleName}</TableCell>
                                    <TableCell>{x.fullName.lastName}</TableCell>
                                    <TableCell>{new Date(Date.parse(x.createdAt.value)).toLocaleString()}</TableCell>
                                    <TableCell>{new Date(Date.parse(x.updatedAt.value)).toLocaleString()}</TableCell>
                                    <TableCell className={styles.buttons} align={"right"}>
                                        <UpdateUser updatingUser={x} updateUser={updateUser}></UpdateUser>
                                        <Button onClick={ handleDelete(x.id) } className={styles.delete}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination rowsPerPageOptions={[8, 16, 25]} component={Paper} count={users.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage}/>
            </Paper>
            <div className={styles.createUser} >
                <CreateUser createUser={createUser}/>
            </div>
        </Container>
    );
}

export default Users;
