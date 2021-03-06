$(document).ready(function(){
    $("#bonus-info").popover({
        content:"Usually comes from Wonders and Elemental Skills.",
        trigger:"hover",
        placement:"bottom",
    });
    $(".trigger").on('input click',function(){
    	var exp_table = []
    	var max_level = 150;
    	if($("#bonus-exp").val() < 0){
    		$("#bonus-exp").val(0);
    	}
        if($("#rd-weapon").is(':checked')){
        	exp_table = [
	        	0,0,10,22,36,52,70,90,112,136,162,190,220,255,295,340,390,450,520,600,690,790,910,1050,1210,1390,1590,1810,2050,2310,2590,2890,3210,
	        	3550,3910,4290,4690,5110,5550,6010,6490,6990,7510,8050,8610,9190,9790,10410,11050,11710,12390,13090,13810,14550,15310,16090,16890,17710,
	        	18550,19410,20290,21190,22110,23050,24010,24990,25990,27010,28050,29110,30190,31290,32410,33550,34710,35890,37090,38310,39550,40810,42090,
	        	43990,44710,46050,47410,48790,50190,51610,53050,54510,55990,57490,59010,60550,62110,63690,65290,66910,68550,70210,71890,77090,82490,88090,
	        	93890,99890,106090,112490,119090,125890,132890,140090,147490,155090,162890,170890,179090,187490,196090,204890,213890,223190,232790,242690,
	        	252890,263490,274490,285990,297990,310490,323590,337290,351590,366490,382090,398390,415390,433090,451590,470890,490990,511990,533990,556990,
	        	580990,605990,631990,658990,686990,715990,745990
        	];
        }
        if($("#rd-char").is(':checked')){
        	max_level = 100;
        	exp_table = [
        		0,0,30,100,200,320,460,620,800,1000,1220,1460,1720,2000,2300,2650,3050,3500,4000,4550,5150,5800,6500,7300,8200,9200,10300,11500,12800,14200,15700,
        		17300,19000,20800,22700,24700,26800,29000,31400,34000,36800,39800,43000,46400,50000,53800,57800,62000,66400,71000,75800,80800,86050,91550,97300,103300,
        		109550,116050,122800,129800,137050,144550,152350,160450,168850,177550,186550,196050,206050,216550,227550,239050,251050,263550,276550,290050,304050,318550,
        		333550,349050,365050,415050,435050,456050,478050,501050,525050,550050,576050,603050,703050,853050,1053050,1303050,1603050,1953050,2353050,2803050,3303050,
        		3803050,4803050
        	];
        }
        if($("#target-from").val() > max_level) {
            $("#target-from").val(1);
        }
        if($("#target-to").val() > max_level) {
            $("#target-to").val(40);
        }
        // main computation
        var current_exp = 0;
        if(parseInt($("#next-level").val()) > 0){
            current_exp = (exp_table[parseInt($("#target-from").val()) + 1] - exp_table[parseInt($("#target-from").val())]) - parseInt($("#next-level").val());
        }
        console.log("TO:" + $("#target-to").val());
        console.log("EXP TO:" + exp_table[$("#target-to").val()]);
        if ($("#target-from").val() <= max_level && $("#target-to").val() <= max_level){
            var total_exp = exp_table[$("#target-to").val()] - exp_table[$("#target-from").val()] - current_exp;
            var bonus_exp = $("#bonus-exp").val();
            var angel_per_exp = 100;
            var arch_per_exp = 500;

            if($("#cbBonus").is(':checked')){
                angel_per_exp = 150;
                arch_per_exp = 750
            }
            $("#angel").val(Math.ceil(total_exp / (angel_per_exp + Math.floor(angel_per_exp*(bonus_exp/100)))));
            $("#archangel").val(Math.ceil(total_exp / (arch_per_exp + Math.floor(arch_per_exp*(bonus_exp/100)))));
            $("#total-exp").val(total_exp);
        }        

        // error popups
        if($("#total-exp").val() < 0){
            $("#error-content").html("You cannot downgrade weapons/summons/characters.");
            $("#error-message").show();
        }
        else{
            $("#error-message").hide();
            $("#error-content").html("");
        }
    });
});