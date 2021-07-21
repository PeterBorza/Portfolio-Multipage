const tick = () => {
    const now = new Date();  

    const h = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    // clock.innerHTML = `${h} : ${mins} : ${secs}`;
    clock.innerHTML = dateFns.format(now,'hh : mm : ss, dddd, Do MMM YYYY');

};

setInterval(tick, 1000);


<!-- script -->

		<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min.js" ></script>
