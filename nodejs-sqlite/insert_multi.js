let db = require ('./db_config');

db.serialize(function() {
  let sql =  "INSERT INTO favorite_songs (title, artist) VALUES (?,?)";
  let stmt = db.prepare(sql);
  var songs = [
   ["Dear god", "Avenged Sevenfold"],
   ["No Matter", "Akon"],
   ["No Women No Cry", "Bob Marley"],
   ["Umbrella", "Rihana"]
  ];

  songs.forEach((song) => {
      stmt.run(song, (err) => {
         if(err) throw err;
       });
   });

  console.log(`${songs.length} record inserted`);
  stmt.finalize();

});

db.close();

