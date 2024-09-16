import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Alpargata, defaultAlpargata } from '@/models/Alpargata';
import { createAlpargata } from '@/services/Alpargatas';

export default function HomeScreen() {
  const [colores, setColores] = useState<string[]>([
    'red',
    'green',
    'black',
    'white',
    'blackRed',
    'hawaiana',
    'love'
  ]);

  const [alpargata, setAlpargata] = useState<Alpargata>(defaultAlpargata);

  function setSize(value: number) {
    setAlpargata({ ...alpargata, size: value });
  }

  const setCantColor = (color: keyof Alpargata['colors'], value: number) => {
    setAlpargata({
      ...alpargata,
      colors: {
        ...alpargata.colors,
        [color]: value,
      },
    });
  };

  // Función para agregar un nuevo color
  const agregarColor = (nuevoColor: string) => {
    if (!colores.includes(nuevoColor)) {
      setColores([...colores, nuevoColor]); // Añadir un nuevo color al final
    }
  };

  // Función para eliminar un color por índice
  const eliminarColorPorIndice = (index: number) => {
    setColores(colores.filter((_, i) => i !== index)); // Filtra el color por su índice
  };

  const handleCreate = async () => {
    try {
      await createAlpargata(alpargata);
      console.log("Alpargata creada con éxito");
    } catch (error) {
      console.error("Error al crear alpargata", error);
    }
  };

  return (
    <View className='flex-1 bg-slate-600'>
      <View className='flex-1 justify-center items-center'>
        <Text className='text-xl'>ALPARGATAS</Text>
        <View>
          <View className='flex flex-row p-2 items-center'>
            <TouchableOpacity onPress={() => {
              setSize(alpargata.size < 45 ? alpargata.size + 1 : 45);
            }}>
              <Text className='text-5xl p-1 bg-slate-50'> + </Text>
            </TouchableOpacity>
            <Text className='text-5xl p-2'>{alpargata.size}</Text>
            <TouchableOpacity onPress={() => {
              setSize(alpargata.size > 35 ? alpargata.size - 1 : 35);
            }}>
              <Text className='text-5xl p-1 bg-slate-50'> - </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='flex flex-row'>
          {colores.map((color, index) => (
            <View
              className='p-2 flex flex-col items-center justify-start'
              key={index}
            >
              <View className='flex-col'>
                <TouchableOpacity onPress={() => {
                  setCantColor(color as keyof Alpargata['colors'], (alpargata.colors[color as keyof Alpargata['colors']] as number) + 1);
                }}>
                  <Text className='text-5xl p-1 bg-slate-50'>+</Text>
                </TouchableOpacity>
                <Text className='text-5xl'>
                  {alpargata.colors[color as keyof Alpargata['colors']] as number}
                </Text>
                <TouchableOpacity onPress={() => {
                  setCantColor(color as keyof Alpargata['colors'], (alpargata.colors[color as keyof Alpargata['colors']] as number) > 0 ? (alpargata.colors[color as keyof Alpargata['colors']] as number) - 1 : 0);
                }}>
                  <Text className='text-5xl p-1 bg-slate-50'>-</Text>
                </TouchableOpacity>
              </View>
              <Button title={`X`} onPress={() => eliminarColorPorIndice(index)} />
            </View>
          ))}
        </View>
        <Button title="Guardar" onPress={handleCreate} />
      </View>
    </View>
  );
}
