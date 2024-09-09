import { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [talle, settalle] = useState(45)
  const [cantn, setCantn] = useState(0)
  const [cantb, setCantb] = useState(0)
  const [cantv, setCantv] = useState(0)
  const [canta, setCanta] = useState(0)

  return (
    <>
      <View className='flex-1 items-center justify-center bg-slate-600'>
        <View>
          <View className=' flex flex-row p-2 items-center'>
            <TouchableOpacity onPress={() => { settalle(talle < 45 ? talle + 1 : 45) }}><Text className='text-5xl p-1 bg-slate-50'> + </Text></TouchableOpacity>
            <Text className='text-5xl p-2'>{talle}</Text>
            <TouchableOpacity onPress={() => { settalle(talle > 34 ? talle - 1 : 34) }}><Text className='text-5xl p-1 bg-slate-50'> - </Text></TouchableOpacity>
          </View>
        </View>
        <View className='flex flex-row'>
          <View className='p-2 items-center'>
            <TouchableOpacity onPress={() => { setCantn(cantn + 1) }}><Text className='text-5xl p-1 bg-slate-50'>+</Text></TouchableOpacity>
            <Text className='text-5xl'>{cantn}</Text>
            <TouchableOpacity onPress={() => { setCantn(cantn > 0 ? cantn - 1 : 0) }}><Text className='text-5xl p-1 bg-slate-50'>-</Text></TouchableOpacity>
          </View>
          <View className='p-2 items-center'>
            <TouchableOpacity onPress={() => { setCantb(cantb + 1) }}><Text className='text-5xl p-1 bg-slate-50'>+</Text></TouchableOpacity>
            <Text className='text-5xl'>{cantb}</Text>
            <TouchableOpacity onPress={() => { setCantb(cantb > 0 ? cantb - 1 : 0) }}><Text className='text-5xl p-1 bg-slate-50'>-</Text></TouchableOpacity>
          </View>
          <View className='p-2 items-center'>
            <TouchableOpacity onPress={() => { setCantv(cantv + 1) }}><Text className='text-5xl p-1 bg-slate-50'>+</Text></TouchableOpacity>
            <Text className='text-5xl'>{cantv}</Text>
            <TouchableOpacity onPress={() => { setCantv(cantv > 0 ? cantv - 1 : 0) }}><Text className='text-5xl p-1 bg-slate-50'>-</Text></TouchableOpacity>
          </View>
          <View className='p-2 items-center'>
            <TouchableOpacity onPress={() => { setCanta(canta + 1) }}><Text className='text-5xl p-1 bg-slate-50'>+</Text></TouchableOpacity>
            <Text className='text-5xl'>{canta}</Text>
            <TouchableOpacity onPress={() => { setCanta(canta > 0 ? canta - 1 : 0) }}><Text className='text-5xl w-full p-1 bg-slate-50'>-</Text></TouchableOpacity>
          </View>
        </View>
        <View >
          <TouchableOpacity>
            <Text className='text-2xl'>guardar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </>
  );
}

