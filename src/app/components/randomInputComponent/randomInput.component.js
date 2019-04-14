import template from './randomInput.component.html';
import './randomInput.component.css';

export default {
  template,
  controller: ['$scope', class AppComponent {
    constructor ($scope) {
      this.$scope = $scope
      this.randomNumber = Math.round(Math.random() * 100)
    }
  }]
};
