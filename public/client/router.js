Shortly.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$el = options.el;
  },

  routes: {
    ''      : 'index',
    'create': 'create',
    'login' : 'login',
    'signup': 'signup'
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

  index: function(){
    var links = new Shortly.Links();
    var linksView = new Shortly.LinksView({ collection: links });
    this.swapView(linksView);
  },

  create: function(){
    console.log('create"s this', this);
    this.swapView(new Shortly.createLinkView());
  },

  login: function(){
    console.log('login"s this', this);
    this.swapView(new Shortly.loginView());
  },

  signup: function(){
    console.log('sdfslkdfljksdfjlsdfsjldf');
    console.log('signup"s this', this);
    // var that = new Shortly.signupView()
    // this.$el.html(that.render().el);
    this.swapView(new Shortly.signupView(), this);
  }

});
