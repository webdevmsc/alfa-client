import * as yup from 'yup';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
    TextField
} from "@material-ui/core";
import {useState} from "react";
import {useFormik} from "formik";
import * as React from "react";

const useStyles = makeStyles(theme => ({
    dialog: {
        display: 'flex',
        flexDirection: 'column'
    },
    secondaryIcon: {
        marginRight: theme.spacing(0.5),
        transition: 'all 0.3s ease-out',
        '&:hover': {
            cursor: 'pointer',
            color: 'purple'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    edit: {
        backgroundColor: "#5c6bc0",
        color: "white",
        '&:hover': {
            backgroundColor: "#7986cb"
        },
        margin: '5px 5px',
        height: '30px'
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
        .max(30, 'Max 30 characters')
        .required('Login is required')
})

const UpdateUser = ({updateUser, updatingUser}) => {
    const styles = useStyles();

    let [disabled, setDisabled] = useState(false);

    const formik = useFormik({
        initialValues: {
            id: updatingUser.id,
            firstName: updatingUser.fullName.firstName,
            middleName: updatingUser.fullName.middleName,
            lastName: updatingUser.fullName.lastName,
            login: updatingUser.login
        },
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            setDisabled(true);
            updateUser({ id: values.id, fullName: { firstName: values.firstName, middleName: values.middleName, lastName: values.lastName }, login: values.login });
            setDisabled(false);
            handleCloseUpdateUser();
        }
    });

    const [updateUserState, setUpdateUserState] = useState(false);
    const handleOpenUpdateUser = () => setUpdateUserState(true);
    const handleCloseUpdateUser = () => {
        formik.resetForm();
        setUpdateUserState(false);
    };

    return (
        <>
            <Button className={styles.edit} onClick={handleOpenUpdateUser}>Edit</Button>
            <Dialog fullWidth maxWidth={'xs'} open={updateUserState} onClose={handleCloseUpdateUser}>
                <DialogTitle>Updating user</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent className={styles.dialog}>
                        <DialogContentText>Fill in the gaps</DialogContentText>
                        <TextField fullWidth id="login" name="login" label="Login" value={formik.values.login} onChange={formik.handleChange} error={formik.touched.login && Boolean(formik.errors.login)} helperText={formik.touched.login && formik.errors.login}/>
                        <TextField fullWidth id="firstName" name="firstName" label="First name" value={formik.values.firstName} onChange={formik.handleChange} error={formik.touched.firstName && Boolean(formik.errors.firstName)} helperText={formik.touched.firstName && formik.errors.firstName}/>
                        <TextField fullWidth id="middleName" name="middleName" label="Middle name" value={formik.values.middleName} onChange={formik.handleChange} error={formik.touched.middleName && Boolean(formik.errors.middleName)} helperText={formik.touched.middleName && formik.errors.middleName}/>
                        <TextField fullWidth id="lastName" name="lastName" label="Last name" value={formik.values.lastName} onChange={formik.handleChange} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseUpdateUser} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Edit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default UpdateUser;

