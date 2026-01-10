// static

// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created from
//          that class (class owns anything static, not the objects)


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
}

console.log(MathUtil.PI);       // no need to create an object to use this property
console.log(MathUtil.getDiameter(10));


// ex.2

class User{

    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++
    }
}

const user1 = new User("Spongebob");
const user2 = new User("3amobaba");

console.log(user1.userName);
console.log(User.userCount);