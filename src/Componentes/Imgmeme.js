import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'better-react-carousel';



const Imgmeme = () => {

    const [textomeme1, setTextomeme1] = useState();
    const [textomeme2, setTextomeme2] = useState();
    const [imgmeme, setImgMeme] = useState([]);
    const [selectedImage, setSelectedImage] = useState();
    const [textColor1, setTextColor1] = useState('#FF5733');
    const [textColor2, setTextColor2] = useState('#9BF018');
    
   
    const textmeme1 = (e) =>{
        setTextomeme1(e.target.value);
        console.log(e.target.value);
    }

    const textmeme2 = (e) =>{
      setTextomeme2(e.target.value);
      console.log(e.target.value);
  }


  const seleccionarImg = (url) => {
    setSelectedImage(url); 
    console.log(url);
    }

    /* eslint-disable no-unused-vars */

    const handleTextColor1Change = (e) => {
      setTextColor1(e.target.value);
    };
    
    const handleTextColor2Change = (e) => {
      setTextColor2(e.target.value);
    };

    /* eslint-disable no-unused-vars */

    const descarga = (e) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
    
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = selectedImage;
      img.onload = () => {
      canvas.width = img.width; 
      canvas.height = img.height; 
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    
        ctx.fillStyle = textColor1;
        ctx.textAlign = "center";
        ctx.font = "30px Arial"; 
        ctx.fillText(textomeme1, canvas.width / 2, 50);
    
        
        ctx.fillStyle = textColor2;
        ctx.fillText(textomeme2, canvas.width / 2, canvas.height - 50);
    
        let link = document.createElement("a");
        link.download = "meme.jpg";
        link.href = canvas.toDataURL("image/jpeg"); 
        link.click();
      };
    };
        

    useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(data => data.json())
          .then(json => setImgMeme(json.data.memes))
          .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

 console.log(imgmeme);


  return (
    
      <div className='container'>
      
        <h1 className='mt-5 mb-3'>Editá tu propio meme</h1>

        <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
        <input onChange={textmeme1} className="form-control m-auto d-block mb-3" type="text" placeholder="Frase 1 - se ve arriba" name="meme1"/>
        <input onChange={textmeme2} className="form-control m-auto d-block" type="text" placeholder="Frase 2 - se ve abajo  " name="meme2"/>
        <label className="color-label mt-3 mx-3"> Color de Frase 1: 
        <input className="mx-3" type="color" value={textColor1} onChange={(e) => setTextColor1(e.target.value)} />
        </label>
        <label className="color-label mt-3 mx-3"> Color de Frase 2:
        <input className="mx-3" type="color" value={textColor2} onChange={(e) => setTextColor2(e.target.value)} />
        </label>


        <h2 className='mt-3 mb-3'>Elegí la imagen para tu meme</h2>
        
        <Carousel cols={4} rows={1} gap={5} loop >
        {imgmeme.map(memes => (
        <Carousel.Item>
              <img className="mt-4" width="100%" onClick={() => seleccionarImg(memes.url)} src={memes.url} alt="meme" style={{ cursor: 'pointer' }} />
              </Carousel.Item>
            ))}
          
       </Carousel>
     


   
        
       
        <Card className='mt-5'>
         
        <figure className='text-center position-relative' id='exportar'>
          <p className='texto position-absolute h2 top-0 mt-3' style={{ color: textColor1 }}>{textomeme1}</p> 
          <img crossOrigin='anonymous' src={`${selectedImage}`} className='imgFigure mt-3 d-block m-auto w-50' alt='meme'/>
          <p className='texto position-absolute bottom-0 h2' style={{ color: textColor2 }}>{textomeme2}</p>
        </figure>

        <button onClick={descarga} type='button' className='btn justify-conten mx-auto btn-primary mt-5 mb-4'>Descargar meme</button>
      
  
        </Card>
    
        
        </div>
          )
         
}

export default Imgmeme;