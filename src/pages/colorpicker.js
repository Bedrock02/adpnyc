import React from 'react';
import { SwatchesPicker, ChromePicker } from 'react-color';
import { Grid, Divider } from 'semantic-ui-react';
import Layout from '../components/Layout/';
import pantone from 'nearest-pantone';
import invert from 'invert-color';


class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '',
      hex: '',
      pantone: '',
      name: '',
    }
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }

  componentDidMount() {
    this.handleChangeComplete( {hex: '#711010'} );
  }
  /**
  * Function Handles Event from Color Picker
  * @param {Object} { color.hex }
  */
  handleChangeComplete( color ) {
    const pantoneProperties = pantone.getClosestColor(color.hex);
    console.log(pantoneProperties);
    this.setState( {
      color: color.hex,
      ...pantoneProperties,
    } );
  }

  render() {
    const { color, hex, name, pantone } = this.state;
    const invertedColor = color ? invert(color) : '#FFFFFF';

    return (
      <Layout>
        <h1>Pantone Finder</h1>

        <p>Find the right Pantone Color you are looking for.
        Use the color picker below or enter a color value and the Pantone
        finder will render the right Pantone for your needs.
        </p>

        <p><strong>Note: </strong>
         The color of the final product may vary due to the difference in
        computer monitors, the product material and the printing process.
        </p>

        <Divider />
        <Grid stackable centered="true">
          <Grid.Row
            columns={2}
            centered="true"
            verticalAlign={"middle"}
            >
            <Grid.Column textAlign={"center"}>
              <ChromePicker
                color={ color }
                onChangeComplete={ this.handleChangeComplete }
              />
            </Grid.Column>

            <Grid.Column textAlign={"center"}>
              <div style={
                {
                  background: color,
                  width: '400px',
                  height: '250px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  color: invertedColor,
                  padding: '20px 20px',
                }
              }>
                <h1>{name}</h1>
                <h3>Hex: {hex}</h3>
                <h3>Reference #: {pantone}</h3>
              </div>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ColorPicker;
