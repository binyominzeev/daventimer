var body;
var davenBarContainer;
var imacim;

var davenBar;

var idok=[
	94.32,
	14.30,
	64.19,
	27.69,
	51.70,
	44.67,
	140.75,
	42.71,
	43.45,
	94.36,
	78.75,
	28.49,
	50.63,
	91.59,
	33.60,
	54.59,
	34.98,
	24.95,
	14.73,
	13.53,
	66.92,
	106.97,
	22.46,
	54.22,
	29.00,
	15.83,
	24.76,
	55.14,
	39.95,
	55.69,
	29.27,
	40.23,
	41.06,
	35.62,
	448.76
];

var imak=[
	"ברוך אתה",
	"יהי רצון",
	"לעולם יהא אדם",
	"שמע ישראל",
	"אתה הוא ה",
	"קרבן תמיד",
	"קטורת",
	"מזמור שיר",
	"ברוך שאמר",
	"הודו",
	"רוממו",
	"מזמור לתודה",
	"יהי כבוד",
	"אשרי",
	"הללו א",
	"בללו ב",
	"הללו ג",
	"הללו ד",
	"הללו ה",
	"ברוך ה",
	"ויברך דוד",
	"ויושע",
	"ישתבך",
	"יוצר אור",
	"כולם אהובים",
	"קדוש",
	"לקל ברוך",
	"אהבה רבה",
	"שמע ישראל",
	"והיה אם שמוע",
	"ויאומר ה",
	"ויציב",
	"עזרת אבותנו",
	"תילות לקל",
	"עמידה"
];

var ima=0;

function ima_play() {
	davenBar.animate(1.0);
}

function ima_pause() {
	davenBar.stop();
}

function onLoad() {
    body = document.querySelector('body');
    davenBarContainer = document.querySelector('#daven-bar');
    imacim = document.querySelector('#daven-title');
    
    imacim.innerHTML=imak[ima];

	davenBar = new ProgressBar.Line(davenBarContainer, {
	  strokeWidth: 4,
	  duration: idok[ima]*1000,
	  color: '#8bf742',
	  trailColor: '#eee',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'},
	  step: function(state, shape, attachment) {
        if (shape.value() == 1) {
			ima++;
			if (ima < idok.length) {
				imacim.innerHTML=imak[ima];
				
				davenBar.set(0);
				davenBar.animate(1.0, {
					duration: idok[ima]*1000
				});
			} else {
				davenBar.stop();
			}
		}
	}
	});

  document.getElementById('ima_pause')
          .addEventListener('click', ima_pause);
  document.getElementById('ima_play')
          .addEventListener('click', ima_play);


    var davenList = document.querySelector('#daven-list');
    var imaLength=imak.length;
    
    for (var i = 0; i < imaLength; i++) {
		davenList.innerHTML = davenList.innerHTML + "<div class=\"imalink\" id=\"ima_" + i + "\">" + imak[i] + "</div>\n";
	}

}

window.onload = onLoad;
