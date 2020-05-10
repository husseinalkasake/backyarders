import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import Questionnaire from "./Questionnaire";
import MainNav from "./MainNav";

function NavContainer({ isFirstTimeToUseApp }) {
	return (
		<NavigationContainer>
			{isFirstTimeToUseApp ? <Questionnaire /> : <MainNav />}
		</NavigationContainer>
	);
}

const mapStateToProps = (state) => ({
	isFirstTimeToUseApp: state.isFirstTimeToUseApp,
});

export default connect(mapStateToProps)(NavContainer);
