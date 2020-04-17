const setResponse = (html, state, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  return (`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="${mainStyles}"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>FrcGustavo</title>
    </head>
    <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)/* .replace(/</g, '\\u003c') */}
        </script>
        <script src="${mainBuild}"></script>
    </body>
    </html>
  `);
};


export default setResponse;
