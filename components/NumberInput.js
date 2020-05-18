import React from "react";
import { Input } from "native-base";

class NumberInput extends React.Component {
	numberInput(text) {
		return text.replace(/\D/g, "");
	}

	render() {
		const { value, onChangeText } = this.props;
		return (
			<Input
				keyboardType="number-pad"
				onChangeText={(text) =>
					onChangeText && onChangeText(this.numberInput(text))
				}
				value={value}
			/>
		);
	}
}

export default NumberInput;
