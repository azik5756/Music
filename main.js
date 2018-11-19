

    var kakawka=[];
		var car=[];
		var avatar=[];
		var checkpoint=[];
		var kkk=0;
		var g=$('.rolex');
		var a=document.getElementById("rt");
        var lol=document.getElementById('kiol');
        var rooney=0;
        var jack;
        var krutoy;
        var renat=g.css("left");
        var tipsiz=0;
        var newLeft,newTop;
        var krisa=[];
        var mister;
        var flash,dcomics;
        var knopkaplus;
        var riko,hero,bibi;
        var bmw=[],audi=[];
        var objects=new Object();
        var colors=["#F2A746","#F74E42","#EDB88B","#E6952D","#67CEF6","#177E89","#084C61","#EF3340","#FFC857","#E55934"];
        a.width=window.innerWidth;
        a.height="1200";
          for(var some=0;some<25;some++)
		{
			objects[some]={numberx:[],numbery:[],beginx:[],beginy:[],yumrux:[],yumruy:[],kruqx:[],kruqy:[]};
		}


    function tonight()
    {
      if(daladno.length>0)
      {
      objects=zz;
      avatar=daladno;
      checkpoint=xalva;
      console.log(objects);
      console.log(avatar);
      console.log(checkpoint);
      flash=document.getElementsByClassName('flash');
      jack=document.getElementsByClassName('jack');
      knopkaplus=document.getElementsByClassName('kino');
      anormal=document.getElementsByClassName('anormal');
      for(var i=0;i<jack.length;i++)
      {
        jack[i].addEventListener("mousedown", krasava);
      }
      for(var y=0;y<flash.length;y++)
      {
        flash[y].addEventListener("mousedown", oneplus);
      }
      for(var h=0;h<knopkaplus.length;h++)
      {
         knopkaplus[h].addEventListener("click", drakula);
      }
        for(var j=0;j<anormal.length;j++)
      {
         anormal[j].addEventListener("mousedown", kikobzor);
      }

    }
  }
    setTimeout(tonight,1000);


