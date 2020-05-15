/*
This compoenent accepts a video source and renders the workout video.
*/

import React from "react";
import { TouchableHighlight, View, Dimensions } from "react-native";
import { Video } from "expo-av";

class WorkoutVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
			isPlaying: true,
		};
	}

	// loadAssetsAsync = async () => {
	//   await Asset.loadAsync([
	//     require("../../assets/workoutEdu/mountain_climbers.mov"),
	//   ]);
	// };

	componentDidMount() {
		this.setupAsync();
	}

	setupAsync = async () => {
		// TODO load the video first
		// TODO dsiplay "Lading" while video is still loading
		this.setState({ isReady: true });
	};

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
			<View>
				<TouchableHighlight
					onPress={() => {
						this.playPauseAsync();
					}}>
					<View style={{ width: Dimensions.get("window").width }}>
						<Video
							source={this.props.source}
							style={{
								width:
									this.props.width ||
									Dimensions.get("window").width, // 360 / 1.2, // we might wanna divide it by a factor
								height:
									this.props.height ||
									Dimensions.get("window").width * 2, // 640 / 1.2, // we might wanna divide it by a factor
							}}
							resizeMode="cover"
							shouldPlay
							ref={(c) => {
								this.video = c;
							}}
							// isLooping // decide between this and the resetAsync below
							onPlaybackStatusUpdate={(status) => {
								if (status.didJustFinish) {
									this.resetAsync();
								}
							}}
							isMuted
						/>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

export default WorkoutVideo;
