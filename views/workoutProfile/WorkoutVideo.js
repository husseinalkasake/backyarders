/*
This compoenent accepts a video source and renders the workout video.
*/

import React from "react";
import { TouchableHighlight, View } from "react-native";
import { Video } from "expo-av";
import { Asset } from "expo-asset";

class WorkoutVideo extends React.Component {
  state = {
    isReady: false,
    isPlaying: true,
  };

  loadAssetsAsync = async () => {
    await Asset.loadAsync([
      require("../../assets/workoutEdu/mountain_climbers.mov"),
    ]);
  };

  setupAsync = async () => {
    await Promise.all([this.loadAssetsAsync()]);
    this.setState({ isReady: true });
  };

  componentDidMount() {
    this.setupAsync();
  }

  resetAsync = async () => {
    await this.video.stopAsync();
    await this.video.setPositionAsync(0);
  };

  playPauseAsync = async () => {
    if (this.state.isPlaying) {
      await this.video.pauseAsync();
      this.setState({ isPlaying: false });
    } else {
      await this.video.playAsync();
      this.setState({ isPlaying: true });
    }
  };

  render() {
    return (
      <View
        style={{
          margin: 10,
        }}
      >
        <TouchableHighlight
          onPress={() => {
            this.playPauseAsync();
          }}
        >
          <View>
            <Video
              source={this.props.source}
              style={{
                width: this.props.width || 360 / 1.2, // we might wanna divide it by a factor
                height: this.props.height || 640 / 1.2, // we might wanna divide it by a factor
              }}
              resizeMode="cover"
              shouldPlay={true}
              ref={(c) => {
                this.video = c;
              }}
              onPlaybackStatusUpdate={(status) => {
                if (status.didJustFinish) {
                  this.resetAsync();
                }
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default WorkoutVideo;
