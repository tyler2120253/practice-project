var Employee = function (name, jobtitle, Salary, status) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = Salary;
    this.status = status;
    this.print = function () {
        console.log(this.name + " is running")
    }
}
var mazen = new Employee("mazen", "manger", 20000, "full time")
var wael = new Employee("weal", "engineer", 25000, "full time")
var group =[];
group.push(mazen);
group.push(wael);
for(var i =0;i < group.length; i++){
    group[i].print();
}