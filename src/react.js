function Nav() {
	return (
		<div class="container">
			<div class="logo-block">
				<img src="img/logo.png" class="logo-top" alt="logo" />
				<img src="img/menu-corner.png" class="menu-corner" alt="blue-corner" />
			</div>
			<menu>
				<li><a href="#">item1</a></li>
				<li><a href="#">item2</a></li>
				<li><a href="#">item3</a></li>
				<li><a href="#">item4</a></li>
				<li><a href="#">item5</a></li>
			</menu>
			<div class="menu-btn">
				<a href="#">button text</a>
			</div>
		</div>
	);
}
ReactDOM.render(<Nav />, document.getElementById('nav'));








function Header() {
	return (
		<div class="container">
		<div class="header-text">
			<div class="header-text__title">
				<img src="img/label-header.png" alt="label-header" />
				<h1>Virginia Travel For Kids</h1>
			</div>
			<div class="header-text__btns">
				<a href="#">
					<i class="fas fa-cloud-download-alt"></i>
					Button text
				</a>
				<a href="#">
					<i class="fas fa-cloud-download-alt"></i>
					Button text
				</a>
				<a href="#">
					<i class="far fa-play-circle"></i>
					Watch video
				</a>
			</div>
		</div>
		<div class="timer">
			<div class="timer-wrap">
				<p>Title Block</p>
				<div class="block-date">
					<div class="date-item">
						<div class="date-item__name">days</div>
						<div class="date-item__number" id="day">00</div>
					</div>
					<div class="date-item">
						<div class="date-item__name">hours</div>
						<div class="date-item__number" id="hour">00</div>
					</div>
					<div class="date-item">
						<div class="date-item__name">minutes</div>
						<div class="date-item__number" id="minute">00</div>
					</div>
					<div class="date-item seconds">
						<div class="date-item__name">seconds</div>
						<div class="date-item__number" id="second">00</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
	);
}

ReactDOM.render(<Header />, document.getElementById('head'));









function Slider() {
	return (
		<div class="slider">
			<div class="viewport">
				<div class="sliderwrapper">

					<div class="slide">
						<p>Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt 
							ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis 
							nostrud exercitation ullamco laboris 
							nisi ut aliquip ex ea commodo 
							consequat.</p>
						<div class="slide-sign">
							<div class="slide-sign__logo">
								<img src="img/slider-logo.png" alt="" />
							</div>
							<div class="slide-sign__author">
								<span>Roy Rivera</span>
								<span>FrontEnd Developer</span>
								<span>S-PRO</span>
							</div>
						</div>
					</div>

					<div class="slide">
						<p>Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt 
								ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam, quis 
								nostrud exercitation ullamco laboris 
								nisi ut aliquip ex ea commodo 
								consequat.</p>
						<div class="slide-sign">
							<div class="slide-sign__logo">
								<img src="img/slider-logo.png" alt="" />
							</div>
							<div class="slide-sign__author">
								<span>Roy Rivera</span>
								<span>FrontEnd Developer</span>
								<span>S-PRO</span>
							</div>
						</div>
					</div>

					<div class="slide">
						<p>Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt 
								ut labore et dolore magna aliqua. 
								Ut enim ad minim veniam, quis 
								nostrud exercitation ullamco laboris 
								nisi ut aliquip ex ea commodo 
								consequat.</p>
						<div class="slide-sign">
							<div class="slide-sign__logo">
								<img src="img/slider-logo.png" alt="" />
							</div>
							<div class="slide-sign__author">
								<span>Roy Rivera</span>
								<span>FrontEnd Developer</span>
								<span>S-PRO</span>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="slider-control">

				<div class="slider-control__block back">
					<div class="arrow-left">
						<i class="fas fa-long-arrow-alt-left"></i>
					</div>
				</div>

				<div class="slider-control__block">
					<p><span id="counter">1</span> OF 3</p>
				</div>

				<div class="slider-control__block ahead">
					<div class="arrow-right">
						<i class="fas fa-long-arrow-alt-right"></i>
					</div>
				</div>
			</div>
	</div>
	);
}
ReactDOM.render(<Slider />, document.getElementById('slider'));











