import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Layout0 from '../components/Layout0';
// import LayoutX from '../components/LayoutX';
import Layout1 from '../components/Layout1';
import Layout2 from '../components/Layout2';

// set of layouts number === layoutType (ex: 1 = Layout1)
const layouts = [0, 1, 2,0, 1, 2];

const chooseLayout = (layoutType, index) => {
    switch (layoutType) {
        case 0:
            return (<Layout0 id={index} layoutName={'layout_'+index}></Layout0>)
        case 1:
            return (<Layout1 id={index} layoutName={'layout_'+index}></Layout1>)
        case 2:
            return (<Layout2 id={index} layoutName={'layout_'+index}></Layout2>)
        default:
            return;
    }
}

const MainPage = () => {

    return (
        <Grid className="layouts-header" container spacing={24}>
            <h1>Layouts:</h1>
            <Grid container direction="row" spacing={24}>
                {layouts.map((layoutType, index) => {
                    
                    return (
                        <Grid key={index} item lg={4} md={6} sm={12}>
                            <Link to={"/" + index}>
                                {chooseLayout(layoutType, index)}
                            </Link>
                        </Grid>)
                })}
            </Grid>
        </Grid>
    );
}

export default MainPage;