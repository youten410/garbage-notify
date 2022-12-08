function getDate() {
  let date = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'MMdd');
  console.log(date);

  let bin_day = ['0310',
  '0324','0407','0421','0512',
  '0526','0609','0623','0707',
  '0721','0804','0818','0901','0915',
  '0929','1013','1027','1110',
  '1124','1208','1222'
  ];

  let shigen_day = ['0309','0413','0511','0608','0713','0810','0914','1012','1109','1214'];
  
  for (const i of bin_day) {
    if (i === date) {
      bin();
    }
  }

  for (const i of shigen_day) {
    if (i === date) {
      shigen();
    }
  }
}

//トリガーで火曜日と金曜日に通知するように設定　
function moeru(){
  let token = "fpUn3YhYbwRvGlBN80JKvYn9eNC9ZRNC6wgQ4uhIPjG";
  let options =
   {
     "method"  : "post",
     "payload" : {"message": "もえるゴミの日だよ！",
                  "imageThumbnail" :"https://2.bp.blogspot.com/-SN24R4K0Omo/VtoffvSKf0I/AAAAAAAA4X0/AU8wIcv_4IU/s150/gomi_mark01_moeru.png",
                  "imageFullsize" :"https://2.bp.blogspot.com/-SN24R4K0Omo/VtoffvSKf0I/AAAAAAAA4X0/AU8wIcv_4IU/s150/gomi_mark01_moeru.png",
                  }, 
     "headers" : {"Authorization" : "Bearer "+ token}
 
   };
 
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

function bin() {
  let token = "fpUn3YhYbwRvGlBN80JKvYn9eNC9ZRNC6wgQ4uhIPjG";
  let options =
  {
    "method": "post",
    "payload": {
      "message": "ビン・カン・ペットボトルの日だよ！",
      "imageThumbnail": "https://1.bp.blogspot.com/-F_hmSswVCz8/VtofhY4f40I/AAAAAAAA4YE/fg09VtK3tss/s150/gomi_mark05_petbottle.png",
      "imageFullsize": "https://1.bp.blogspot.com/-F_hmSswVCz8/VtofhY4f40I/AAAAAAAA4YE/fg09VtK3tss/s150/gomi_mark05_petbottle.png",
    },
    "headers": { "Authorization": "Bearer " + token }

  };

  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

function shigen() {
  let token = "fpUn3YhYbwRvGlBN80JKvYn9eNC9ZRNC6wgQ4uhIPjG";
  let options =
  {
    "method": "post",
    "payload": {
      "message": "資源ごみの日だよ！",
      "imageThumbnail": "https://4.bp.blogspot.com/-KebmjfCxVp4/VtofiZrFRyI/AAAAAAAA4YM/deWQRg2EfSs/s150/gomi_mark07_shigen.png",
      "imageFullsize": "https://4.bp.blogspot.com/-KebmjfCxVp4/VtofiZrFRyI/AAAAAAAA4YM/deWQRg2EfSs/s150/gomi_mark07_shigen.png",
    },
    "headers": { "Authorization": "Bearer " + token }

  };

  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}