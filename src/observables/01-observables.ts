import { Observable, Observer, Subscriber } from "rxjs";

//crear obser.
// const obs$=Observable.create();
const obs$ = new Observable<string>(subs => { //puede ir sin <string, pero se recomienda indicar con que tipo de datos trabajara
    //para que un subscriber se ejecuta debe tener una subcripcion
    subs.next('Hola')
    subs.next('hola')

    //forzar un error
    const a = undefined;
    a.nombre = 'Flor'
    subs.complete();//se completa

    subs.next('que hace?')//ya no se mostrara

});

//forma 1 de suscribirse
// obs$.subscribe(console.log)

//forma 2 de suscribir
// obs$.subscribe(resp =>{
//     console.log(resp);
// })

//forma 3 de subs
// obs$.subscribe(
//     valor => console.log('next:', valor),
//     error => console.warn('error:', console.error),
//     () => console.log('completado')

// )

//Forma4
const observer: Observer<any> = {
    //el observer es una interfaz, nos obligara a establecer lo que se necesita para que sea un observer valido 
    //Tenemos que agregar su tipo de dato que manejara <>
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.log('error[obs]', error),
    complete: () => console.log('completado [obs○]')
}

obs$.subscribe(observer);