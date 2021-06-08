import * as yup from 'yup';
import {useState} from "react";

import AddIcon from "@material-ui/icons/Add";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    makeStyles,
    TextField
} from "@material-ui/core";
import {useFormik} from "formik";


const useStyles = makeStyles(theme => ({
    create: {
        position: 'absolute',
        right: 0,
        margin: '20px 0'
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const userValidationSchema = yup.object({
    firstName: yup
        .string(`Enter first name`)
        .min(3, 'At least 3 characters')
        .max(30, 'Max 30 characters')
        .required('First name is required'),
    middleName: yup
        .string(`Enter middle name`)
        .min(3, 'At least 3 characters')
        .max(50, 'Max 50 characters')
        .required('Middle name is required'),
    lastName: yup
        .string(`Enter last name`)
        .min(3, 'At least 3 characters')
        .max(50, 'Max 50 characters'),
    login: yup
        .string(`Enter login`)
        .min(3, 'At least 3 characters')
        .max(60, 'Max 60 characters')
        .required('Login is required')
})



const CreateUser = ({createUser}) => {
    const styles = useStyles();

    const [createUserState, setCreateUserState] = useState(false);
    const handleOpenCreateUser = () => setCreateUserState(true);
    const handleCloseCreateUser = () => {
        formik.resetForm();
        setCreateUserState(false);
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            login: ''
        },
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            setDisabled(true);
            createUser({ fullNameValue: { firstName: values.firstName, middleName: values.middleName, lastName: values.lastName }, login: values.login });
            setDisabled(false);
            handleCloseCreateUser();
            formik.resetForm();
        }
    });

    let [disabled, setDisabled] = useState(false);

    return (
        <>
            <Fab color="secondary" className={styles.create} onClick={handleOpenCreateUser} >
                <AddIcon />
            </Fab>
            <Dialog open={createUserState} onClose={handleCloseCreateUser} fullWidth maxWidth={'xs'}>
                <DialogTitle>Creating new user</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent className={styles.dialog}>
                        <DialogContentText>Fill in the gaps</DialogContentText>
                        <TextField fullWidth id="login" name="login" label="Login" value={formik.values.login} onChange={formik.handleChange} error={formik.touched.login && Boolean(formik.errors.login)} helperText={formik.touched.login && formik.errors.login}/>
                        <TextField fullWidth id="firstName" name="firstName" label="First name" value={formik.values.firstName} onChange={formik.handleChange} error={formik.touched.firstName && Boolean(formik.errors.firstName)} helperText={formik.touched.firstName && formik.errors.firstName}/>
                        <TextField fullWidth id="middleName" name="middleName" label="Middle name" value={formik.values.middleName} onChange={formik.handleChange} error={formik.touched.middleName && Boolean(formik.errors.middleName)} helperText={formik.touched.middleName && formik.errors.middleName}/>
                        <TextField fullWidth id="lastName" name="lastName" label="Last name" value={formik.values.lastName} onChange={formik.handleChange} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseCreateUser} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}


export default CreateUser;
