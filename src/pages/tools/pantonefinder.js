import React from 'react';
import { Grid, Divider, Icon } from 'semantic-ui-react';
import Layout from '../../components/Layout/';
import hexToPantone from '../../data/hexToPantone';
import invert from 'invert-color';
import _ from 'lodash';
import Helmet from 'react-helmet';

const keywords = "pantone, hex, pantone converter, pantone to hex, ADP, Advanced Digital Printing NYC, NYC printing";

class PantoneFinderPage extends React.Component {
  /**
  * Function Handles Event from Color Picker
  * @param {Object} { color.hex }
  */
  constructor() {
    super();
    this.state = { hex: '#E5053A', name: '192'};
    this.showPantone = this.showPantone.bind(this);
  }

  showPantone(e) {
    const { name, hex} = e.target.dataset;
    this.setState({ name, hex});
  }

  render() {
    const { name, hex } = this.state;
    const pantoneChunks = _.chunk(hexToPantone, 8);
    let rows = [];
    _.forEach(pantoneChunks, (chunk, index) => {
      rows.push(
        (
          <Grid.Row columns={chunk.length} centered="true">
            {chunk.map( (pantone, index) => {
              return (
                <Grid.Column verticalAlign={"middle"} key={pantone.name}>
                  <div onClick={this.showPantone} data-name={pantone.name} data-hex={pantone.hex} style={{background: pantone.hex, height: '100px'}}></div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        )
      )
    });
    return (
      <>
        <Helmet
          title={"ADP: Pantone Finder"}
          meta={[
            {
              name: 'description',
              content: 'Pantone Finder. Use this tool to find your desired pantone color\
               Convert your pantone color to hex code.' },
            {
              name: 'keywords',
              content: keywords },
          ]}
        />
        <Layout>
          <h1><Icon name="tint" />Pantone Finder</h1>

          <p>Find the right Pantone (PMS) color you are looking for.
          Click or tap on one of the colors below and the Pantone
          finder will display the Pantone name and hex value for that color.
          </p>

          <p><strong>Note: </strong>
           The color of the final product may vary due to the difference in
          computer monitors, the product material and the printing process.
          </p>
          <Grid>
            <Grid.Row centered="true">
              <div
                style={{
                  height: '200px',
                  width: '50%',
                  background: hex,
                  color: invert(hex),
                  padding: '50px 20px',
                }}>
                <h3>{`Pantone ${name}`}</h3>
                <h3>{`Hex ${hex}`}</h3>
              </div>
            </Grid.Row>
          </Grid>

          <Divider />
          <Grid
            centered="true"
            stackable
            divided="vertically"
            style={{overflowY: 'scroll', height: '500px'}}>
            {rows.map( row => row)}
          </Grid>
        </Layout>
      </>
    );
  }
}

export default PantoneFinderPage;
