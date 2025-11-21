// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};


// javascript에서 JS Doc 를 이용하여 타임을 정의하는 방법 
// Type 를 정의하면 오탈자 및 오류를 실행하기전에 미리 감지하고 수정 할 수 있다.

/**
 * @typedef {Object} Address
 * @property {string} city
 * @property {string} zipcode
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */


/**
 * @returns {Promise<User>}
 */
function fatchUser() {
	return axios.get(url);
}

fatchUser().then( function (response){
		response.address.city
});

function startApp() {
		fatchUser()
      .then(function (response) {
      // console.log(response);
      user = response.data;
			console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
			username.innerText = user.name;
			email.innerText = user.email;
			address.innerText = `${user.address.city} ${user.address.zipcode}`
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
