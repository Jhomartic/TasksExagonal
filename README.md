# 🧱 TaskExagonal

**TaskExagonal** es una aplicación de gestión de tareas (CRUD) construida con **Node.js** y **TypeScript**, implementando los principios de la **Arquitectura Hexagonal (Ports & Adapters)** para lograr una estructura desacoplada, escalable y mantenible.

## 📌 Características

- Crear, leer, actualizar y eliminar tareas.
- Separación clara entre lógica de negocio y adaptadores.
- Uso de TypeScript para tipado seguro.
- Arquitectura basada en puertos y adaptadores.
- Fácil de extender con nuevos frameworks, bases de datos o interfaces.

## 🧠 ¿Qué es la Arquitectura Hexagonal?

La **Arquitectura Hexagonal** (también conocida como Ports & Adapters) busca separar el núcleo de la aplicación (la lógica de negocio) de los detalles externos como bases de datos, interfaces web o APIs. Esto permite:

- Mayor facilidad de pruebas.
- Bajo acoplamiento y alta cohesión.
- Mayor mantenibilidad y flexibilidad.

  ## 🏗️ Estructura del Proyecto

task-exagonal/
├── src/
│ ├── application/ # Casos de uso
│ ├── domain/ # Entidades y lógica de negocio
│ ├── infrastructure/ # Adaptadores (DB, HTTP, etc.)
│ ├── interfaces/ # Puertos (interfaces de entrada/salida)
│ └── main.ts # Punto de entrada de la app
├── tests/ # Pruebas unitarias
├── package.json
├── tsconfig.json
└── README.md

markdown
Copiar
Editar

## 🚀 Instalación y Uso

1. Clona el repositorio:

git clone https://github.com/Jhomartic/TasksExagonal.git
cd TasksExagonal

markdown
Copiar
Editar

2. Instala las dependencias:

npm install

markdown
Copiar
Editar

3. Ejecuta el proyecto:

npm run dev

shell
Copiar
Editar

## ✅ Ejemplos de Uso

### Crear tarea

POST /tasks
{
"title": "Estudiar arquitectura hexagonal",
"description": "Revisar teoría y hacer un mini proyecto"
}

shell
Copiar
Editar

### Obtener todas las tareas

GET /tasks

markdown
Copiar
Editar

## 🛠️ Tecnologías

- Node.js
- TypeScript
- Arquitectura Hexagonal
- Express (como adaptador HTTP)
- (Opcional) Base de datos como MongoDB, SQLite, etc.

## 📚 Recursos

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://medium.com/

## 👨‍💻 Autor

**Jhonatan David Martinez Ricardo**  
Frontend Developer & Software Engineer  
📧 jhomartic321@gmail.com  
🔗 https://github.com/Jhomartic

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.
