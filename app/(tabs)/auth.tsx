// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { loginUser, registerUser } from '@/services/Auth';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleAuth = async () => {
        try {
            if (isRegistering) {
                await registerUser(email, password);
                console.log('Usuario registrado con éxito');
            } else {
                await loginUser(email, password);
                console.log('Inicio de sesión exitoso');
            }
        } catch (error) {
            console.error('Error de autenticación:', error);
        }
    };

    return (
        <View className='flex-1 items-center justify-center bg-slate-600'>
            <TextInput
                placeholder='Correo electrónico'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                className='border border-gray-300 p-2 m-2 w-1/2'
            />
            <TextInput
                placeholder='Contraseña'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className='border border-gray-300 p-2 m-2 w-1/2'
            />
            <Button title={isRegistering ? 'Registrar' : 'Iniciar sesión'} onPress={handleAuth} />
            <Button title={`Cambiar a ${isRegistering ? 'Iniciar sesión' : 'Registrar'}`} onPress={() => setIsRegistering(!isRegistering)} />
        </View>
    );
}