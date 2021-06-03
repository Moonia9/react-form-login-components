const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

//GET albums
app.get("/albums", function (req, res) {
  res.send(albumsData);
});

//GET /albums/:albumId
app.get("/albums/:albumId", function (req, res) {
  //get id from request path params
  const albumId = req.params.albumId;
  //get album with that id
  const album = albumsData.find((album) => album.albumId == albumId);
  //return album
  if (album) {
    res.send(album);
  } else {
    res.status(404).send();
  }
  res.send(album);
});

//POST a new album
app.post("/albums", function (req, res) {
  //get new album object from request
  const album = req.body;
  console.log(album);
  if (albumsData.find((album) => albumsData.albumId == album.albumId)) {
    res.send({ success: false });
    return;
  }

  albumsData.push(album);
  //add album object to array
  //return {success : true}
  res.send({ success: true });
});

//DELETE an album
app.delete("/albums/:albumId", function (req, res) {
  //get id from request path params
  const albumId = req.params.albumId;
  const index = albumsData.find((index) => index.albumId == albumId);
  console.log(index);
  if (index < 0) {
    //return 404 status
    res.status(404).send(); //Not found
  } else {
    //remove the album with id
    albumsData.splice(index, 1, null);
    //return 200 with {success : true}
    res.status(200).send(albumsData[index]);
  }
});

app.listen(5000, () =>
  console.log("Server running and listening to port 5000")
);
