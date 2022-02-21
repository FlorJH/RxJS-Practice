import { Observable, Subscriber } from "rxjs";

//crear obser.
// const obs$=Observable.create();
const obs$ = new Observable<string>(subs => { //puede ir sin <string, pero se recomienda indicar con que tipo de datos trabajara
    //para que un subscriber se ejecuta debe tener una subcripcion
    subs.next('Hola')
    subs.next('hola')

    subs.complete();//se completa

    subs.next('que hace?')//ya no se mostrara

})

obs$.subscribe(console.log)