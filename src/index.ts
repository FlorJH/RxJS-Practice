import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    //el observer es una interfaz, nos obligara a establecer lo que se necesita para que sea un observer valido 
    //Tenemos que agregar su tipo de dato que manejara <>
    next: value => console.log('Siguiente:', value),
    error: error => console.log('error:', error),
    complete: () => console.log('completado:')
}
const intervalo$= new Observable<number>(subs =>{
    let numero=0;
     const interval= setInterval(() => {
        numero++
        subs.next(numero);
        console.log('contador',numero)
     },1000);

     return () => {
         clearInterval(interval)//permite borrar el intervalo que esta ejecutando
        console.log('intervalo destruido')
        }
});

const subs= intervalo$.subscribe(num => console.log('Num:', num));
const subs2= intervalo$.subscribe(num => console.log('Num:', num));
const subs3= intervalo$.subscribe(num => console.log('Num:', num));

//cancelar a los 3 segundos
setTimeout(() =>{
    subs.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()
},3000)