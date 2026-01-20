  #### 1. crea carpeta Theory para guardar las tasks
  #### 2. crea la carpeta Practice para guardar la actividad a desarrollar
  #### 3. desarrolla la actividad
      #### instalación de dependencias
       ```
       npm init -y
       ```
       ```
       npm install next react react-dom
       npm install --save-dev \
       typescript @types/node @types/react @types/react-dom \
       eslint prettier \
       jest ts-jest @types/jest \
       eslint-config-next
       ```
       ```
       npx tsc --init
       ```
         

      #### ejecuta el proyecto con 
      ```
      npm ci
      ```
      #### luego
      ```
      npm run type-check
      npm run lint
      npm run format:check
      npm run test:unit
      npm run test:integration
      npm run build
      ```
