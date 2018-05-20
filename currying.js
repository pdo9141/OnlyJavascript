var exampleOne = function() {
    var add = function(a) {
        return function(b) {
            return a + b;
        }
    };

    var addToFive = add(5);
    console.log(addToFive(1));
    console.log(add(5)(1));
}

var exampleTwo = function() {
    var avg = function(...n) {
        let total = 0;
        for(let i=0; i < n.length; i++) {
            total += n[i];
        }
        return total/n.length;
    };

    var spiceUp = function(fn, ...n) {
        return function(...m) {
            return fn.apply(this, n.concat(m));
        }
    }

    var doAvg = spiceUp(avg, 1,2,3);
    console.log(doAvg(4,5,6));
}

var exampleThree = function() {
    // const names = [
    //     'Bob', 
    //     'Sid', 
    //     'Clara', 
    //     '11'
    // ];
    // function compareStrings(stringA, stringB) { return stringA > stringB; }
    // names.sort(compareStrings);
    // console.log(names);

    const people = [
        { age: 45, name: 'Bob' }, 
        { age: 104, name: 'Sid' }, 
        { age: 75, name: 'Clara' }, 
        { age: 11, name: '11' }
    ];

    function createSort(key) {
        return function compareStrings(stringA, stringB) { 
            return stringA[key] > stringB[key]; 
        }
    }
    
    const sortByName = createSort('name');
    const sortByParentName = createSort('age');
    people.sort(sortByName);
    console.log(people);
}

var exampleFour = function() {
    const people = [
        { parent: { age: 46, name: 'Zeb' }, age: 45, name: 'Bob' }, 
        { parent: { age: 57, name: 'Joker' }, age: 104, name: 'Sid' }, 
        { parent: { age: 89, name: 'Huffington' }, age: 75, name: 'Clara' }, 
        { parent: { age: 90, name: '10' }, age: 11, name: '11' }
    ];

    function combine(...funcs) {
        return function(value) {
            return funcs.reduce(function(prev, cur) {
                return cur(prev);
            }, value);
        }
    }

    function propExtractor(key) {
        return function(object) {
            return object[key];
        }
    }

    function createSort(fn) {
        return function compareStrings(objectA, objectB) { 
            return fn(objectA) > fn(objectB); 
        }
    }

    function getStringLength(value) {
        return value.length;
    }
    
    const getParent = propExtractor('parent');
    const getName = propExtractor('name');
    const getParentName = combine(getParent, getName);    
    // const getParentNameByLength = combine(getParent, getName, getStringLength);
    const sortByParentName = createSort(getParentName);
    people.sort(sortByParentName);
    console.log(people);
}

//exampleOne();
//exampleTwo();
//exampleThree();
exampleFour();