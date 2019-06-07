// class Phone{
//     constructor (_model, _battery, _diagonal) {
//         this.battery = _battery;
//         this.diagonal = _diagonal;
//         this.model = _model;
//     }

//     Print() {
//         console.log(`
//             Model: ${this.model}\n
//             Diagonal: ${this.diagonal}\n
//             Battery: ${this.battery}
//         `)
//     }

//     ShowThis() {
//         console.log(this);
//     }
// }

// let phone = new Phone('Nokia', '2500', '1.3');

// phone.Print();


// class Smartphone extends Phone {
//     /**
//      * 
//      * @param {string} _model 
//      * @param {number} _battery 
//      * @param {number} _diagonal 
//      * @param {string} _os 
//      */
//     constructor (_model, _battery, _diagonal, _os) {
//         super(_model, _battery, _diagonal);
//         this.os = _os;
//     }
//     /**
//      * @description show params
//      */
//     Print() {
//         console.log(`
//             Model: ${this.model}\n
//             Diagonal: ${this.diagonal}\n
//             Battery: ${this.battery}\n
//             OS: ${this.os}
//         `)
//     }
// }

// let smart = new Smartphone('Nokia', '2500', '1.3', 'IOS12');

// smart.Print();

// smart.ShowThis();

/**
 * @param {string} name имя студента
 * @param {number} years количество годиков
 */
class Man {
    constructor (_name, _years) {
        this.name = _name;
        this.years = _years;
    }
   
}

/**
 * @param {number} studyYear год обучения
 * @param {number} pay сколько стоит год обучения 
 */
class Student extends Man {
    constructor (_name, _years, _pay) {
        super(_name, _years);
        this.studyYear = 24 - this.years;
        this.pay = _pay;
    }
    Cost(){
        return this.studyYear * this.pay;
    }
}

/**
 * @param {Students[]} массив студентов (группа)
 * @method Profit считает возможную прибыль со студентов (студент учится до 24годиков)
 */
class Prepod  extends Man{
    constructor (_name, _years, _students) {
        super(_name, _years);
        this.students = _students;
    }
Profit(){
    let profit = 0;
    for (let i = 0; i < this.students.length; i++) {
        profit += this.students[i].Cost();
        
    }
    return profit;
}
}

let Vasya = new Student("Vasya", 17, 10000);
let Petya = new Student("Petya", 22, 7000);
document.write(Vasya.Cost());
console.log(Petya.Cost());