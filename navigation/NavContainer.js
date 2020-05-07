import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Questionnaire from "./Questionnaire";
import MainNav from "./MainNav";
import { connect } from "react-redux";

class NavContainer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {this.props.isFirstTimeToUseApp ? <Questionnaire /> : <MainNav />}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  isFirstTimeToUseApp: state.isFirstTimeToUseApp,
});

export default connect(mapStateToProps)(NavContainer);
