function Nav() {
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(
			"div",
			{ "class": "logo-block" },
			React.createElement("img", { src: "img/logo.png", "class": "logo-top", alt: "logo" }),
			React.createElement("img", { src: "img/menu-corner.png", "class": "menu-corner", alt: "blue-corner" })
		),
		React.createElement(
			"menu",
			null,
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "#" },
					"item1"
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "#" },
					"item2"
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "#" },
					"item3"
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "#" },
					"item4"
				)
			),
			React.createElement(
				"li",
				null,
				React.createElement(
					"a",
					{ href: "#" },
					"item5"
				)
			)
		),
		React.createElement(
			"div",
			{ "class": "menu-btn" },
			React.createElement(
				"a",
				{ href: "#" },
				"button text"
			)
		)
	);
}
ReactDOM.render(React.createElement(Nav, null), document.getElementById('nav'));

function Header() {
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(
			"div",
			{ "class": "header-text" },
			React.createElement(
				"div",
				{ "class": "header-text__title" },
				React.createElement("img", { src: "img/label-header.png", alt: "label-header" }),
				React.createElement(
					"h1",
					null,
					"Virginia Travel For Kids"
				)
			),
			React.createElement(
				"div",
				{ "class": "header-text__btns" },
				React.createElement(
					"a",
					{ href: "#" },
					React.createElement("i", { "class": "fas fa-cloud-download-alt" }),
					"Button text"
				),
				React.createElement(
					"a",
					{ href: "#" },
					React.createElement("i", { "class": "fas fa-cloud-download-alt" }),
					"Button text"
				),
				React.createElement(
					"a",
					{ href: "#" },
					React.createElement("i", { "class": "far fa-play-circle" }),
					"Watch video"
				)
			)
		),
		React.createElement(
			"div",
			{ "class": "timer" },
			React.createElement(
				"div",
				{ "class": "timer-wrap" },
				React.createElement(
					"p",
					null,
					"Title Block"
				),
				React.createElement(
					"div",
					{ "class": "block-date" },
					React.createElement(
						"div",
						{ "class": "date-item" },
						React.createElement(
							"div",
							{ "class": "date-item__name" },
							"days"
						),
						React.createElement(
							"div",
							{ "class": "date-item__number", id: "day" },
							"00"
						)
					),
					React.createElement(
						"div",
						{ "class": "date-item" },
						React.createElement(
							"div",
							{ "class": "date-item__name" },
							"hours"
						),
						React.createElement(
							"div",
							{ "class": "date-item__number", id: "hour" },
							"00"
						)
					),
					React.createElement(
						"div",
						{ "class": "date-item" },
						React.createElement(
							"div",
							{ "class": "date-item__name" },
							"minutes"
						),
						React.createElement(
							"div",
							{ "class": "date-item__number", id: "minute" },
							"00"
						)
					),
					React.createElement(
						"div",
						{ "class": "date-item seconds" },
						React.createElement(
							"div",
							{ "class": "date-item__name" },
							"seconds"
						),
						React.createElement(
							"div",
							{ "class": "date-item__number", id: "second" },
							"00"
						)
					),
					React.createElement("div", { "class": "clear" })
				)
			)
		)
	);
}

ReactDOM.render(React.createElement(Header, null), document.getElementById('head'));

