// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

console.log(menu);

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference
// user['name'] = 'Johnny';

console.log(user.name);
console.log(admin);

let clone = {};

// copy value only not reference
// Object.assign(clone, { name: "Pete" });
Object.assign(clone, user);
console.log(clone);
clone.name = "Doe";
console.log(user);


// copy reference
let copy = user;

console.log(clone == user);
console.log(clone === user);
console.log(copy == user);
console.log(copy === user);


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        // this.a = +prompt('a?', 0);
        // this.b = +prompt('b?', 0);
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


let aa = {}; // a user without "address" property

console.log(aa?.address?.street); // Error!


