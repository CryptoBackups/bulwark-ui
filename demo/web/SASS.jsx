import React from 'react'

import Source from '../../web/Source'

export default class SASS extends React.Component {
  render () {
    return (
      <div>
        <h3>SASS</h3>
        <p>To change the theme you can change the global variables located in the `./sass/_variables.scss` file.</p>
        <Source type='css' code={`
/**
 * Core Variables
 */

/* Border */
$border-radius: 5px;

/* Colors */
$black: #252525;
$blue: #294dea;
$gray: #959595;
$green: #9eff90;
$light-gray: #f7f7f7;
$purple: #bc92ff;
$red: #e34a4a;
$white: #ffffff;
$yellow: #fffb79;

/* Color Codes */
$disabled: #cccccc;
$primary: $blue;
$secondary: #7c7c7c;
$tertiary: #e9edfc;

$alert: $red;
$info: $blue;
$success: $green;

/* Card */
$card-padding: 32px;

/* Drawer */
$drawer-width: 290px;

/* Font */
$font-primary: 'Roboto', sans-serif;
$font-secondary: 'Poppins', sans-serif;

/* Grid */
$grid-gutter: 10px;

/* Modal */
$modal-padding: 32px;

/* Panel */
$panel-padding: 32px;
        `} />
      </div>
    )
  }
}