function Slider() {
	return React.createElement(
		"div",
		{ "class": "slider" },
		React.createElement(
			"div",
			{ "class": "viewport" },
			React.createElement(
				"div",
				{ "class": "sliderwrapper" },
				React.createElement(
					"div",
					{ "class": "slide" },
					React.createElement(
						"p",
						null,
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					),
					React.createElement(
						"div",
						{ "class": "slide-sign" },
						React.createElement(
							"div",
							{ "class": "slide-sign__logo" },
							React.createElement("img", { src: "img/slider-logo.png", alt: "" })
						),
						React.createElement(
							"div",
							{ "class": "slide-sign__author" },
							React.createElement(
								"span",
								null,
								"Roy Rivera"
							),
							React.createElement(
								"span",
								null,
								"FrontEnd Developer"
							),
							React.createElement(
								"span",
								null,
								"S-PRO"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ "class": "slide" },
					React.createElement(
						"p",
						null,
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					),
					React.createElement(
						"div",
						{ "class": "slide-sign" },
						React.createElement(
							"div",
							{ "class": "slide-sign__logo" },
							React.createElement("img", { src: "img/slider-logo.png", alt: "" })
						),
						React.createElement(
							"div",
							{ "class": "slide-sign__author" },
							React.createElement(
								"span",
								null,
								"Roy Rivera"
							),
							React.createElement(
								"span",
								null,
								"FrontEnd Developer"
							),
							React.createElement(
								"span",
								null,
								"S-PRO"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ "class": "slide" },
					React.createElement(
						"p",
						null,
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					),
					React.createElement(
						"div",
						{ "class": "slide-sign" },
						React.createElement(
							"div",
							{ "class": "slide-sign__logo" },
							React.createElement("img", { src: "img/slider-logo.png", alt: "" })
						),
						React.createElement(
							"div",
							{ "class": "slide-sign__author" },
							React.createElement(
								"span",
								null,
								"Roy Rivera"
							),
							React.createElement(
								"span",
								null,
								"FrontEnd Developer"
							),
							React.createElement(
								"span",
								null,
								"S-PRO"
							)
						)
					)
				)
			)
		),
		React.createElement(
			"div",
			{ "class": "slider-control" },
			React.createElement(
				"div",
				{ "class": "slider-control__block back" },
				React.createElement(
					"div",
					{ "class": "arrow-left" },
					React.createElement("i", { "class": "fas fa-long-arrow-alt-left" })
				)
			),
			React.createElement(
				"div",
				{ "class": "slider-control__block" },
				React.createElement(
					"p",
					null,
					React.createElement(
						"span",
						{ id: "counter" },
						"1"
					),
					" OF 3"
				)
			),
			React.createElement(
				"div",
				{ "class": "slider-control__block ahead" },
				React.createElement(
					"div",
					{ "class": "arrow-right" },
					React.createElement("i", { "class": "fas fa-long-arrow-alt-right" })
				)
			)
		)
	);
}
ReactDOM.render(React.createElement(Slider, null), document.getElementById('slider'));

function Roadmap() {
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(
			"div",
			{ "class": "roadmap-title" },
			React.createElement(
				"h1",
				null,
				"Party Jokes Startling But ",
				React.createElement("br", null),
				" Unnecessary"
			)
		),
		React.createElement(
			"div",
			{ "class": "roadmap-main-block" },
			React.createElement(
				"div",
				{ "class": "box1" },
				React.createElement(
					"div",
					{ "class": "item item-fade" },
					React.createElement("div", { "class": "line-long" }),
					React.createElement(
						"h2",
						null,
						"S1 2018"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet"
						),
						React.createElement(
							"li",
							null,
							"Consectetur adipiscing elit"
						),
						React.createElement(
							"li",
							null,
							"Sed do eiusmod tempor incididunt"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam"
						)
					)
				),
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item" },
					React.createElement("div", { "class": "line-long" }),
					React.createElement(
						"h2",
						null,
						"S3 2018"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet, consectetur adipiscing"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam, quis nostrud exercitation"
						)
					)
				),
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item item-five" },
					React.createElement("div", { "class": "line-long" }),
					React.createElement(
						"h2",
						null,
						"S2 2019"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						)
					)
				),
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item" },
					React.createElement("div", { "class": "line-long" }),
					React.createElement(
						"h2",
						null,
						"S4 2019"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam, quis nostrud exercitation"
						)
					)
				)
			),
			React.createElement(
				"div",
				{ "class": "divide" },
				React.createElement(
					"div",
					{ "class": "dot-tick" },
					React.createElement("i", { "class": "fas fa-check" })
				),
				React.createElement("div", { "class": "line-light-blue" }),
				React.createElement(
					"div",
					{ "class": "dot-now" },
					React.createElement("div", { "class": "dot-now__inner" })
				),
				React.createElement("div", { "class": "line-blue" }),
				React.createElement("div", { "class": "dot-ord dot-ord__first" }),
				React.createElement("div", { "class": "line-doted line-doted__first" }),
				React.createElement("div", { "class": "dot-ord dot-ord__second" }),
				React.createElement("div", { "class": "line-doted line-doted__second" }),
				React.createElement("div", { "class": "dot-ord dot-ord__third" }),
				React.createElement("div", { "class": "line-doted line-doted__third" }),
				React.createElement("div", { "class": "dot-ord dot-ord__fourth" }),
				React.createElement("div", { "class": "line-doted line-doted__fourth" }),
				React.createElement("div", { "class": "dot-ord dot-ord__fifth" }),
				React.createElement("div", { "class": "line-doted line-doted__fifth" }),
				React.createElement("img", { src: "img/down-logo-roadmap.png", alt: "logo" })
			),
			React.createElement(
				"div",
				{ "class": "box2" },
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item item-right" },
					React.createElement("div", { "class": "line-short" }),
					React.createElement(
						"h2",
						{ "class": "head-blue" },
						"S2 2018"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Consectetur adipiscing elit"
						),
						React.createElement(
							"li",
							null,
							"Sed do eiusmod tempor incididunt"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam"
						)
					)
				),
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item item-right" },
					React.createElement("div", { "class": "line-short" }),
					React.createElement(
						"h2",
						null,
						"S1 2019"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet"
						),
						React.createElement(
							"li",
							null,
							"Consectetur adipiscing elit"
						),
						React.createElement(
							"li",
							null,
							"Sed do eiusmod tempor incididunt"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam"
						)
					)
				),
				React.createElement("div", { "class": "item" }),
				React.createElement(
					"div",
					{ "class": "item item-right" },
					React.createElement("div", { "class": "line-short" }),
					React.createElement(
						"h2",
						null,
						"S3 2019"
					),
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
						),
						React.createElement(
							"li",
							null,
							"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
						)
					)
				),
				React.createElement("div", { "class": "item" })
			)
		),
		React.createElement(
			"div",
			{ "class": "road-last-block" },
			React.createElement(
				"div",
				{ "class": "block" },
				React.createElement(
					"h2",
					null,
					"2020"
				),
				React.createElement(
					"ul",
					null,
					React.createElement(
						"li",
						null,
						"Lorem ipsum dolor sit amet"
					),
					React.createElement(
						"li",
						null,
						"Consectetur adipiscing elit"
					)
				)
			),
			React.createElement("div", { "class": "block" })
		)
	);
}
ReactDOM.render(React.createElement(Roadmap, null), document.getElementById('roadmap'));

function Socials() {
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(
			"div",
			{ "class": "logo-bottom" },
			React.createElement("img", { src: "img/logo.png", "class": "logo-top", alt: "logo" })
		),
		React.createElement(
			"div",
			{ "class": "socials" },
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-telegram-plane" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-twitter" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-linkedin-in" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-facebook-f" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-medium-m" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-reddit-alien" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-btc" })
			),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement("i", { "class": "fab fa-github" })
			)
		),
		React.createElement("div", { "class": "empty" })
	);
}
ReactDOM.render(React.createElement(Socials, null), document.getElementById('socials'));

function Footer() {
	return React.createElement(
		"div",
		{ "class": "container" },
		React.createElement(
			"div",
			{ "class": "privacy" },
			React.createElement(
				"a",
				{ href: "#" },
				"Privacy Policy"
			),
			React.createElement(
				"a",
				{ href: "#" },
				"Terms & Conditions"
			),
			React.createElement(
				"a",
				{ href: "#" },
				"Tokensale Agreement"
			)
		),
		React.createElement(
			"div",
			{ "class": "copyright" },
			React.createElement(
				"p",
				null,
				"\xA9 2018 S-PRO - All rights reserved"
			)
		)
	);
}
ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));