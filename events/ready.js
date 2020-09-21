module.exports = async (client, message) => {
  client.verification.forEach(k => {
    const eTime = client.verification.get(k.key, 'endtime')
    const d = new Date();
    const curTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    if(curTime >= eTime){
      client.verification.delete(k.key)    
    };
  });
};