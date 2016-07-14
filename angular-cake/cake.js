angular.module('CakeApp', []);

angular.module('CakeApp')
	.controller('menu', menu)

angular.module('CakeApp')
	.controller('menuOrderCtrl', [
    'CheesecakeFactory',
    menuOrderCtrl
  ])

angular.module('CakeApp')
	.controller('PointOFSale', ['CheesecakeFactory', POSController])

angular.module('CakeApp')
  .factory('CheesecakeFactory', CheesecakeFactory)

function POSController(CheesecakeFactory) {
	this.greeting = "Let's sell some cake!";
	this.menuItems = CheesecakeFactory.menuItems;
}

menu.$inject = ['CheesecakeFactory']

function menu (CheesecakeFactory) {
    console.info('menu:CheesecakeFactory', CheesecakeFactory);
    var menu = this;
    menu.greeting = "Ain't no pound cake around here!"
    menu.newMenuItem = {}

	  menu.items = CheesecakeFactory.menuItems;

    menu.newItem = function() {
      menu.items.push(menu.newMenuItem)
    }
}

function menuOrderCtrl(CheesecakeFactory) {
  var menuOrder = this;
  console.info('menuOrderCtrl:CheesecakeFactory', CheesecakeFactory);
}

function CheesecakeFactory(){
	var menuItems = [
  {
    name: 'Egg Roll',
    calories: 6000,
    deliciousness: 3,
    flavor: 'Southwestern',
    price: 50
  },
  {
    name: 'Strawberry Cheesecake',
    calories: 1500,
    deliciousness: 9,
    flavor: 'vanilla',
    price: 9.95
  },
  {
    name: 'Turtle Cheesecake',
    calories: 1800,
    deliciousness: 10,
    flavor: 'chocolate',
    price: 13
  }
  ]

	// Factories REQUIRE a return statement
	// Whatever you RETURN, is EXACTLY what you get access to in your controllers
	// 99% of the time, your Factories will return OBJECTS

	// Exporting data on an OBJECT will make your life much easier.
    // If you're always expecting the factory to be an object,
    // you can add/remove properties from the object WITHOUT having to
    // change code you've already written (for the most part)

    // Array
	// return menuItems

    // VS

    // Object

	// return {
	//	menuItems : menuItems,
	//  suppliers : []
	//}

	// the ONLY information you can get out of a factory is what you RETURN
	return {
    menuItems: menuItems
  }
}
