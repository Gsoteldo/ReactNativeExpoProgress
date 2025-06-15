import { Text, View, StyleSheet, TextInput, Button, FlatList, Pressable } from "react-native";
import FloatingButton from "../components/buttonComponents"; // Componente de botón reutilizable con estilos personalizados
import { TasksCard, DoneCard } from "../components/cardComponents"; // Componentes para representar tareas pendientes y completadas
import {useState} from "react";

type Todo = {
  // Definición del tipo de dato para una tarea
  id: number;           // Identificador único para cada tarea (basado en timestamp)
  text: string;         // Descripción de la tarea
  completed: boolean;   // Estado de la tarea: completada o pendiente
}
export default function Index() {

	// Estado para manejar el texto ingresado en el campo de nueva tarea
	const [tasks, settasks] = useState('');
  
	// Estado para almacenar la lista de tareas (arreglo de objetos Todo)
	const [todos, setTodos] = useState<Todo[]>([]);

	return (
    <View style={styles.container}>
		{/* Sección para agregar una nueva tarea */}	
		<View style={styles.taskForm}>
		<TextInput 
			style={styles.input}
			placeholder="Enter a task"           // Texto placeholder para guiar al usuario
        	onChangeText={(text) => settasks(text)} // Actualiza el estado conforme el usuario escribe
        	value={tasks}                        // Controla el valor del TextInput
		/>
		<FloatingButton title="Add Task" onPress={() => {

			// Valida que el input no esté vacío o contenga solo espacios
			if (tasks.trim() !== '') {
				const newTask: Todo = {
					id: Date.now(),  // Genera un ID único basado en la marca de tiempo actual
                	text: tasks,     // Texto capturado del input
                	completed: false // La tarea se inicia como pendiente
				}

				// Actualiza el estado de la lista agregando la nueva tarea
            	setTodos([...todos, newTask]);
            	// Limpia el campo de texto para facilitar la entrada de nuevas tareas
            	settasks('');
			}
		}}
		style={styles.Addbutton}
		/>
		</View>

		<Text style={{marginBottom: 10}}>Lista de tareas: </Text>

		{/* Renderizado de la lista de tareas utilizando FlatList para eficiencia */}
		<FlatList
			data={todos}										// Fuente de datos para la lista
        	keyExtractor={(item, index) => index.toString()}	// Clave única para optimización de renderizado
			renderItem={({ item }) => (
			item.completed ? (

				// Renderiza la tarjeta de tarea completada con opción de eliminar
				<DoneCard item={item} onDelete={(id) => setTodos(todos.filter(todo => todo.id !== id))} />
			) : (
				
				// Renderiza la tarjeta de tarea pendiente con opciones de completar y eliminar
				<TasksCard item={item} onDelete={(id) => setTodos(todos.filter(todo => todo.id !== id))} onComplete={(id) => {
					const updatedTodos = todos.map(todo =>
						todo.id === id ? { ...todo, completed: true } : todo
					);
					setTodos(updatedTodos);
				}} />
			)
			)}
		/>
    </View>
  );
}

const styles = StyleSheet.create({

	container: {
		margin: 10,
		marginTop: 20
	},

	taskForm: {
		flexDirection: 'row',
		gap: 15,
	},

	input: {
		height: 50,
		width: '65%',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},

	Addbutton: {
		backgroundColor: "#007AFF",
		padding: 10,
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
