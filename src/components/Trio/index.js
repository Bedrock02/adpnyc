import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const commonStyle = {
  background: "#000000c9",
  color: "#FFFFFF",
  marginLeft: "5px",
  marginRight: "5px",
  borderRadius: "5%"
};

class Trio extends React.Component {
  render() {
    return (
      <Grid columns={3} className="trio" stackable={true}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div className='trio-desc' style={commonStyle}>
              <h3>Eco-Friendly</h3>
              <Icon name="recycle" size="large" />
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className='trio-desc' style={commonStyle}>
              <h3>Quick Service</h3>
              <Icon name="shipping fast" size="large" />
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className='trio-desc' style={commonStyle}>
              <h3>High Quality</h3>
              <Icon name="gem outline" size="large" />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Trio;
