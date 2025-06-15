import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


/**
 * Componente principal de la app.
 * 
 * Este contador muestra un número en pantalla y permite:
 * - Incrementar el contador
 * - Disminuir el contador
 * - Reiniciar el contador a cero
 * 
 * Ejemplo básico de uso de estado con useState y componentes personalizados en React Native con Expo.
 */

export default function Index() {
	const [count, setCount] = useState(0);
	return (
    <View
      style={styles.container}
    >
    <Text style={styles.text}>El contador está en: {count}</Text>
	<View style={styles.grid}>
	<FloatingButton title="-" onPress={() => setCount(count - 1)} style={styles.buttonIncDec}/>
	<FloatingButton title="Reiniciar Contador" onPress={() => setCount(0)} style={styles.button}/>
	<FloatingButton title="+" onPress={() => setCount(count + 1)} style={styles.buttonIncDec}/>
	</View>

    </View>
  );
}

/**
 * Botón personalizado reutilizable.
 *
 * Props:
 * - title: Texto que se muestra dentro del botón
 * - onPress: Función que se ejecuta al presionar
 * - style: Estilo opcional para personalización externa
 *
 * Este componente se usa para sumar, restar y reiniciar el contador.
 */

interface FloatingButtonProps {
	title: string;
	onPress: () => void;
	style?: object;
}

const FloatingButton = ({ title, onPress, style }: FloatingButtonProps) => (
	<Pressable style={style} onPress={onPress}>
		<Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
	</Pressable>

);

const styles = StyleSheet.create({
	container: {
		flex: 1,
        justifyContent: "center",
        alignItems: "center",
	},
	text: {
		fontSize: 20
	},
	grid: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#f0f0f0",
		borderRadius: 10,
		marginTop: 20,
		marginBottom: 0,
		position: "absolute",
		bottom: 20,
		right: 0,
		columnGap: 20,
	},
	button: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 100,
		flexDirection: 'column',
	},
	buttonIncDec: {
		width: 50,
		height: 50,
		alignItems: "center",
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 100,
		flexDirection: 'column',
	},
})
