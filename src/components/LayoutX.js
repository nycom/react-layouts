// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import Receptor from './Receptor';

// const lay = [2,1,1];

// let getCols = (colsNum,layoutName,startingIndex) => {
//     let cols = [];
//     for (let i = 0; i < colsNum; i++) {
//         cols.push(<Grid  key={startingIndex+i} item xs={12/colsNum}>
//                     <Receptor layoutName={layoutName} recId={startingIndex+i}/>
//                 </Grid>)
//     }
//     return cols;
// }

// const LayoutX = (props) => {
//     return (
//         <Grid item className="layout-container">
//             {
//                 lay.map((item,i) => {
//                   return (
//                     <Grid key={i} container direction="row" spacing={24}>
//                     {getCols(item,props.layoutName,i*item)}
//                 </Grid>
//                   )  
//                 })
//             }
//             {/* <Grid container direction="row" spacing={24}>
//                 <Grid item xs={6}>
//                     <Receptor layoutName="layout" recId={0} />
//                 </Grid>

//                 <Grid item xs={6}>
//                     <Receptor layoutName="layout" recId={1}/>
//                 </Grid>
//             </Grid>
//             <Grid container direction="row" spacing={24}>
//                 <Grid item xs={6}>
//                     <Receptor layoutName="layout" recId={2}/>
//                 </Grid>

//                 <Grid item xs={6}>
//                     <Receptor layoutName="layout" recId={3}/>
//                 </Grid>
//             </Grid>
//             <Grid container direction="row" spacing={24}>
//                 <Grid item xs={12}>
//                     <Receptor layoutName="layout" recId={4}/>
//                 </Grid>
//             </Grid> */}
//         </Grid>
//     );
// }

// export default LayoutX;
