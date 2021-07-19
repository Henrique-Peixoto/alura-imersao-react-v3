import { SiteClient } from 'datocms-client';

export default async function createPost(request, response) {
  if(request.method === 'POST'){
    const TOKEN = 'bd1a03a01c46d816be68223bb15bb2';
    const client = new SiteClient(TOKEN);

    const objectReceived = JSON.parse(request.body);

    const newRegister = await client.items.create({
      itemType: '977021',
      ...objectReceived
    })

    response.json({
      newRegister
    })

    return;
  }

  response.status(404).json({
    message: 'Erro ao criar post!'
  })
}
