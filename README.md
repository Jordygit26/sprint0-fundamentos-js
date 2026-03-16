# sprint0-fundamentos-js

SOLO SON ARCHIVOS DE PRÁCTICA

🔵 SPRINT 0 FUNDAMENTOS DE JAVASCRIPT
REGLAS ESTRICTAS DE PAIR PROGRAMMING (OBLIGATORIAS)
Esto debe leerse literalmente antes de empezar:
❌ PROHIBIDO
“Tú haces backend y yo frontend.”


“Yo hago el código y tú haces el documento.”


“Yo hago lo difícil y tú lo fácil.”


Dividir archivos por persona.


✅ OBLIGATORIO
Método Driver / Navigator
Durante 30 minutos:
🧑‍💻 Driver: escribe el código.


🧠 Navigator: piensa, corrige, pregunta, revisa lógica.


Luego cambian.
El que no escribe:
Debe entender TODO lo que se escribe.


Puede detener al driver si no entiende.



📌 Cómo comprobar que están trabajando juntos
Cada archivo debe poder ser explicado por ambos.
Si uno no puede explicar lo que está en el archivo,
 fallaron el trabajo en pareja.

💻 IDE OBLIGATORIO
Deben usar:
👉 Google Antigravity como entorno principal EXCLUSIVO
 Y para ejercicios básicos pueden usar:
👉 No se permite:
Copiar código desde ChatGPT y pegar sin entender.


Usar otro IDE sin que ambos estén mirando.
Dia 1 Tema de Hoy Variables (V)+ Funciones (F)
Dia 2 Objetos (O)
Día 3 : Arrays + V/F/O → Menú visual básico
Día 4: Métodos de arrays (find/filter/map) → buscar y filtrar platos
Día 5: Condicionales + bucles + (CSS muy básico) → reglas de stock y alertas visuales
Día 6: Modularización (separar archivos) → estructura más profesional
Día 7: Async/await (simular “pedido” con demora) → entender procesos no inmediatos
Día 8: try/catch (manejo de errores) → fallos controlados y recuperación





modulizacion de archivos, ahora se crearon varios archivos para el proyecto.
Main.js Responsabilidad: almacenar el menú y modificarlo

menu.js Responsabilidad: reglas de negocio del restaurante, no toca document ni innerHTML
operaciones.js Responsabilidad: mostrar datos en pantalla y conectar botones,es el único archivo que toca el DOM
ui.js // Responsabilidad: inicializar el sistema, solo importa y arranca
