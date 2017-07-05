/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import BodyContainer from 'components/BodyContainer';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { screenName: null };
        this.onChangeScreen = this.onChangeScreen.bind(this);
    }

    onChangeScreen(newName) {
        this.setState({ screenName: newName });
    }

    render() {
        return (
          <MuiThemeProvider>
            <div>
              <HeaderComponent
                changeScreenName={this.onChangeScreen}
              />
              <BodyContainer screenName={this.state.screenName} />
            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainer;
