import React from "react";
import { Button, Container, ButtonGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import IconButton from "@material-ui/core/IconButton";
import myStyles from "./styles";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";

const DataTables = () => {
    const columns = [
        {
            id: "name",
            label: "Name",
            minWidth: 170,
        },
        {
            id: "iso-code",
            label: "ISO Code",
            minWidth: 170,
        },
        {
            id: "Population",
            label: "Population",
            minWidth: 170,
        },
        {
            id: "size",
            label: "Size",
            minWidth: 170,
        },
        {
            id: "density",
            label: "Density",
            minWidth: 170,
        },
    ];
    return (
        <TableContainer component={Paper} style={{ backgroundColor: "#e1e1e1" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell>Fat</TableCell>
                        <TableCell>Protein</TableCell>
                        <TableCell>Carbs</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Fruits</TableCell>
                        <TableCell>1%</TableCell>
                        <TableCell>10%</TableCell>
                        <TableCell>200 grams</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const MaterialExample = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = e => {
        setChecked(e.target.checked);
    };

    const classes = myStyles();
    return (
        <>
            <Container maxWidth='sm' className={classes.container}>
                <AppBar color='secondary'>
                    <ToolBar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' justify='right'>
                            Material UI React
                        </Typography>
                    </ToolBar>
                </AppBar>
                <h4 className={classes.sectionName}>Horizontal Button Group with Icons</h4>
                <ButtonGroup color='secondary' className={classes.buttonGroups}>
                    <Button variant='contained' size='small' startIcon={<DeleteIcon />}>
                        Click Me.
                    </Button>
                    <Button variant='contained' size='large' endIcon={<SaveIcon />}>
                        Second Button
                    </Button>
                </ButtonGroup>
                <h4 className={classes.sectionName}>Button with only the icon</h4>
                <IconButton color='primary'>
                    <DeleteIcon />
                </IconButton>
                <IconButton color='secondary'>
                    <SaveIcon />
                </IconButton>
                <h4 className={classes.sectionName}>Vertical Button Group with icons and custom classes. </h4>
                <ButtonGroup color='secondary' orientation='vertical' className={classes.buttonGroups}>
                    <Button variant='contained' size='small' startIcon={<DeleteIcon />}>
                        Click Me.
                    </Button>
                    <Button variant='contained' size='large' endIcon={<SaveIcon />}>
                        Second Button
                    </Button>
                </ButtonGroup>
                <h4 className={classes.sectionName}>Checkboxes</h4>
                <CheckBox color='primary' />
                <CheckBox checked={checked} onChange={handleChange} />
                <FormGroup row>
                    <FormControlLabel
                        label='Heart '
                        control={<CheckBox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />}
                    />
                </FormGroup>
                <h4 className={classes.sectionName}>Date/Time Picker</h4>
                <form action='' className={classes.formDateTime}>
                    <TextField
                        label='Pick DateTime'
                        type='datetime-local'
                        className={classes.textfield}
                        variant='outlined'
                        color='secondary'
                        defaultValue='2021-06-02T19:58'
                    />
                </form>
                <h4 className={classes.sectionName}>Typography</h4>
                <Typography variant='h2'> Text with Typography.</Typography>
                <h4 className={classes.sectionName}>Grids and Papers</h4>
                <Grid container style={{ backgroundColor: "#333" }} spacing={2} justify='center'>
                    <Grid item>
                        <Paper style={{ height: 75, width: 55 }}></Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={{ height: 75, width: 55 }}></Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={{ height: 75, width: 55 }}></Paper>
                    </Grid>
                </Grid>
                <h4 className={classes.sectionName}>Tables</h4>
                <DataTables />
            </Container>
        </>
    );
};

export default MaterialExample;
