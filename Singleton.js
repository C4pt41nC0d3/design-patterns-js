// Copyright (C) 2017  captaincode

// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option)
// any later version.

// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
// more details.

// You should have received a copy of the GNU General Public License along
// with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @pattern: Singleton
 * The singleton pattern restricts the instantiation of one class
 * to one single object, that allow get the same instance, there is
 * a lot of variations for this pattern.
 */

//in this example creates one single instance of one anonymous object 
var my_singleton = {
	first_property: "name",
	second_property: 2.0,
	first_method: function(){
		console.log("I am the first method");
	}
};

//the code need to improve and save private variables that doesn't change their states
var MySingleton = function(){
	//initializes a private variable
	var private_variable = "private variable";

	//show the private variable
	function showPrivateVariable(){
		console.log(private_variable);
	}

	//return an anonymous variable
	return {
		public_variable: "public variable",
		publicMethod: function(){
			//this closure shows the private variable
			showPrivateVariable();
		}
	}
};

var single_object = MySingleton();
single_object.publicMethod();
console.log(single_object.public_variable);

//implementation in ES6
class MySingleton{
	static function getSingle(){
		if(!MySingleton.private)
			MySingleton.private = (function(){
				//create something to protect
				return "something private";
			})();

		return MySingleton.private;
	}
}