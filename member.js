function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        calculateNumbers: function(var1, var2) {
            console.log(var1, var2);
        }
    };
    member.calculateNumbers(1, 2); // 1 2
    console.log(member.name); // John
    console.log(member.age); // 30
}