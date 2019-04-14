import angular from 'angular';
import Vue from 'vue';
import 'ngVue'
import helloComponent from './helloComponent.vue'
import secondComponent from './secondComponent.vue'

const ComponentsModule = angular
  .module('app.components', ['ngVue'])
  .value('HelloComponent', Vue.component('hello-component', helloComponent))
  .value('secondComponent', Vue.component('second-component', secondComponent));

export default ComponentsModule;