/*First create yoyoyoyo by master*/


  		function mission()
		{
          var rcol=Math.floor(Math.random() * 10);
          var input=document.createElement('input');
          var ivedik=document.createElement('i');
          var x,y;
          var uxtikakoy=document.getElementsByClassName('jack');
          input.type="text";
          input.placeholder="2";
          input.className="jack "+uxtikakoy.length;
          input.addEventListener("mousedown", krasava);
          ivedik.addEventListener("click", drakula);
	      input.style.backgroundColor=colors[rcol];
	      ivedik.style.display='block';
	      ivedik.style.fontSize='10px';
	      ivedik.style.lineHeight='25px';
	      ivedik.className="fa fa-plus kino "+uxtikakoy.length;
	      for(var i=0;i<1000;i++)
	        {
	  	      x=Math.random()*100;
	  	      y=Math.random()*200;
	  	      if(x<84 && y>180)
	  	        {
	  	          break;
	  	        }
	        }
	      input.style.top=y+'px';
	      input.style.left=x+'%';
	      ivedik.style.top=y+'px';
	      ivedik.style.left=x+'%';
	      var relax=(window.innerWidth*x/100)+70;
	      car.push(relax);
	      kakawka.push(y);
	      document.body.insertBefore(input,a);
	      document.body.insertBefore(ivedik,a);
	      jack=document.getElementsByClassName('jack');
	      knopkaplus=document.getElementsByClassName('kino');
          var dr=a.getContext("2d");
          dr.shadowOffsetX = 0;
          dr.shadowOffsetY = 0;
          dr.shadowBlur = 20;
          dr.shadowColor = colors[rcol];
          dr.strokeStyle =colors[rcol];
          dr.lineWidth='6';
          dr.lineCap="round";
          dr.beginPath();
          dr.moveTo(parseInt(renat),90);
          dr.lineTo(car[rooney],kakawka[rooney]);
          dr.stroke();
          avatar.push(car[rooney]);
          checkpoint.push(kakawka[rooney]);
	      rooney++;
	}
	function krasava(e)
	{
		var jackcoords=this.getBoundingClientRect();
		var kill=this.className;
		var react=kill.length-1;
		var tip=kill[react];
    console.log(tip);
		var dr=a.getContext("2d");
        var shiftX=e.pageX-jackcoords.left;
        var shiftY=e.pageY-jackcoords.top;
        var rcol=Math.floor(Math.random() * 10);
       dr.shadowOffsetX = 0;
       dr.shadowOffsetY = 0;
       dr.shadowBlur = 20;
       dr.shadowColor = colors[rcol];
       dr.strokeStyle =colors[rcol];
       dr.lineWidth='6';
       dr.lineCap="round";
        document.onmousemove=function animate(e)
      {
         newLeft=e.pageX-shiftX;
         newTop=e.pageY-shiftY;
         jack[tip].style.left=newLeft+'px';
         jack[tip].style.top=newTop+'px';
         knopkaplus[tip].style.left=newLeft+'px';
         knopkaplus[tip].style.top=newTop+'px';
         dr.clearRect(0, 0, innerWidth, innerHeight);
         dr.beginPath();
         avatar[tip]=newLeft+90;
         checkpoint[tip]=newTop;
         var doctor=objects[tip].beginx;
         var teatr=objects[tip].kruqx;
         for(var deadpool=0;deadpool<doctor.length;deadpool++)
         {
         	objects[tip].beginx[deadpool]=newLeft+90;
         	objects[tip].beginy[deadpool]=newTop+57;
         }
         if(teatr.length>0)
         {
         	  for(var deadpool=0;deadpool<teatr.length;deadpool++)
         {
         	objects[tip].kruqx[deadpool]=newLeft+90;
         	objects[tip].kruqy[deadpool]=newTop+57;
         }
         }
         for(var i=0;i<avatar.length;i++)
         {
          dr.moveTo(parseInt(renat),90);
          dr.lineTo(avatar[i],checkpoint[i]);
          }
               for(var kong=0;kong<15;kong++)
          {
          	var massiv=objects[kong].beginx;
          	var kowka=objects[kong].kruqx;
          	if(massiv.length>0)
          	{
          		for(var king=0;king<massiv.length;king++)
          		{
          		   dr.moveTo(objects[kong].beginx[king],objects[kong].beginy[king]);
          		   dr.lineTo(objects[kong].numberx[king],objects[kong].numbery[king]);
          		}
          	}
          	 	if(kowka.length>0)
          	{
          		   	  for(var deadpool=0;deadpool<kowka.length;deadpool++)
         {
         	dr.moveTo(objects[kong].yumrux[deadpool],objects[kong].yumruy[deadpool]);
         	dr.lineTo(objects[kong].kruqx[deadpool],objects[kong].kruqy[deadpool]);
         }
          	}
          }
         dr.moveTo(parseInt(renat),90);
         dr.lineTo(newLeft+90,newTop);
          for(var deadpool=0;deadpool<doctor.length;deadpool++)
         {
         	dr.moveTo(newLeft+90,newTop+57);
         	dr.lineTo(objects[tip].numberx[deadpool],objects[tip].numbery[deadpool]);
         }
       
         dr.stroke();
      }
       document.onmouseup=function(e)
      {
         document.onmousemove=document.onmouseup=null;
      }
      return false;
	}



	/*Second creating by dojo*/



	function drakula()
	{
	  var rcol=Math.floor(Math.random() * 10);
      var input=document.createElement('input');
      var block=document.createElement('div');
      var x,y;
      var relax=(window.innerWidth*x/100)+70;
      var kill=this.className;
	  var react=kill.length-1;
	  var tip=kill[react];
      input.type="text";
      input.placeholder="3";
      flash=document.getElementsByClassName('flash');
      riko=document.getElementsByClassName('flash '+tip);
      input.className="flash "+tip+" "+tip+riko.length;
      block.className="anormal "+tip+riko.length;
      input.addEventListener("mousedown", oneplus);
      block.addEventListener("mousedown", kikobzor);
      krutoy=this.getBoundingClientRect();
	  input.style.backgroundColor=colors[rcol];
	  block.style.backgroundColor=colors[rcol];
	  for(var i=0;i<1000;i++)
	  {
	  	x=Math.random()*100;
	  	y=Math.random()*400;
	  	if(x<84 && y>380)
	  	{
	  	   break;
	  	}
	  }
	  input.style.top=y+'px';
	  input.style.left=x+'%';
	  block.style.top=y-15+'px';
	  block.style.left=x+11+'%';
	  var relax=(window.innerWidth*x/100)+70;
	  document.body.insertBefore(input,lol);
	  document.body.insertBefore(block,a);
       var dr=a.getContext("2d");
       dr.shadowOffsetX = 0;
       dr.shadowOffsetY = 0;
       dr.shadowBlur = 20;
       dr.shadowColor = colors[rcol];
       dr.strokeStyle =colors[rcol];
       dr.lineWidth='6';
       dr.lineCap="round";
       dr.beginPath();
       dr.moveTo(krutoy.left+95,krutoy.top+57);
       dr.lineTo(relax,y);
       var neo=objects[tip].numberx;
       var jackpop=objects[tip].numbery;
       var matrix=objects[tip].beginx;
       var matrix_r=objects[tip].beginy;
       var cssmaster=this.getBoundingClientRect();
       neo.push(relax);
       jackpop.push(y);
       matrix.push(cssmaster.left+90);
       matrix_r.push(cssmaster.top+57);
       dr.stroke();
       kkk++;
       tipsiz++;
	}
	function oneplus(e)
	{
       var jackcoords=this.getBoundingClientRect();
		var kill=this.className;
		hero=document.getElementsByClassName(kill);
		var react=kill.length-1;
		var hey=kill.length-2;
		var angular=kill.length-4;
		var tip=kill[react];
		var ctocto=kill[angular];
		var dr=a.getContext("2d");
    var shiftX=e.pageX-jackcoords.left;
    var shiftY=e.pageY-jackcoords.top;
    var rcol=Math.floor(Math.random() * 10);
        bmw=new Array();
        audi=new Array();
        for(var tupoy=0;tupoy<15;tupoy++)
        {
        	var zdorovo=objects[tupoy].yumrux;
        	for(var monro=0;monro<zdorovo.length;monro++)
        	{
        	    if((jackcoords.left+90)==zdorovo[monro])
        	    {
                   bmw.push(tupoy);
                   audi.push(monro);
               }	
        	}
        }
        var gatsby=document.getElementsByClassName('anormal '+kill[hey]+tip);
       dr.shadowOffsetX = 0;
       dr.shadowOffsetY = 0;
       dr.shadowBlur = 20;
       dr.shadowColor = colors[rcol];
       dr.strokeStyle =colors[rcol];
       dr.lineWidth='6';
       dr.lineCap="round";
        document.onmousemove=function kserokopiya(e)
      {
         newLeft=e.pageX-shiftX;
         newTop=e.pageY-shiftY;
         hero[0].style.left=newLeft+'px';
         hero[0].style.top=newTop+'px';
         gatsby[0].style.left=newLeft+190+'px';
         gatsby[0].style.top=newTop-15+'px';
         dr.clearRect(0, 0, innerWidth, innerHeight);
         dr.beginPath();
         objects[ctocto].numberx[tip]=newLeft+90;
         objects[ctocto].numbery[tip]=newTop;
         for(var lone=0;lone<bmw.length;lone++)
         {
         	var cimi=audi[lone];
         	var haca=bmw[lone];
         	objects[haca].yumrux[cimi]=newLeft+90;
         	objects[haca].yumruy[cimi]=newTop+57;
         }
         for(var i=0;i<avatar.length;i++)
         {
          dr.moveTo(parseInt(renat),90);
          dr.lineTo(avatar[i],checkpoint[i]);
         }
         for(var kong=0;kong<25;kong++)
          {
          	var massiv=objects[kong].beginx;
          	var georgi=objects[kong].yumrux;
          	if(massiv.length>0)
          	{
          		for(var king=0;king<massiv.length;king++)
          		{
          		   dr.moveTo(objects[kong].beginx[king],objects[kong].beginy[king]);
          		   dr.lineTo(objects[kong].numberx[king],objects[kong].numbery[king]);
          		}
          	}
          	if(georgi.length>0)
          	{
          		for(var king=0;king<georgi.length;king++)
          		{
          		   dr.moveTo(objects[kong].yumrux[king],objects[kong].yumruy[king]);
          		   dr.lineTo(objects[kong].kruqx[king],objects[kong].kruqy[king]);
          		}
          	}
          }

         dr.moveTo(objects[ctocto].beginx[tip],objects[ctocto].beginy[tip]);
         dr.lineTo(newLeft+90,newTop);
            
         //      for(var lone=0;lone<bmw.length;lone++)
         // {
         // 	var cimi=audi[lone];
         // 	var haca=bmw[lone];
         // 	objects[haca].yumrux[cimi]=newLeft+90;
         // 	objects[haca].yumruy[cimi]=newTop+57;
         // 	dr.moveTo(objects[haca].yumrux[cimi],objects[haca].yumruy[cimi]-50);
         // 	dr.lineTo(objects[haca].kruqx[cimi],objects[haca].kruqy[cimi]);
         // }
         dr.stroke();
      }
       document.onmouseup=function(e)
      {
         document.onmousemove=document.onmouseup=null;
         audi.splice(0,audi.length);
      }
      return false;
	}



    /*The line for connectin how I do it I don't know but I do it;)*/


	function kikobzor(e)
	{
        dcomics=this.getBoundingClientRect();
		var kill=this.className;
		var dr=a.getContext("2d");
        var shiftX=e.pageX-dcomics.left;
        var shiftY=e.pageY-dcomics.top;
        var rcol=Math.floor(Math.random() * 10);
        dr.shadowOffsetX = 0;
        dr.shadowOffsetY = 0;
        dr.shadowBlur = 20;
        dr.shadowColor = colors[rcol];
        dr.strokeStyle =colors[rcol];
        dr.lineWidth='6';
        dr.lineCap="round";
        document.onmousemove=function morfin(e)
      {
         newLeft=e.pageX-shiftX;
         newTop=e.pageY-shiftY;
         dr.clearRect(0, 0, innerWidth, innerHeight);
         dr.beginPath();
         for(var i=0;i<avatar.length;i++)
         {
          dr.moveTo(parseInt(renat),90);
          dr.lineTo(avatar[i],checkpoint[i]);
         }
         for(var kong=0;kong<15;kong++)
          {
          	var massiv=objects[kong].beginx;
          	if(massiv.length>0)
          	{
          		for(var king=0;king<massiv.length;king++)
          		{
          		   dr.moveTo(objects[kong].beginx[king],objects[kong].beginy[king]);
          		   dr.lineTo(objects[kong].numberx[king],objects[kong].numbery[king]);
          		}
          	}
          	var ball_dlina=objects[kong].yumrux;

          	if(ball_dlina.length>0)
          	{
          		for(var king=0;king<ball_dlina.length;king++)
          		{
          		   dr.moveTo(objects[kong].yumrux[king],objects[kong].yumruy[king]);
          		   dr.lineTo(objects[kong].kruqx[king],objects[kong].kruqy[king]);
          		}
          	}
          }
         dr.moveTo(dcomics.left-100,dcomics.top+5);
         dr.lineTo(newLeft,newTop);
         dr.stroke();
         bibi=newLeft;
         manamana=newTop;
      }
       document.onmouseup=function(e)
      {
         document.onmousemove=document.onmouseup=null;
         var kebab=document.getElementsByClassName('jack');
         for(var nana=0;nana<kebab.length;nana++)
         {
         	var marvel=kebab[nana].getBoundingClientRect();
         	if(bibi-marvel.left<192 && manamana-marvel.top<57 && bibi-marvel.left>0 && manamana-marvel.top>0)
         	{
         		var object1=objects[nana].yumrux;
                object1.push(dcomics.left-100);
                var object2=objects[nana].yumruy;
                object2.push(dcomics.top-5);
                var object3=objects[nana].kruqx;
                object3.push(bibi);
                var object4=objects[nana].kruqy;
                object4.push(manamana);	
                break;
         	}

         }
      }
      return false;
	}  


  /*Insert into server*/

  function creative()
{
    var number=document.getElementsByTagName('number');
    var anormal=document.getElementsByClassName('anormal');
    var x=new Array();
    var y=new Array();
    var z=new Array();
    var trump=new Array();
    for(var i=0;i<flash.length;i++)
    {
      x.push(flash[i].outerHTML);
    }
    for(var t=0;t<jack.length;t++)
    {
      y.push(jack[t].outerHTML);
    }
    for(var h=0;h<anormal.length;h++)
    {
      z.push(anormal[h].outerHTML);
    }
    for(var g=0;g<knopkaplus.length;g++)
      {
        trump.push(knopkaplus[g].outerHTML);
      }
    $.ajax({
      url:"jack_daniels.php",
      type:"POST",
      data:({name:JSON.stringify(x),surname:JSON.stringify(y),atr:JSON.stringify(avatar),check:JSON.stringify(checkpoint),objects:JSON.stringify(objects),anormal:JSON.stringify(z),spider:JSON.stringify(trump)}),
        success:lala
    });
    function lala(data)
    {
        var hacker=JSON.parse(data);
        
    }
}

