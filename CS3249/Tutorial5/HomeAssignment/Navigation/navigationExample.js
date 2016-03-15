var MenuExample = React.createClass({

	getInitialState: function() {
		return { focused: 0 };
	},

	clicked: function(index) {
		// The click handler will update the state with
		// the index of the focused menu entry
		this.setState({ focused: index });
	},

	render: function() {

		// Here we will read the items property, which was passed
		// as an attribute when the component was created

		var self = this;

		// The map method will loop over the array of menu entries,
		// and will return a new array with <li> elements.

		return ( 
			< div >
			< ul > {
				this.props.items.map(function(m, index) {

					var style = '';
					console.log(m);
					console.log(self);

					if (self.state.focused == index) {
						style = 'focused';
					}

					// Notice the use of the bind() method. It makes the
					// index available to the clicked function:
					return <a href={'#'+m[1]}><li className = { style }
					onClick = { self.clicked.bind(self, index) } > { m[0] } < /li></a>;

				})
			}

			< /ul>
			< p > Selected: { this.props.items[this.state.focused][0] } < /p> < /div>
			


		);

	}
});

// Render the menu component on the page, and pass an array with menu options
var menuItems = [['Home', '/home'], ['Services', '/services'], ['About','/about'], ['Contact us','/contact']];

ReactDOM.render( 
	<MenuExample items = { menuItems }/>,
	// items = {['Home', 'Services', 'About', 'Contact us']},
	document.getElementById('container')
);