animation: bounce 2s  ease-out ;

        @keyframes bounce {
            0%{transform: rotateZ(0deg) scale(1);}
            10%{transform: rotateZ(5deg) scale(0.8);}
            20%{transform: rotateZ(2deg) scale(1);}
            30%{transform: rotateZ(7deg) scale(0.8);}
            40%{transform: rotateZ(-5deg) scale(1);}
            50%{transform: rotateZ(3deg) scale(0.8);}
            60%{transform: rotateZ(-4deg) scale(1);}
            70%{transform: rotateZ(0deg) scale(0.8);}
            80%{transform: rotateZ(7deg) scale(1);}
            90%{transform: rotateZ(-2deg) scale(0.8);}
            100%{transform: rotateZ(0deg) scale(1);}
        }

 <!-- /////////////////////////////////////////////// -->

 <h1>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Some title text
			</h1>

<!-- ///////////////////////////////////////////////// -->


main {
	width: 100%;
	height: 100vh;
	@include fAround(column);
	transform-style: preserve-3d;
	perspective: 1000px;
}
h1 {
	position: relative;
    font-size: 100px;
    padding: 20px;
	color: cornsilk;
	background: #eb5757;
	background: linear-gradient(to top, #eb5757, #000000);
	background-clip: text;
	-webkit-text-fill-color: transparent;
    overflow: hidden;
    cursor: pointer;

	span {
		position: absolute;
		background: #1c92d2;
		border-radius: 20px;
		transition: transform 200ms ease;
	}
	& span:nth-of-type(1) {
		width: var(--percentage);
		height: var(--size);
		left: 0;
		top: 0;
		transform: translateX(-100%);
		background: white;
	}
	& span:nth-of-type(2) {
		width: var(--size);
		height: var(--percentage);
		right: 0;
		top: 0;
		transform: translateY(-100%);
		background: white;
		transition-delay: 200ms;
	}
	& span:nth-of-type(3) {
		width: var(--percentage);
		height: var(--size);
		left: 0;
		bottom: 0;
		transform: translateX(100%);
		background: white;
		transition-delay: 400ms;
	}
	& span:nth-of-type(4) {
		width: var(--size);
		height: var(--percentage);
		left: 0;
		top: 0;
		transform: translateY(100%);
		background: white;
		transition-delay: 600ms;
	}
	&:hover {
		animation: stretch 2s forwards 1 ease-in-out;

		@keyframes stretch {
			0% {
				transform: rotateZ(0deg);
			}

			50% {
                transform: rotateZ(-30deg);
			}

			100% {
				transform: rotateZ(0deg);
			}
		}
	}
	&:hover span {
		transform: translate(0, 0);
	}
}