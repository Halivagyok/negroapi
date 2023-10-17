const express = require('express');
const app = express();
const port = 8080;

app.use(express.json() )

app.get('/api/hi', (req, res) => {
  res.send({ 
    get: 'real😂'
  });
});

app.get('/negro', (req, res) => {
  res.status(200).send({
    1.: "classic, fekete",
    2.:"mézes, sárga",
    3.:"fekete ribizli,  lila",
    4.:"mentol, fehér",
    5.:"extra erős, fehérebb"
  });
});

app.get('/negro/:id', (req, res ) => {
  const{id} = req.params;

  if (id == 1){
    res.status(200).send({ 
      1. :"nyami", 
      ize: "classic",
      szine: "fekete"
    })
  }

  if (id == 2){
    res.status(200).send({ 
      2. :"nyami", 
      ize: "mézes",
      szine: "sárga"
    })
  }

  if (id == 3){
    res.status(200).send({ 
      3. :"nyami", 
      ize: "fekete ribizli",
      szine: "lila"
    })
  }

  if (id == 4){
    res.status(200).send({ 
      4. :"nyami", 
      ize: "mentol",
      szine: "fehér"
    })
  }

  if (id == 5){
    res.status(200).send({ 
      5. :"nyami", 
      ize: "extra erős",
      szine: "fehérebb"
    })
  }
})

app.listen(port, () => {
  console.clear();
  console.log(`Server is running on http://localhost:${port}`);
  
});
