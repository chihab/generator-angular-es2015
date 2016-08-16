import <%= objName %>Component from './<%= name %>.component';

const <%= objName %> = 
    angular.module('<%= name %>', [])
        .component('<%= camelName %>', <%= objName %>Component)
        .config(($stateProvider, $urlRouterProvider) => {
            $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                component: '<%= camelName %>'
            })
        })

export default <%= objName %>.name;