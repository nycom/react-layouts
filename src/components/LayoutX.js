import React from 'react';
import Grid from '@material-ui/core/Grid';
import Receptor from './Receptor';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    // layout structure in redux for convinience (structure & containers in one place) 
    return {
        structure: state[ownProps.layoutName] ? state[ownProps.layoutName].structure : [],
    };
};

let uniqueIdProvider = 0;

const getCols = (colsNum, layoutName) => {
    let cols = [];
    for (let i = 0; i < colsNum; i++) {
        cols.push(<Grid key={uniqueIdProvider} item xs={12 / colsNum}>
            <Receptor layoutName={layoutName} recId={uniqueIdProvider} />
        </Grid>);
        uniqueIdProvider++;
    }
    return cols;
}

const LayoutX = (props) => {
    uniqueIdProvider = 0;
    return (

        props.structure.length > 0 ?
            <Grid item className="layout-container">

                {
                    props.structure.map((item, i) => {
                        return (
                            <Grid key={i} container direction="row" spacing={24}>
                                {getCols(item, props.layoutName)}
                            </Grid>
                        )
                    })
                }

            </Grid>
            : <h1>Layout Not Found!!!</h1>);
}

export default connect(mapStateToProps)(LayoutX);
