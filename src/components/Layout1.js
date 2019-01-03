import React from 'react';
import Grid from '@material-ui/core/Grid';
import Receptor from './Receptor';

const Layout1 = (props) => {
    return (
        <Grid item className="layout-container">
            <Grid container direction="row" spacing={24}>
                <Grid item xs={12}>
                    <Receptor layoutName={props.layoutName} recId={0} />
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={24}>
                <Grid item xs={12}>
                    <Receptor layoutName={props.layoutName} recId={1} />
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={24}>
                <Grid item xs={6}>
                    <Receptor layoutName={props.layoutName} recId={2} />
                </Grid>
                <Grid item xs={6}>
                    <Receptor layoutName={props.layoutName} recId={3} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Layout1;
