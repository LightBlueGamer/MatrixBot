module.exports = {
	name: 'eval',
	description: 'eval',
  category: 'System', //Mod  Info  System
  staffOnly: false,
  invisible: true,
	execute(message, args, client) {
    const clean = text => {
    if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
}
  const argsone = message.content.split(" ").slice(1);
 
    if(message.author.id !== '232466273479426049') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    
  },
};