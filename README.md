En este video hemos implementado un sistema de errores global.
Hemos añadido una propiedad "errorMessage" a nuestro SharedState (que ademas tenia la propiedad loading spinner, tambien global) -
(public/src/app/store/Shared/shared.state.ts).
De la misma forma, hemos implementado la accion setErrorMessage (public/src/app/store/Shared/shared.actions.ts),
tambien hemos implementado el reducer setErrorMessage (public/src/app/store/Shared/shared.reducer.ts)
y el selector getErrorMessage  (public/src/app/store/Shared/shared.selector.ts).
En el archivo app/auth/state/auth.effects.ts por una parte hemos agregado en el caso de success el despachar la accion setLoadingSpinner
con el valor status a false, para que se desactive el spinner cuando hemos terminado de hacer login y es correcto. Por otra parte, tambien 
hemos agregado catchError a los effects, para coger el error si es que lo hay, y tambien despachamos aqui la accion setLoadingSpinner con 
el valor status a false igualmente, y tambien despachamos la accion setErrorMessage con el error que previamente hemos cogido del service 
(dentro del cual hemos creado el metodo getErrorMessage --> this.authService.getErrorMessage)
