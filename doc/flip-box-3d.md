<div class="flip-container">
		<div class="flip">
			<div class="flip-front">
				<h2>Front Side</h2>
			</div>
			<div class="flip-back">
				<h2>Back Side</h2>
			</div>
		</div>
	</div>

<!-- CSS -->

.flip-container{
    width: 50%;
    height: 40vh;
    perspective: 1000px;
    background-color: transparent;
    // border: 1px solid #f1f1f1;
    margin: 10vh auto;
}

.flip{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-container:hover .flip{
    // transform: rotateY(180deg);
    transform: rotateX(180deg);
}
.flip-front,
.flip-back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.flip-front{
    background-color: var(--green);
    color: white;
}

.flip-back{
    background-color: var(--yellow);
    // transform: rotateY(180deg);
    transform: rotateX(180deg);
}