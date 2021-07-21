<!-- HTML -->

    <header>
    		<nav>
    			<div class="logo"></div>
    			<div class="nav-links">
    				<ul id="list">
    					<li class="green link" onclick="greenBox()">Green</li>
    					<li class="blue link" onclick="blueBox()">Blue</li>
    					<li class="yellow link" onclick="yellowBox()">Yellow</li>
    					<li class="red link" onclick="redBox()">Red</li>
    				</ul>
    			</div>
    		</nav>
    	</header>
    	<main>
    		<div class="green-box-style"></div>
    		<div class="blue-box-style"></div>
    		<div class="yellow-box-style"></div>
    		<div class="red-box-style"></div>
    	</main>
    	<footer></footer>

<!-- CSS -->

        main{
    width: 100%;
    height: 80vh;
    @include fAround(row);

}

.green-box-style{
width: 300px;
height: 300px;
background-color: var(--green);
transform: translateX(-120%);
transition: transform 400ms;
}
.blue-box-style{
width: 300px;
height: 300px;
background-color: var(--blue);
transform: scale(0);
transition: transform 400ms;

}
.yellow-box-style{
width: 300px;
height: 300px;
background-color: var(--yellow);
opacity: 0;
transition: transform 400ms;

}
.red-box-style{
width: 300px;
height: 300px;
background-color: var(--red);
transform: translateX(130%);
transition: transform 400ms;
}

.transition{
transform: translateX(0), scale(1);
opacity: 1;
}

<!-- Javascript -->

const logo = document.querySelector('.logo');

function image(source) {
source = `./img/${source}.png`;
const image = document.createElement('img');
image.setAttribute('src', source);
image.style.width = '140px';
image.style.height = '90px';

    return image;

}

const logoImg = image('angry-eye');
logo.prepend(logoImg);

function greenBox() {
document.querySelector('.green-box-style').style.transform = 'translateX(0)';

}
function redBox() {
document.querySelector('.red-box-style').style.transform = 'translateX(0)';

}
function blueBox() {
document.querySelector('.blue-box-style').style.transform = 'scale(1)';

}
function yellowBox() {
document.querySelector('.yellow-box-style').style.opacity = '1';

}
