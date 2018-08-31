var assert = require('assert');
var BankAccount = require("../bank-account").BankAccount

describe("Bank account", () => {
    if("should have no money on deposit in the beginning", () => {
        
        var obj = {
            foo: "hello world",
            fn : function() {
                console.log(this.foo.split(""));
            }
        }
        var boo = obj.fn;
        console.log(boo());
        
        //assert.equal(BankAccount.balance, 0);
    });
});

/**
 * make object shop with :
 *  invertory : {}                  list of items
 *  addItem : function
 *  orderItem : function
 *  shipTime : function
 *  findNewItems : function         search by guiid
 *  
 * make object item :
 *  id : 'guiid'
 *  price :
 *  status :
 * title :
 * 
 * write test for this shop
 */