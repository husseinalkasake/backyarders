import React from "react";
import { Input } from "native-base";

function NumberInput({ value, onChangeText, disabled }) {
	return (
		<Input
			keyboardType="number-pad"
			disabled={disabled}
			onChangeText={(text) =>
				onChangeText &&
				onChangeText(text.replace(/\D/g, ""))
			}
			value={value}
		/>
	);
}

export default NumberInput;
