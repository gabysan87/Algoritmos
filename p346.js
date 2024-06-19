// dado un array de transacciones se necesita un algoritmo que devuelva un objeto con los fondos de inversion y sus montos otales , cada trsaccion tiene un monto asoiado y esta vinculado a un monto de inversion espeifico, el objetivo es calcular el monto total invertido en cada uno de los fondos  

// entrada 


    const transacciones = [
        { id: 1, fecha: '2024-04-17', monto: 50.25, fondoInversion: 'Fondo A' },
        { id: 2, fecha: '2024-04-16', monto: 20.10, fondoInversion: 'Fondo B' },
        { id: 3, fecha: '2024-04-15', monto: 100.50, fondoInversion: 'Fondo C' },
        { id: 4, fecha: '2024-04-14', monto: 75.75, fondoInversion: 'Fondo A' }
      ];
     
      const totalAmout = (array) => {
        return array.reduce((acc, current) => {
        const {fondoInversion, monto } = current;
        acc[fondoInversion]= (acc[fondoInversion] || 0) + monto;
        return acc
      }, {})

      }


    //   salida
    //   {
    //     'Fondo A': 125.00,
    //     'Fondo B': 20.10,
    //     'Fondo C': 100.50 
    //   }