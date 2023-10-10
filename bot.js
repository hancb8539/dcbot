//https://ithelp.ithome.com.tw/articles/10234876
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const prefix = require('./prefix.json')
client.login(auth.key);

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/*client.on('message', msg => {
    try{
        if (!msg.guild || !msg.member) return;
        if (!msg.member.user) return;
        if (msg.member.user.bot) return;
    } catch (err){
        return;
    }
    try{
        let tempPrefix = '-1';
        const prefixED = Object.keys(prefix); //前綴符號定義
        prefixED.forEach(element => {
            if (msg.content.substring(0, prefix[element].Value.length) === prefix[element].Value) {
                tempPrefix = element;
            }
        });
        //實作
        switch (tempPrefix) {
            case '0': //文字回應功能
                const cmd = msg.content.substring(prefix[tempPrefix].Value.length).split(' '); //以空白分割前綴以後的字串
                if (cmd[0] == '紅桃姊姊' || cmd[0] == '紅桃') {
                    var str = ['洛基小魷魚！','天蓬元帥！','豬八戒','嬤','奇拉比~~~~',''];
		    num = getRandom(0,str.length-1)
		    if (num == str.length-1)
			msg.channel.send({files: ["sleep.jpg"]})
		    else {    
			msg.channel.send(str[num]);
		    }
                }
                else if (cmd[0] == '黑桃妹妹' || cmd[0] == '黑桃') {
                    var str = ['可愛擊敗黑狗狗','歐氣快來！！！'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '叔叔') {
                    var str = ['您好老！','AKB的BBBBBBB'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '浪浪') {
                    var str = ['\\ 北方煞徒 \/\\ 北方煞徒 \/\\ 北方煞徒 \/','敢鑽我漏洞你找死膩?','敢不敢從截圖系休學？'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '百王大大') {
                    var str = ['醒！','陰間百王','金變快來!!!'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '皮哥') {
                    var str = ['一袋米要扛幾樓?','卍神羅天征卍','千年殺','色誘之術'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '巨巨') {
                    var str = ['巨大陰影的紅桃!'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '皮皮骰子神') {
                    var str = ['再搞啊！！'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '洗衣板') {
                    var str = ['芷蓉哥要洗衣服？'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == 'i姬' || cmd[0] == '愛姬') {
                    var str = ['卍愛姫乂我佛你ㄟ夜店卍','阿彌陀佛，普渡眾生'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '我是你哥哥') {
                    var str = ['嘿！'];
                    msg.channel.send(str[getRandom(0,str.length-1)]);
                }
                else if (cmd[0] == '走心') {
                    msg.channel.send('<:emoji_38:959074717984247808>');
                }
		        else if (cmd[0] == '魷魚') {
                    msg.channel.send('<:icetea2:958938642234085396>');
                }
		        else if (cmd[0] == '紅桃起床') {
                    msg.channel.send({files: ["wakeup.jpg"]})
                }
                else if (cmd[0] == 'help') {
                    msg.channel.send('請輸入:! 人名(紅桃姊姊,紅桃,黑桃妹妹,黑桃,叔叔,浪浪,百王大大,皮哥,巨巨,皮皮骰子神,洗衣板,i姬,愛姬');
                }
                break;
            //case '1': //音樂指令
            //    msg.channel.send('music');
            //    break;
        }
    } catch (err){
        console.log('OnNessageError',err)
    }
});*/

//抓刪 刪除事件
/*client.on('messageDelete', function (message) {
    if (!message.guild) return; //只要是來自群組的訊息
    let mStr = '';
    try{
        mStr = mStr+
	    `---------------------------------------------------\n`+
            `事件 刪除\n`+
            `使用者 <@${message.member.user.id}>\n`+
            `群組 ${message.channel.name}\n`+
            `刪除內容 ${message.content}\n`+
	    `---------------------------------------------------\n`;
        if (message.channel.id == 958523124385730662 || message.channel.id == 958901473926873200){
            if ( message.member.user.id != 848247442290114580 && message.attachments.size == 0){
                client.channels.cache.get(message.channel.id).send(mStr);
            }
            if ( message.member.user.id != 848247442290114580 && message.member.user.id != 957646865032159252 && message.attachments.size != 0){
                client.channels.cache.get(message.channel.id).send(mStr, {files: [message.attachments.first().url]});
            } 
        }
        
    }catch(err){
        console.log("messageDeleteError",err);
    }
});*/

//抓刪 更新事件
/*client.on('messageUpdate', function (oldMessage, newMessage) {
    if (!oldMessage.guild || !newMessage.guild) return;
    mStr = '';
    try {
        mStr = mStr +
            `事件 更新\n` +
            `使用者 <@${oldMessage.member.user.id}>\n`+
            `群組   ${oldMessage.channel.name}\n` +
            `舊對話 ${oldMessage.content}\n` +
            `新對話 ${newMessage.content}`;

            if (oldMessage.channel.id == 958523124385730662 || oldMessage.channel.id == 958901473926873200){
                client.channels.cache.get(oldMessage.channel.id).send(mStr);
            }
    } catch (err) {
        console.log('messageUpdateError', err);
    }
})*/