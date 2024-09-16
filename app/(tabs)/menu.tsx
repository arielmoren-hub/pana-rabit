import { getAllAlpargatas, onAlpargatasValueChange } from '@/services/Alpargatas';
import { useEffect, useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';


export default function MenuScreen() {
  
  const [alpargatas, setAlpargatas] = useState<any[]>([]);

  useEffect(() => {
    // Obtener todas las alpargatas al cargar el componente
    getAllAlpargatas().then(setAlpargatas).catch(console.error);

    // Configurar el listener en tiempo real
    const unsubscribe = onAlpargatasValueChange(setAlpargatas);

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <>
      <View className='flex-1 items-center justify-center bg-slate-600'>
      {alpargatas.length > 0 ? (
        alpargatas.map((alpargata, index) => (
          <View key={index} className="p-2">
            <Text>Usuario: {alpargata.user}</Text>
            <Text>Tamaño: {alpargata.alpargata.size}</Text>
            {alpargata.alpargata.colors ? (
              Object.entries(alpargata.alpargata.colors).map(([color, value]) => (
                <Text key={color}>{`${color.charAt(0).toUpperCase() + color.slice(1)}: ${value}`}</Text>
              ))
            ) : (
              <Text>No se encontraron colores</Text>
            )}
          </View>
        ))
      ) : (
        <Text>No se encontraron alpargatas</Text>
      )}
    </View>
    </>
  );
}

