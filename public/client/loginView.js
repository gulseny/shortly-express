Shortly.loginView = Backbone.View.extend({


  template: Templates['login'],

  // events: {
  //   'submit': 'shortenUrl'
  // },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

});
