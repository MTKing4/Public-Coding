
// array of strings

// function List(){

//     const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];       // this will print the strings all together

//     const listItems = fruits.map(fruit => <li>{fruit}</li>);    // we need to give it tags making it an HTML list item in an ordered/unordered list
//     return(<ul>{listItems}</ul>);
// }

// export default List


// ---------------------------------------

// an array of objects

// function List(){

//     const fruits = [{name: "apple", calories: 95},
//                     {name: "orange", calories: 45},
//                     {name: "banana", calories: 105},
//                     {name: "coconut", calories: 159},
//                     {name: "pineapple", calories: 37}];


    // fruits.sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));             // sorting array objects by their name proprety alphabetically lexicographically using the built-in localeCompare() method
    // fruits.sort((firstItem, secondItem) => secondItem.name.localeCompare(firstItem.name));             // sorting in reverse
    // fruits.sort((firstItem, secondItem) => firstItem.calories - secondItem.calories);                     // sorting numerically
    // fruits.sort((firstItem, secondItem) => secondItem.calories - firstItem.calories);                     // sorting numerically in reverse



    // const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);   // this will work without they key attribute but we'll get this error {Each child in a list should have a unique "key" prop."}, this is a react warning wanting us to assign a key to each list item, since the name is unique we used it, but generally we need a unique id, &nbsp; is a nonbreaking space character
    // return(<ul>{listItems}</ul>);


// ---------------------------------------


// filtering objects by certain criteria

// function List(){

//     const fruits = [{name: "apple", calories: 95},
//                     {name: "orange", calories: 45},
//                     {name: "banana", calories: 105},
//                     {name: "coconut", calories: 159},
//                     {name: "pineapple", calories: 37}];


//         // displaying only low calories fruits
//         const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

//     const listItems = lowCalFruits.map(lowCalfruit => <li key={lowCalfruit.name}>{lowCalfruit.name}: &nbsp; <b>{lowCalfruit.calories}</b></li>);
//     return(<ul>{listItems}</ul>);
// }

// export default List


// ---------------------------------------

// transform the list component to be reusable with different lists

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.name}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
    return(<>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
           </>
    );
}

export default List