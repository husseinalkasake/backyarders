import React from "react";
import { Input } from "native-base";

class NumberInput extends React.Component {
	numberInput(text) {
		return text.replace(/\D/g, "");
	}

	render() {
		const { value, onChangeText, disabled } = this.props;
		return (
			<Input
				keyboardType="number-pad"
				disabled={disabled}
				onChangeText={(text) =>
					onChangeText && onChangeText(this.numberInput(text))
				}
				value={value}
			/>
		);
	}
}

export default NumberInput;
