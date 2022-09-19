[![N|Solid](https://media-exp1.licdn.com/dms/image/C4D0BAQEUHEciv07L8g/company-logo_200_200/0/1630409785378?e=1660780800&v=beta&t=sKCzeW8Cjchu4qMaZ1m65UkXPefj2gCKSIFcuRiKAdM)](https://media-exp1.licdn.com/dms/image/C4D0BAQEUHEciv07L8g/company-logo_200_200/0/1630409785378?e=1660780800&v=beta&t=sKCzeW8Cjchu4qMaZ1m65UkXPefj2gCKSIFcuRiKAdM)

# Entrevista técnica de React ⚛️

¡Antes que nada felicidades por haber llegado hasta aquí! Ya queda muy poco, estás en la recta final.
En esta entrevista buscamos validar que tienes las siguientes capacidades.

- Desarrollo código limpio y escalable
- Uso de buenas prácticas y estandares de la industria
- Consumo de APIs
- Unit Testing con JEST

# La prueba 🧪

La prueba consiste en consumir la API de Spotify para recoger datos de canciones, playlist, géneros etc... y posteriormente mostrarlos en la aplicación.

# Pre-requisitos ✅

- Agrega tu ID de cliente y API KEY de cliente de Spotify a un archivo `.env` en la raíz usando las variables de entorno `REACT_APP_SPOTIFY_CLIENT_ID` y `REACT_APP_SPOTIFY_CLIENT_SECRET`
  - Nota. **Nunca agregue este tipo de configuración al control de versiones. **
    &nbsp;

# Requisitos 📖

- Usa axios para realizar las llamadas a la API
- Intenta reutilizar el máximo de lógica entre llamada y llamada
- Haz fetch y muestra los datos de las canciones _Released This Week_
  - Usa el API path `new-releases`
- Haz fetch y muestra los datos de las _Featured Playlists_
  - Usa el API path `featured-playlists`
- Haz fetch y muestra los datos de los géneros _Browse_
  - Usa el api API path `categories`
- Estado de carga de los datos en la UI
- Realizar testing con jest de por lo menos 2 componentes usando mocks de la api.

&nbsp;

# Piensa sobre 💡

- Echarle un ojo a la documentación de spotify
- ¿Has realizado las llamadas a la API una detrás de otra o en paralelo?
- ¿Dónde realizas la llamada a la API?

&nbsp;
#¿Qué esta echo? 🏁

- UI/UX de todos los elementos incluído el responsive

&nbsp;

# Screenshots 🌄

&nbsp;
![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
<img alt="screenshot-mobile" width=400 src="https://puu.sh/GwPLS/0bcb566d23.png" />

## Instalación

La instalación es super sencilla. Simplemente clonar el repositorio, instalar las dependencias y ya esta todo listo para empezar a usar.

```sh
git clone
cd test-tecnico-entrevista
npm i
npm start
```

## ¿Cómo envío el test?

Haz un fork del repositorio y envianoslo!


## License

MIT
