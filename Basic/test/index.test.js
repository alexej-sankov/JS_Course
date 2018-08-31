var assert = require('assert');

describe('JS Basics', function() {
  describe('Numbers', function() {
    it('should be able to add number', function() {
      var a = 42.98753534; 
      var b = 43.34534344;
      var result = a+b;
      assert.equal(result, 86.33287878);
    });
    
    it('should be able to divide and multiply number', function() {
      var a = 42.94; 
      var b = 0;
      var result = a * a / b;
      assert.equal(result, Infinity);
    });
    
    it('should be able to round numbers', function() {
      var a = 42.94;
      var result = Math.round(a);
      assert.equal(result, 43);
    });
    
    it('should be able to find sin(x) * cos(x)', function() {
      var a = 42;
      var result = Math.pow(Math.sin(a), 2) + Math.pow(Math.cos(a), 2);
      assert.equal(result, 1);
    });
    
    it('should be able to parse number form string', function() {
      var price = "9.99 $"
      var result = parseFloat(price);
      assert.equal(result, 9.99);
    });
  
  });
  
  describe('Objects', function() {
    it('should be find object value by key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      var result = obj.a.b.d;
      assert.equal(result, "foo");
    });
    
    it('should be find object value by dynamic key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      assert.equal(obj["c"], 42);
    });
    
    it('should be parse object from json', function() {
      var json = '{"ok":true,"user_lessons":[{"user_lesson_id":408097171313,"state":"completed","skip":false,"lesson_id":1,"date_start":1533108640,"tasks":[{"user_task_id":407936828624,"state":"skipped","current_step":"","task_id":1},{"user_task_id":408791535509,"state":"skipped","current_step":"","task_id":2},{"user_task_id":409970847238,"state":"skipped","current_step":"","task_id":3}]}]}'
      var dateStart = JSON.parse(json)["user_lessons"][0]["date_start"];
      assert.equal(dateStart, 1533108640);
    });
    
    it('should be set objet key', function() {
      var obj = { a: {b: { d: "foo" }}, c: 42 }
      obj.a.b = "Js Rocks!";
      assert.equal(obj.a.b, "Js Rocks!")
    });
    
  });
  
  
  describe('Arrays', function() {
    it('should be access array by index', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      var result = arrray[4];
      assert.equal(result, 5);
    });
    
    it('should to push and pop from array', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      arrray.push(10);
      arrray.push(10);
      arrray.pop();
      assert.equal(arrray.length, 10);
    });

    it('should be able to output square of array values', function() {
      var arrray = [1,2,3,4,5,6,7,8,9]
      arrray.map(function(element) {
        return element*element;
      });
      assert.equal()
    });
    
    it('should be able to sort array', function() {
      var arr = [23,23,4,5,123,7,32,13,13,9]
      arr.sort(function(a,b) {
        return a-b;
      });
      assert.deepEqual(arr, [4,5,7,9,13,13,23,23,32,123]);
    });

    it('should be able to reverse string', function() {

      var string  = "I love corgies!"
      var result = string.split("").reverse().join("");
      assert.equal(result, "!seigroc evol I")
    });
  });
});
