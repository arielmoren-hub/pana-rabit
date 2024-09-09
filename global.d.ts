import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;  // Añade `className` como una propiedad válida
  }
  // Si usas otros componentes que necesitan la propiedad className, puedes agregarlos también.
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }
}
