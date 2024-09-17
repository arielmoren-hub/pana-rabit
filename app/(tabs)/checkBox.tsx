import LineSeparator from '@/components/SpaceLine';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function AppScreen() {
    const colores = ['red', 'green', 'black', 'white', 'blackRed', 'hawaiana', 'love'];

    // Estado para almacenar si un color está seleccionado o no
    const [selectedColors, setSelectedColors] = useState<{ [key: string]: boolean }>({});

    // Estado para controlar la visibilidad de la lista de checkboxes
    const [isVisible, setIsVisible] = useState(false);

    // Función para alternar la selección de un color
    const toggleColor = (color: string) => {
        setSelectedColors((prevState) => ({
            ...prevState,
            [color]: !prevState[color],
        }));
    };

    // Función para alternar la visibilidad de la lista
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View className='flex-1 w-full h-5/6 pt-10 bg-slate-600'>
            <ScrollView className='flex-1  p-4 '>
                <View className='mb-4'>
                    {/* Botón para mostrar/ocultar la lista */}
                    <TouchableOpacity onPress={toggleVisibility}>
                        <Text className='text-white text-lg'>
                            {isVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Lista de checkboxes visible o no según el estado */}
                {isVisible && (
                    <View className='bg-slate-700 p-4 rounded-lg shadow-lg mb-4'>
                        {colores.map((color) => (
                            <View key={color} className='flex-row items-center mb-2'>
                                <Checkbox
                                    value={!!selectedColors[color]} // Convertimos a booleano por si es undefined
                                    onValueChange={() => toggleColor(color)} // Alternar selección del color
                                    color={selectedColors[color] ? '#4630EB' : undefined} // Cambia de color si está seleccionado
                                    className='mr-2'
                                />
                                <Text className='text-white text-lg'>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Contenido debajo, el cual será visible cuando la lista esté activa */}
                <View>
                    <Text className='text-white text-lg mb-2'>Colores seleccionados:</Text>
                    {Object.keys(selectedColors)
                        .filter((color) => selectedColors[color])
                        .map((color) => (
                            <Text key={color} className='text-white text-lg'>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </Text>
                        ))}
                </View>
                <View className='mb-4'>
                    {/* Botón para mostrar/ocultar la lista */}
                    <TouchableOpacity onPress={toggleVisibility}>
                        <Text className='text-white text-lg'>
                            {isVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Lista de checkboxes visible o no según el estado */}
                {isVisible && (
                    <View className='bg-slate-700 p-4 rounded-lg shadow-lg mb-4'>
                        {colores.map((color) => (
                            <View key={color} className='flex-row items-center mb-2'>
                                <Checkbox
                                    value={!!selectedColors[color]} // Convertimos a booleano por si es undefined
                                    onValueChange={() => toggleColor(color)} // Alternar selección del color
                                    color={selectedColors[color] ? '#4630EB' : undefined} // Cambia de color si está seleccionado
                                    className='mr-2'
                                />
                                <Text className='text-white text-lg'>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Contenido debajo, el cual será visible cuando la lista esté activa */}
                <View>
                    <Text className='text-white text-lg mb-2'>Colores seleccionados:</Text>
                    {Object.keys(selectedColors)
                        .filter((color) => selectedColors[color])
                        .map((color) => (
                            <Text key={color} className='text-white text-lg'>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </Text>
                        ))}
                </View>
                <View className='mb-4'>
                    {/* Botón para mostrar/ocultar la lista */}
                    <TouchableOpacity onPress={toggleVisibility}>
                        <Text className='text-white text-lg'>
                            {isVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Lista de checkboxes visible o no según el estado */}
                {isVisible && (
                    <View className='bg-slate-700 p-4 rounded-lg shadow-lg mb-4'>
                        {colores.map((color) => (
                            <View key={color} className='flex-row items-center mb-2'>
                                <Checkbox
                                    value={!!selectedColors[color]} // Convertimos a booleano por si es undefined
                                    onValueChange={() => toggleColor(color)} // Alternar selección del color
                                    color={selectedColors[color] ? '#4630EB' : undefined} // Cambia de color si está seleccionado
                                    className='mr-2'
                                />
                                <Text className='text-white text-lg'>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Contenido debajo, el cual será visible cuando la lista esté activa */}
                <View>
                    <Text className='text-white text-lg mb-2'>Colores seleccionados:</Text>
                    {Object.keys(selectedColors)
                        .filter((color) => selectedColors[color])
                        .map((color) => (
                            <Text key={color} className='text-white text-lg'>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </Text>
                        ))}
                </View>
                <View className='mb-4'>
                    {/* Botón para mostrar/ocultar la lista */}
                    <TouchableOpacity onPress={toggleVisibility}>
                        <Text className='text-white text-lg'>
                            {isVisible ? 'Ocultar Lista' : 'Mostrar Lista'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className='h-px bg-slate-200 my-4' />
                {isVisible && (
                    <View className='bg-slate-700 p-4 rounded-lg shadow-lg mb-4'>
                        {colores.map((color) => (
                            <View key={color} className='flex-row items-center mb-2'>
                                <Checkbox
                                    value={!!selectedColors[color]} // Convertimos a booleano por si es undefined
                                    onValueChange={() => toggleColor(color)} // Alternar selección del color
                                    color={selectedColors[color] ? '#4630EB' : undefined} // Cambia de color si está seleccionado
                                    className='mr-2'
                                />
                                <Text className='text-white text-lg'>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}
                
                {/* Contenido debajo, el cual será visible cuando la lista esté activa */}
                <View>
                    <Text className='text-white text-lg mb-2'>Colores seleccionados:</Text>
                    {Object.keys(selectedColors)
                        .filter((color) => selectedColors[color])
                        .map((color) => (
                            <Text key={color} className='text-white text-lg'>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </Text>
                        ))}
                </View> 
                <View className='h-7'>

                </View>
            </ScrollView>
        </View>

    );
}
