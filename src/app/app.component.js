import template from './app.component.html';
import './app.component.css';

export default {
  template,
  controller: ['$scope', class AppComponent {
    constructor ($scope) {
      this.$scope = $scope
      this.person = {
        firstname: 'Hello',
        lastName: 'World',
        description: 
          'ngVue helps you use Vue components in your angular application ' +
          'so that you are able to create a faster and reactive web interfaces.'
      };
    }

    displayHello (message) {
      console.log('Vue says:', message)
    }
  }]
};
