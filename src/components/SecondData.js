import React from 'react'

import Card from 'react-bootstrap/Card';

function SecondData({name,ingredients,link,youtube,steps}) {
 


  return (
    <div >
         <Card className="bg-dark text-white">
      <Card.Img src={link} alt="Card image" />
      <Card.ImgOverlay>
      <iframe src={youtube} title='Youtube Video player' allowFullScreen style={{float:'centre'}}></iframe>
        <Card.Title className='title'>{name}</Card.Title>
        <Card.Text className='ingredients'>
          {ingredients}
        </Card.Text>
        <Card.Text className='steps'>{steps}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  








</div>


  )
}

export default SecondData





