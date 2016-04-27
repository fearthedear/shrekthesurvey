var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

var ages = ['21','19','20'];
var nations = ['Dutch','German','Belgian','French','Polish','Austrian','British'];
var teams = ['99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189'];

var q1 = ['#QID5-1-label', '#QID5-2-label', '#QID5-3-label', '#QID5-4-label', '#QID5-5-label', '#QID5-6-label', '#QID5-7-label'];
var q2 = ['#QID7-1-label', '#QID7-2-label', '#QID7-3-label', '#QID7-4-label', '#QID7-5-label', '#QID7-6-label', '#QID7-7-label'];
var q3 = ['#QID8-1-label', '#QID8-2-label', '#QID8-3-label', '#QID8-4-label', '#QID8-5-label', '#QID8-6-label', '#QID8-7-label'];
var q4 = ['#QID9-1-label', '#QID9-2-label', '#QID9-3-label', '#QID9-4-label', '#QID9-5-label', '#QID9-6-label', '#QID9-7-label'];
var q5 = ['#QID10-1-label', '#QID10-2-label', '#QID10-3-label', '#QID10-4-label', '#QID10-5-label', '#QID10-6-label', '#QID10-7-label'];
var q6 = ['#QID11-1-label', '#QID11-2-label', '#QID11-3-label', '#QID11-4-label', '#QID11-5-label', '#QID11-6-label', '#QID11-7-label'];
var q7 = ['#QID29-1-label', '#QID29-2-label', '#QID29-3-label', '#QID29-4-label', '#QID29-5-label', '#QID29-6-label', '#QID29-7-label'];
var q8 = ['#QID12-1-label', '#QID12-2-label', '#QID12-3-label', '#QID12-4-label', '#QID12-5-label', '#QID12-6-label', '#QID12-7-label'];
var q9 = ['#QID16-1-label', '#QID16-2-label', '#QID16-3-label', '#QID16-4-label', '#QID16-5-label', '#QID16-6-label', '#QID16-7-label'];
var q10 = ['#QID17-1-label', '#QID17-2-label', '#QID17-3-label', '#QID17-4-label', '#QID17-5-label', '#QID17-6-label', '#QID17-7-label'];
var q11 = ['#QID18-1-label', '#QID18-2-label', '#QID18-3-label', '#QID18-4-label', '#QID18-5-label', '#QID18-6-label', '#QID18-7-label'];
var q12 = ['#QID22-1-label', '#QID22-2-label', '#QID22-3-label', '#QID22-4-label', '#QID22-5-label', '#QID22-6-label', '#QID22-7-label'];
var q13 = ['#QID20-1-label', '#QID20-2-label', '#QID20-3-label', '#QID20-4-label', '#QID20-5-label', '#QID20-6-label', '#QID20-7-label'];
var q14 = ['#QID21-1-label', '#QID21-2-label', '#QID21-3-label', '#QID21-4-label', '#QID21-5-label', '#QID21-6-label', '#QID21-7-label'];
var q15 = ['#QID23-1-label', '#QID23-2-label'];

//randomising age, nation, team
var x = Math.floor(Math.random() * 3);
var y = Math.floor(Math.random() * 12);
var z = Math.floor(Math.random() * 90 );

//randomising questions
var rq1 = Math.floor(Math.random() * 7);
var rq2 = Math.floor(Math.random() * 7);
var rq3 = Math.floor(Math.random() * 7);
var rq4 = Math.floor(Math.random() * 7);
var rq5 = Math.floor(Math.random() * 7);
var rq6 = Math.floor(Math.random() * 7);
var rq7 = Math.floor(Math.random() * 7);
var rq8 = Math.floor(Math.random() * 7);
var rq9 = Math.floor(Math.random() * 7);
var rq10 = Math.floor(Math.random() * 7);
var rq11 = Math.floor(Math.random() * 7);
var rq12 = Math.floor(Math.random() * 7);
var rq13 = Math.floor(Math.random() * 7);
var rq14 = Math.floor(Math.random() * 7);
var rq15 = Math.floor(Math.random() * 2);


  webdriverio
      .remote(options)
      .init()
      .url('https://qtrial2016q2az1.az1.qualtrics.com/jfe/form/SV_5o3JCxVBYpYvEjj')

      .pause(1000)

      .click('#NextButton')

      .pause(1000)

      .click(q1[rq1])
      .click(q2[rq2])
      .click(q3[rq3])
      .scroll('#QID10-5-label')
      .click(q4[rq4])
      .click(q5[rq5])
      .click(q6[rq6])
      .click(q7[rq7])
      .click(q8[rq8])

      .scroll('#NextButton')
      .click('#NextButton')

      .pause(1000)

      .click(q9[rq9])
      .click(q10[rq10])
      .click(q11[rq11])
      .scroll('#QID22-5-label')
      .click(q12[rq12])
      .click(q13[rq13])
      .click(q14[rq14])

      .scroll('#NextButton')
      .click('#NextButton')

      .pause(1000)

      .click(q15[rq15])
      .keys('Tab')
      .pause(100)
      .keys(ages[x])
      .keys('Tab')
      .pause(100)
      .keys(nations[y])
      .keys('Tab')
      .pause(100)
      .keys(teams[z])
      .pause(1000)
      // .click('#NextButton')
      .end();
