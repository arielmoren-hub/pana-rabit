import './../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Función para registrar un nuevo usuario
export async function registerUser(email: string, password: string): Promise<void> {
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        throw error;
    }
}

// Función para iniciar sesión
export async function loginUser(email: string, password: string): Promise<void> {
    const auth = getAuth();
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}

// Función para cerrar sesión
export async function logoutUser(): Promise<void> {
    const auth = getAuth();
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
    }
}

// Función para escuchar cambios en el estado de autenticación
export function onAuthStateChangedListener(callback: (user: any) => void): () => void {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, callback, (error) => {
        console.error('Error al escuchar cambios en el estado de autenticación:', error);
    });
    return unsubscribe;
}

