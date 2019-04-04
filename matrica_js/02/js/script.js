/**
  @param table {string}
*/
let table = '';

/**
  @param counter {number} counts cells
*/
let counter = 1;

/** @param number1 number of row*/

var number1 = parseInt(prompt("Введите количество строк: "));



/** @param number2 number of columns*/

var number2 = parseInt(prompt("Введите количество столбцов: "));

/**Function Declaration dicplaysTable displays a table of numbers
 *  with a specified number of rows and columns */

function dicplaysTable() {
    table += `<table>`;

    for (let i = 1; i <= number1; i++) {

        table += `<tr>`;
        if ( i % 2 == 0) {
            counter += number2-1;

            for (let j = 1; j <= number2; j++) {
            

                table += `<td>`;


                table += `<pre>${counter} </pre>`;

                counter--;

                table += `</td>`;
            } 
            counter += number2+1;
        }else {
            
            for (let j = 1; j <= number2; j++) {
                    

                    table += `<td>`;

                table += `<pre>${counter} </pre>`;

                counter++;

                table += `</td>`;
                }


            }
            table += `</tr>`;

        }
    
    table += `</table>`;
}
dicplaysTable();

document.write(table);