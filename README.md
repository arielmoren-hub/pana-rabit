# pana-rabit


Instalacion de Tailwind
    #1
    npm install nativewind
    npm install --save-dev tailwindcss@3.3.2
    #2
    npx tailwindcss init
    #3
    // tailwind.config.js
    
    module.exports = {
    - content: [],
    + content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    
    #4
    // babel.config.js
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: ["babel-preset-expo"],
    +   plugins: ["nativewind/babel"],
      };
    };
    
    
    #5 eliminar error de className
    //global.d.ts
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
    
    //tsconfig.json
    {
      "compilerOptions": {
        "strict": true, // o cualquier configuración que estés utilizando
      },
      "include": ["global.d.ts", "src/**/*"]
    }
    
    
    

