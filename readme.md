# Citas MongoDb


<div style="margin: 30px 0; box-shadow: 10px 10px 20px #f2f2f2; border-radius:10px; cursor:pointer">
<img src="/assets/bd/diagrama.png"><br>
</div>

## Contexto
Sistema de Gestión de Citas Médicas
Este proyecto está enfocado en el desarrollo de un sistema de gestión de citas médicas, diseñado para facilitar la programación y administración de citas entre pacientes y médicos. La base de datos subyacente proporciona la estructura necesaria para almacenar y relacionar la información crucial para la gestión eficiente de las citas médicas.

## Estructura de la Base de Datos
La base de datos consta de varias tablas interconectadas que abarcan aspectos clave del proceso de citas médicas:

#### tipo_documento: 
Almacena los diferentes tipos de documentos de identificación para identificar a los pacientes.
#### genero: 
Contiene información sobre los géneros para caracterizar a los pacientes.
#### acudiente: 
Guarda los detalles de los acudientes, responsables de los pacientes en ciertos casos.
#### usuario: 
Almacena información detallada sobre los pacientes que requieren citas médicas.
#### cita: 
Registra las citas médicas programadas, incluyendo la fecha, el estado, el médico asignado y el paciente.
#### estado_cita: 
Contiene los posibles estados de una cita, como "Espera", "Atendida" y "Rechazada".
#### medico: 
Almacena información sobre los médicos, incluyendo su matrícula, nombre y especialidad.
#### especialidad: 
Guarda las diferentes especialidades médicas disponibles.
#### consultorio: 
Contiene información sobre los consultorios médicos donde se realizan las citas.

### Uso y Beneficios
El sistema de gestión de citas médicas permite a los administradores asignar citas a médicos específicos y a pacientes según su disponibilidad. Los pacientes pueden ser fácilmente identificados y contactados gracias a la información almacenada en la base de datos. Además, el sistema agiliza la administración y seguimiento de las citas.


<p>Las tablas con la que se cuenta en la base de datos son las siguientes:</p>

<ul>
    <li>tipo_documento</li>
    <li>genero</li>
    <li>acudiente</li>
    <li>usuario</li>
    <li>cita</li>
    <li>estado_cita</li>
    <li>medico</li>
    <li>especialidad</li>
    <li>consultorio</li>
</ul>
<h4>Dependencias utilizadas</h4>
<p>A continuacion se presentan las dependencias utilizadas en el desarrollo de la solucion.</p>

```Json
"devDependencies": {
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-rate-limit": "6.8.1",
    "jose": "4.14.4",
    "mongodb": "5.7.0",
    "node": "20.5.0",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
```

<h4>Despliegue</h4>

1. Ejecutamos el siguiente comando en la terminal estando ubicados en la ruta que queremos que repose el proyecto.

```Js
https://github.com/EduardoMantillaCampus/Citas_Campus.git
```

2. Ya teniendo abierto el proyecto en Visual Studio Code, nos dirigimos a la terminal donde instalaremos el siguiente comando.

```Js
npm install
```
3. Hora vamos a tomar el archivo .env-example y lo vamos a dejar con el nombre .env.

<p>Dentro de este archivo reponsan las varibales de entorno que se requieren para el funcionamiento de la herramienta, por ende necesitaremos configurar la conexion la base de datos entre otras cosas. </p>

4. Ejecutamos el siguiente comando en la terminal, el cual nos permitira correr el proyecto. 

```Js
npm run dev
```

5. Una vez el servidor ya este levantado y nos aparezca un mensaje como estos en la consola http://127.0.0.1:5015 podemos dar por hecho que el servidor ya se encuentro en funcionamiento. 

<hr style="height:1px; padding:0; margin:10px 0">

<b>IMPORTANTE</b>
<p>Recuerda que para poder hacer uso de los diferentes EndPoint requieres de un token, el cual debera ser generado por usted, de lo contrario la consulta no sera satisfactoria</p>

¿Como puedo genera un Token?

Para generar un token debera acceder a la siguiente ruta y al final debera poner el nombre de la collection a la cual requiere generarle el token, recuerde que para cada collection requiere un token. 

http://127.0.0.1:5015/token/:paciente

Collectiones disponibles:
<ul>
    <li>paciente</li>
    <li>cita</li>
    <li>medico</li>
</ul>
<p></p>

### EndPoints Disponibles

1. Obtener todos los pacientes alfabéticamente
http://127.0.0.1:5015/paciente

2. Obtener todas las citas alfabéticamente
http://127.0.0.1:5015/cita

3. Obtener todos los médicos de una especialidad específica (por ejemplo, 'Cardiología'):
http://127.0.0.1:5015/medico/:especialidad

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con usu_id 1):
http://127.0.0.1:5015/paciente/:idPaciente

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con med_nroMatriculaProsional 1)
http://127.0.0.1:5015/paciente/medico/:idNumeroMatriculaMedico

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente con usu_id 1)
http://127.0.0.1:5015/paciente/consultoria/:idPaciente

7. Encontrar todas las citas para un día específico (por ejemplo, '2023-07-12')
http://127.0.0.1:5015/cita/:aaaa-mm-dd

8. Obtener los médicos y sus consultorios
http://127.0.0.1:5015/medico/consulta/consultorio

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con med_nroMatriculaProsional 1 en '2023-07-12')
http://127.0.0.1:5015/medico/:numeroMatriculaMedico/:aaaa-mm-dd

10. Obtener los consultorio donde se aplicó las citas de un paciente
http://127.0.0.1:5015/paciente/consultorios/:idPaciente

11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad
http://127.0.0.1:5015/paciente/citas/:idGenero

13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
http://127.0.0.1:5015/cita/rechazada/:mes