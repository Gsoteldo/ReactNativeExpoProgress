import { Pressable, Text } from "react-native";


/**
 * Componente reutilizable de botón flotante personalizado para la aplicación FirstToDoList.
 * 
 * Este componente muestra un botón táctil con texto, configurable mediante props para
 * título, acción al presionar y estilos personalizados.
 */

interface FloatingButtonProps {
	title: string;			//Texto que se mostrará dentro del botón
	onPress: () => void;	//Función que se ejecutará al presionar el botón
	style?: object;			//Estilos opcionales para personalizar el botón
}

const FloatingButton = ({ title, onPress, style }: FloatingButtonProps) => (
	<Pressable style={style} onPress={onPress}>
		<Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
	</Pressable>
);

export default FloatingButton;