import './../firebaseConfig';
import { Alpargata } from "@/models/Alpargata";
import { generateId } from "@/utils/idGenerator";
import { get, getDatabase, onValue, ref, set } from "firebase/database";


export function createAlpargata(alpargata: Alpargata): Promise<void> {
    const data = {
        user: 'test1',
        alpargata,
        dataTime: {
            createdAt: new Date().toISOString(), // Mantén la fecha de creación si es edición
            updatedAt: '', // Actualiza siempre la fecha de edición
        }
    }
    const db = getDatabase();
    return set(ref(db, 'newAlpargata/' + generateId()), data)
}

// Función para leer una alpargata de Firebase por su ID
export async function getAlpargata(id: string) {
    const db = getDatabase();
    const alpargataRef = ref(db, 'newAlpargata/' + id); // Referencia al ID de la alpargata

    try {
        const snapshot = await get(alpargataRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            return data; // Devuelve los datos obtenidos
        } else {
            console.log("No se encontraron datos para la alpargata con ID:", id);
            return null;
        }
    } catch (error) {
        console.error("Error al leer los datos de Firebase:", error);
        throw error; // Lanza el error para que pueda ser manejado en otro lugar
    }
}


// Función para obtener todas las alpargatas desde Firebase
export async function getAllAlpargatas() {
    const db = getDatabase();
    const alpargatasRef = ref(db, 'newAlpargata/'); // Referencia a todas las alpargatas

    try {
        const snapshot = await get(alpargatasRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const alpargatas = Object.keys(data).map((key) => ({
                id: key,        // El ID de la alpargata es la key
                ...data[key]    // Los datos de la alpargata
            }));
            console.log("Todas las alpargatas:", alpargatas);
            return alpargatas; // Devuelve el array de alpargatas
        } else {
            console.log("No se encontraron alpargatas");
            return [];
        }
    } catch (error) {
        console.error("Error al leer los datos de Firebase:", error);
        throw error; // Lanza el error para que pueda ser manejado en otro lugar
    }
}

export function onAlpargatasValueChange(callback: (alpargatas: Alpargata[]) => void): () => void {
    const db = getDatabase();
    const alpargatasRef = ref(db, 'newAlpargata/');

    const unsubscribe = onValue(alpargatasRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const alpargatasList = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            callback(alpargatasList);
        } else {
            callback([]);
        }
    }, (error) => {
        console.error('Error al obtener datos en tiempo real:', error);
    });

    return unsubscribe;
}