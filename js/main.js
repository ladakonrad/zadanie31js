function actions(num1, num2) {
    let suma = (num1 + num2); // dodawanie
    if (suma < 0)
        console.log('Wynik dodawania jest ujemny')
    else
        console.log('Wynik dodawania wynosi ' + suma);
    if (suma < 0);

    let roznica = (num1 - num2); // odejmowanie
    if (roznica < 0)
        console.log('Wynik odejmowania jest ujemny')
    else
        console.log('Wynik odejmowania wynosi ' + roznica);

    let iloczyn = (num1 * num2); // iloczyn
    if (iloczyn < 0)
        console.log('Wynik mnożenia jest ujemny')
    else
        console.log('Wynik mnożenia wynosi ' + iloczyn);

};

actions(2, 5);
