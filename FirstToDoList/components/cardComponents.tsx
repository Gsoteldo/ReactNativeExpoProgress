import { View, Text, StyleSheet } from 'react-native';
import FloatingButton from './buttonComponents';

type Todo = {
	id: number;
	text: string;
	completed: boolean;
}

/**
 * Tarjeta para mostrar tareas pendientes.
 * Permite marcar como completada o eliminar.
 */
const TasksCard = ({ item, onDelete, onComplete }: {item: Todo, onDelete: (id: number) => void, onComplete: (id: number) => void}) => (
	<View style={styles.taskForm}>
		<FloatingButton title="Done" onPress={() => onComplete(item.id)} style={styles.Addbutton} />
		<Text style={styles.tasks} >{item.text} </Text>
		<FloatingButton title="Eliminar" onPress={() => onDelete(item.id)} style={styles.deleteButton} />
	</View>
);

/**
 * Tarjeta para tareas completadas.
 * Solo permite eliminar.
 */
const DoneCard = ({ item, onDelete }: {item: Todo, onDelete: (id: number) => void}) => (
	<View style={styles.taskForm}>
		<Text style={styles.doneTasks} >{item.text} </Text>
		<FloatingButton title="Eliminar" onPress={() => onDelete(item.id)} style={styles.deleteButton} />
	</View>
);

export { TasksCard, DoneCard };

const styles = StyleSheet.create({
	taskForm: {
		flexDirection: 'row',
		gap: 15,
	},
	tasks: {
		padding: 10,
		marginVertical: 5,
		alignItems: 'center',
		borderColor: 'blue',
		borderRadius: 10,
		height: 50,
		width: '45%',
		backgroundColor: '#fff',
	},
	doneTasks: {
		padding: 10,
		marginVertical: 5,
		alignItems: 'center',
		borderColor: 'blue',
		borderRadius: 10,
		height: 50,
		width: '45%',
		backgroundColor: 'green',
		color: 'white',
	},
	Addbutton: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},

	deleteButton: {
		backgroundColor: "red",
		padding: 10,
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});