Shortly.signupView = Backbone.View.extend({

	template: Templates['signup'],

	render: function() {
		this.$el.html( this.template() );
		return this;
	},
});


