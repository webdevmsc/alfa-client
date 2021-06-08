import {AppBar, Button, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";


const baseURL = 'https://localhost:5001/';
const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    getExcel: {
        backgroundColor: "#388e3c",
        color: "white",
        '&:hover': {
            backgroundColor: "#388e3c"
        }
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}))

const Header = ({}) => {
    const styles = useStyles();
    return (
        <>
            <AppBar position={"fixed"}>
                <Container fixed>
                    <Toolbar>
                        <Typography variant={"h6"} className={styles.title}>Users</Typography>
                        <a className={styles.link} href={`${baseURL}users/getexcel`}>
                            <Button variant="contained" className={styles.getExcel}>
                                Get Excel
                            </Button>
                        </a>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;
