import { Alpargata, defaultAlpargata } from '@/entities/Alpargata';
import { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';


function save(alpargata: Alpargata) {

}

export default function MenuScreen() {
  const [colores, setColores] = useState<string[]>([
    'red',
    'green',
    'black',
    'white',
    'blackRed',
    'hawaiana',
    'love'
  ]);
  const [alpargata, setAlpargata] = useState<Alpargata>(defaultAlpargata );


  function setSize(value: number) {
    setAlpargata({ ...alpargata, size: value });
  }
 
  const setCantColor = (color: keyof Alpargata, value: number) => {
    // Verifica si el campo es un número (evitando modificar el tamaño u otros atributos)
    if (typeof alpargata[color] === 'number') {
      setAlpargata({
        ...alpargata,
        [color]: value,
      });
    }
  };


  // Función para agregar un nuevo color
  const agregarColor = (nuevoColor: string) => {
    setColores([...colores, nuevoColor]); // Añadir un nuevo color al final
  };

  // Función para eliminar un color por índice
  const eliminarColorPorIndice = (index: number) => {
    setColores(colores.filter((_, i) => i !== index)); // Filtra el color por su índice
  };

  return (
    <>
      <View className='flex-1 items-center justify-center bg-slate-600'>
        <View>
          <View className=' flex flex-row p-2 items-center'>

            <TouchableOpacity onPress={() => {
              setSize(alpargata.size < 45 ? alpargata.size + 1 : 45)
            }}><Text className='text-5xl p-1 bg-slate-50'> + </Text></TouchableOpacity>

            <Text className='text-5xl p-2'>{alpargata.size}</Text>

            <TouchableOpacity onPress={() => {
              setSize(alpargata.size > 35 ? alpargata.size - 1 : 35)
            }}><Text className='text-5xl p-1 bg-slate-50'> - </Text></TouchableOpacity>

          </View>
        </View>
        <View className='flex flex-row'>
          {colores.map((color, index) => (
            <View
              className='p-2 flex flex-col items-center justify-start '
              key={index}
            > 
              <View className='flex-col'>
              <TouchableOpacity onPress={() => { setCantColor(color as keyof Alpargata, (alpargata[color as keyof Alpargata] as number) + 1) }}><Text className='text-5xl p-1 bg-slate-50'>+</Text></TouchableOpacity>
              <Text className='text-5xl'>
                {/* {color} */}
                {alpargata[color as keyof Alpargata] as number}
              </Text>
              <TouchableOpacity onPress={() => { setCantColor(color as keyof Alpargata, (alpargata[color as keyof Alpargata] as number) > 0 ? (alpargata[color as keyof Alpargata] as number) - 1 : 0) }}><Text className='text-5xl p-1 bg-slate-50'>-</Text></TouchableOpacity>
              {/* value={alpargata[color as keyof Alpargata] as number}  */}
              </View>
              <Button title={`X`} onPress={() => eliminarColorPorIndice(index)} />
            </View>
          ))}
        </View>
        <Button title={`Guardar`} onPress={() => {}} />

      </View>

    </>
  );
}

