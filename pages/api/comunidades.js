import { SiteClient } from 'datocms-client';

export default async function createCommunity(request, response) {
  if(request.method === 'POST'){
    const TOKEN = 'bd1a03a01c46d816be68223bb15bb2';
    // const TOKEN = process.env.REACT_APP_READ_ONLY_TOKEN;
    const client = new SiteClient(TOKEN);

    const objectReceived = JSON.parse(request.body);
    console.log(objectReceived);
  
    const newRegister = await client.items.create({
      itemType: '968450',
      ...objectReceived
    })
  
    response.json({
      newRegister: newRegister
    });
    
    return;
  }

  response.status(404).json({
    message: 'Nada no GET, só no POST'
  })
}
