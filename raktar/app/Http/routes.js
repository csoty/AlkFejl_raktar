'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'RaktarController.index');

Route.get('/register','UserController.showReg');
Route.post('/register','UserController.reg');
Route.get('/login', 'UserController.showLogin');
Route.post('/login', 'UserController.login');
Route.get('/logout', 'UserController.logout');
Route.post('/logout', 'UserController.logout');

Route.get('/letrehozas', 'RaktarController.showNewItem');
Route.post('/letrehozas', 'RaktarController.createNewItem');

Route.get('/bevetelez', 'RaktarController.chooseItemToAdd');
Route.post('/setqty', 'RaktarController.setQtyToAdd');
Route.post('/updQ', 'RaktarController.updateQty');

Route.get('/torles', 'RaktarController.chooseItemToDel');
Route.post('/torles', 'RaktarController.deleteItem');

Route.get('/kiadas', 'RaktarController.chooseItemToDispose');
Route.post('/setdispqty', 'RaktarController.setQtyToDispose');
Route.post('/dispose', 'RaktarController.dispose');

Route.get('/listKeszlet', 'RaktarController.listAllItems');