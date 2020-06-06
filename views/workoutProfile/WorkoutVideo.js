/*
This compoenent accepts a video source and renders the workout video.
*/

import React from "react";
import { TouchableHighlight, View, Dimensions, StyleSheet } from "react-native";
import { Video } from "expo-av";

const styles = StyleSheet.create({
	loading: {
		fontStyle: "italic",
	},
	fullWidth: {
		width: "100%",
	},
});

class WorkoutVideo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false,
			isPlaying: true,
		};
	}

	// loads the video to be played
	loadVideoAsync = async () => {
		await this.video.loadAsync(this.props.source);
	};

	// load the video when component mounts
	componentDidMount() {
		this.setupAsync();
	}

	// let component know that video is ready once it loads
	setupAsync = async () => {
		await Promise.all([this.loadVideoAsync()]);
		this.setState({ isReady: true });
	};

	// freezes the video at the first frame
	resetAsync = async () => {
		await this.video.stopAsync();
		await this.video.setPositionAsync(0);
	};

	// play/pause the video if it is paused/playing
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
		if (!this.state.isReady) {
			// while the video loads
			return <Text style={styles.loading}>Loading ...</Text>;
		}
		const playMode = {};

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
								width: this.props.width || "100%", // Dimensions.get("window").width, // 360 / 1.2, // we might wanna divide it by a factor
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
							isMuted // do not play the sound of the videos
						/>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

export default WorkoutVideo;