function Roadmap() {
	return (
	<div class="container">
		<div class="roadmap-title">
			<h1>Party Jokes Startling But <br/> Unnecessary</h1>
		</div>

		<div class="roadmap-main-block">

			<div class="box1">
				<div class="item item-fade">
					<div class="line-long"></div>
					<h2>S1 2018</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Sed do eiusmod tempor incididunt</li>
						<li>Ut enim ad minim veniam</li>
					</ul>
				</div>
				<div class="item"></div>
				<div class="item">
					<div class="line-long"></div>
					<h2>S3 2018</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
						<li>Ut enim ad minim veniam, quis nostrud exercitation</li>
					</ul>
				</div>
				<div class="item"></div>
				<div class="item item-five">
					<div class="line-long"></div>
					<h2>S2 2019</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
						<li>Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
					</ul>
				</div>
				<div class="item"></div>
				<div class="item">
					<div class="line-long"></div>
					<h2>S4 2019</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
						<li>Ut enim ad minim veniam, quis nostrud exercitation</li>
					</ul>
				</div>
			</div>

			<div class="divide">
				<div class="dot-tick">
					<i class="fas fa-check"></i>
				</div>
				<div class="line-light-blue"></div>
				<div class="dot-now">
					<div class="dot-now__inner"></div>
				</div>
				<div class="line-blue"></div>
				<div class="dot-ord dot-ord__first"></div>
				<div class="line-doted line-doted__first"></div>
				<div class="dot-ord dot-ord__second"></div>
				<div class="line-doted line-doted__second"></div>
				<div class="dot-ord dot-ord__third"></div>
				<div class="line-doted line-doted__third"></div>
				<div class="dot-ord dot-ord__fourth"></div>
				<div class="line-doted line-doted__fourth"></div>
				<div class="dot-ord dot-ord__fifth"></div>
				<div class="line-doted line-doted__fifth"></div>
				<img src="img/down-logo-roadmap.png" alt="logo" />
			</div>

			<div class="box2">
				<div class="item"></div>
				<div class="item item-right">
					<div class="line-short"></div>
					<h2 class="head-blue">S2 2018</h2>
					<ul>
						<li>Consectetur adipiscing elit</li>
						<li>Sed do eiusmod tempor incididunt</li>
						<li>Ut enim ad minim veniam</li>
					</ul>
				</div>
				<div class="item"></div>
				<div class="item item-right">
					<div class="line-short"></div>
					<h2>S1 2019</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet</li>
						<li>Consectetur adipiscing elit</li>
						<li>Sed do eiusmod tempor incididunt</li>
						<li>Ut enim ad minim veniam</li>
					</ul>
				</div>
				<div class="item"></div>
				<div class="item item-right">
					<div class="line-short"></div>
					<h2>S3 2019</h2>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
								sed do eiusmod tempor incididunt ut labore et dolore</li>
						<li>Ut enim ad minim veniam, quis nostrud exercitation 
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
					</ul>
				</div>
				<div class="item"></div>
			</div>
		</div>

		<div class="road-last-block">
			<div class="block">
				<h2>2020</h2>
				<ul>
					<li>Lorem ipsum dolor sit amet</li>
					<li>Consectetur adipiscing elit</li>
				</ul>
			</div>
			<div class="block"></div>
		</div>
	</div>
	);
}
ReactDOM.render(<Roadmap />, document.getElementById('roadmap'));







function Socials() {
	return (
	<div class="container">
		<div class="logo-bottom">
			<img src="img/logo.png" class="logo-top" alt="logo"/>
		</div>
		<div class="socials">
			<a href="#"><i class="fab fa-telegram-plane"></i></a>
			<a href="#"><i class="fab fa-twitter"></i></a>
			<a href="#"><i class="fab fa-linkedin-in"></i></a>
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="#"><i class="fab fa-medium-m"></i></a>
			<a href="#"><i class="fab fa-reddit-alien"></i></a>
			<a href="#"><i class="fab fa-btc"></i></a>
			<a href="#"><i class="fab fa-github"></i></a>
		</div>
		<div class="empty"></div>
	</div>
	);
}
ReactDOM.render(<Socials />, document.getElementById('socials'));






function Footer() {
	return (
	<div class="container">
		<div class="privacy">
			<a href="#">Privacy Policy</a>
			<a href="#">Terms &amp; Conditions</a>
			<a href="#">Tokensale Agreement</a>
		</div>
		<div class="copyright">
			<p>© 2018 S-PRO - All rights reserved</p>
		</div>
	</div>
	);
}
ReactDOM.render(<Footer />, document.getElementById('footer'));