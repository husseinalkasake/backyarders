import React from "react";
import { AppLoading } from "expo";
import { Container } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import getStore from "./redux/store";

import NavContainer from "./navigation/NavContainer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    // persisted state stuff
    const { store, persistor } = getStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container>
            <NavContainer />
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}
