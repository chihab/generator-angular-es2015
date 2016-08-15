import <%= objName %>Component from './<%= name %>.component';
// import <%= name %>Form from './<%= name %>-form'; 

const <%= objName %> = angular.module('<%= name %>', [
    // <%= name %>Form
]);

<%= objName %>.component('<%= name %>', <%= objName %>Component)

export default <%= objName %>.name;