import angular from 'angular';
import Vue from 'vue';
import 'ngVue'
import helloComponent from './helloComponent.vue'
import secondComponent from './secondComponent.vue'
import randomInputComponent from './randomInputComponent/randomInput.component'
import randomStringComponent from './randomInputComponent/randomString.component.vue'

const ComponentsModule = angular
  .module('app.components', ['ngVue'])
  .component('randomInputComponent', randomInputComponent)
  .value('randomStringComponent', Vue.component('random-string-component', randomStringComponent))
  .value('HelloComponent', Vue.component('hello-component', helloComponent))
  .value('secondComponent', Vue.component('second-component', secondComponent));

export default ComponentsModule;
