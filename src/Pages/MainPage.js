import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import LayoutX from '../components/LayoutX';

const layoutsAmount = 6;

const layoutsBuilder = () => {
    let layouts = []
    for (let i = 0; i < layoutsAmount; i++) {
        layouts.push(
                <Grid key={i} item lg={4} md={6} sm={12} xs={12}>
                    <Link to={"/" + i}>
                        <LayoutX id={i} layoutName={'layout_'+i}></LayoutX>
                    </Link>
                </Grid>)
        }
        return layouts;
}

const MainPage = () => {

    return (
        <Grid className="layouts-header" container spacing={24}>
            <h1>Layouts:</h1>
            <Grid container direction="row" spacing={24}>
                {layoutsBuilder()}
            </Grid>
        </Grid>
    );
}

export default MainPage;